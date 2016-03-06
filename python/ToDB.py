import sys, string
__author__="Olmo S. Zavala Romero"

#for Posgresql only
import psycopg2
import os

def readFile(fileName):
    "Reads the columns in the header of the file"
    #The with statment is used as a try, catch finally
    thisfile = open(fileName)
    header = thisfile.readline()
    cols = header.split(',')
    #-- Remove \n from last column
    cols[len(cols)-1] = cols[len(cols)-1][:-1]
    print cols

    return cols

def filesInDir(dirPath):
    dirList = os.listdir(dirPath)
    return dirList

def insertInto(fileName,table,cols):
    #For Posgresql only
    try: 
        conn = psycopg2.connect("dbname='viajandodf' user='olmozavala' host='98.230.117.107' password='sopasperico'")
    except:
        print "Failed to connect to database"

    cur = conn.cursor();

    sql = "DELETE FROM "+table+" WHERE true ";
    print sql
    cur.execute(sql);

    i = 1;
    with open(fileName) as f:
        header = f.readline()
        #If you want to iterate manually use file.readline()
        for line in f:
            vals = line[:-1].split(',')
            vals = fixValues(vals)
            sql = "INSERT INTO "+table+" ("+ ",".join(cols) +") VALUES (" +",".join(vals)+ ")"
            try:
                cur.execute(sql);
            except ValueError:
                print sql

            i = i + 1

    conn.commit()
    conn.close()

def fixValues(vals):
    i = 0 
    for val in vals:

        if vals[i] == '':
            vals[i] = 'null'
        else:
            try:
                temp = unicode(val)
                if(temp.isnumeric()):
                    vals[i] = vals[i]
                else:
                    vals[i] = "\'"+vals[i]+"\'"
            except ValueError:
                    vals[i] = "\'"+vals[i]+"\'"

        i = i + 1

    return vals

def initGeoTables():
    #For Posgresql only
    try: 
        conn = psycopg2.connect("dbname='viajandodf' user='olmozavala' host='98.230.117.107' password='sopasperico'")
    except:
        print "Failed to connect to database"

    cur = conn.cursor();

    sql = "ALTER TABLE cam_shapes ADD column geog geography(POINT,4326)";
    cur.execute(sql);
    print sql;
    sql = "ALTER TABLE cam_stops ADD column geog geography(POINT,4326)";
    cur.execute(sql);
    print sql;
    sql = "ALTER TABLE cam_routes ADD column geog geography(LINESTRING,4326)";
    cur.execute(sql);
    print sql;
    sql = "UPDATE cam_shapes SET geog = ST_GeogFromText('SRID=4326;POINT('|| shape_pt_lat ||' '|| shape_pt_lon ||')')";
    cur.execute(sql);
    print sql;
    sql = "UPDATE cam_stops SET geog = ST_GeogFromText('SRID=4326;POINT('|| stop_lat ||' '|| stop_lon ||')')";
    cur.execute(sql);
    print sql;

    conn.commit()
    conn.close()

if __name__ == "__main__":
    print "***************************************************************\n"
    folder = '../capas/mapatonGTFS'
    #files = filesInDir(folder)
    files = ['calendar.txt','fare_attributes.txt','routes.txt','shapes.txt',
                'stops.txt','fare_rules.txt','trips.txt','stop_times.txt']
    initGeo = True;
    loadData = False;

    if initGeo:
        initGeoTables()

    if loadData:
        for currF in files:
            if ".txt" in currF:
                fileWithPath= folder+'/'+currF
            print "\n\n *********** Importing file: ",fileWithPath
            cols = readFile(fileWithPath)
            table = "cam_"+currF[0:-4]
            insertInto(fileWithPath, table, cols)

