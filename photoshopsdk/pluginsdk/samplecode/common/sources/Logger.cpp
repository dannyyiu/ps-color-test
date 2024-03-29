#include "PITypes.h"
#include "Logger.h"
#include "PIUFile.h"

Logger::Logger( const char * inString )
{

	if (GetFullPathToDesktop(fullPath, MAX_PATH))
	{
		fullPath[0] = '\0';
	}
	
	PIstrlcat(fullPath, inString, MAX_PATH-1);

	PIstrlcat(fullPath, ".log", MAX_PATH-1);
	
}

Logger::~Logger()
{
	fileOut.close();
}
	
void Logger::Write( const char * inMessage, const bool endOfLine )
{
	Open();
	fileOut << inMessage;
	if (endOfLine)
		fileOut << endl;
	Close();
}
	
void Logger::Write( const int32 inValue, const bool endOfLine )
{
	Open();
	fileOut << inValue;
	if (endOfLine)
		fileOut << endl;
	Close();
}

void Logger::Write( const double inValue, const bool endOfLine )
{
	Open();
	fileOut << inValue;
	if (endOfLine)
		fileOut << endl;
	Close();
}

void Logger::Write( const string & inValue, const bool endOfLine )
{
	Write(inValue.c_str(), endOfLine);
}

void Logger::Delete(void)
{
}

void Logger::Open(void)
{
	fileOut.open(fullPath, ios_base::app|ios_base::out);
}

void Logger::Close(void)
{
	fileOut.close();
}
// end Logger.cpp
