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

    sql = "DELETE FROM "+table+" WHERE true"
    print sql
    cur.execute(sql);

    i = 1;
    with open(fileName) as f:
        header = f.readline()
        #If you want to iterate manually use file.readline()
        for line in f:
            vals = line[:-1].split(',')
            vals = fixValues(vals)
            print vals
            sql = "INSERT INTO "+table+" ("+ ",".join(cols) +") VALUES (" +",".join(vals)+ ")"
            print sql
            cur.execute(sql);
            i = i + 1
            if i > 10:
                break

    conn.commit()
    conn.close()

def fixValues(vals):
    i = 0 
    print vals
    for val in vals:

        if vals[i] == '':
            vals[i] = 'null'
        else:
            try:
                temp = unicode(val)
                if(temp.isnumeric()):
                    #print "Is number"
                    vals[i] = vals[i]
                else:
                    #rint "Is not number"
                    vals[i] = "\'"+vals[i]+"\'"
            except ValueError:
                    vals[i] = "\'"+vals[i]+"\'"

        i = i + 1

    return vals


if __name__ == "__main__":
    print "***************************************************************\n"
    folder = '../capas/mapatonGTFS'
    files = filesInDir(folder)

    for currF in files:
        if ".txt" in currF:
            fileWithPath= folder+'/'+currF
            print "\n\n *********** Importing file: ",fileWithPath
            cols = readFile(fileWithPath)
            table = "cam_"+currF[0:-4]
            insertInto(fileWithPath, table, cols)

    #postgresqlExamle();
