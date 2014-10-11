main();

function main() {
var fileLog = new File( "~/Desktop/FindPluginInSystemInfo.log" );
fileLog.open( "w" );
var errors = 0;
var sysInfo = app.systemInformation;
var failStart = sysInfo.search( "Plug-ins that failed to load:" );
if ( failStart == -1 ) {
    errors++;
    fileLog.writeln( "No failed to load found" );
}
var failEnd = sysInfo.search( "Flash:");
if ( failEnd == -1 ) {
    errors++;
    fileLog.writeln( "No flash found" );
}
if ( failEnd < failStart ) {
    errors++;
    fileLog.writeln( "failEnd < failStart" );
}
   
// TODO double check the statistics version, "Generic Plug-in" and 3dsimulator 
// one plug-in could have more than one entry, statistics and SelectoramaShape
// some plug-ins don't show up, see above TODO to confirm
var pluginList = [ "3DFormat", "Heightfield From Grayscale", "3DSimpleModeler", 
                   "3DSimpleRender", /* "3DSimulator", */ "AutomationFilter",
                   "ColorMunger", "Dissolve", "Getter", "GradientImport",
                   "Hidden", "History", "Listener", "Measurement Sample",
                   "NearestBase", "Outbound", 
                   "Poor Man's Type Tool", "Propetizer", "Selectorama", 
                   "Shape", "SimpleFormat", "Entropy", "Kurtosis", "Maximum",
                   "Mean", "Median", "Minimum", "Range", "Skewness", 
                   "Standard Deviation", "Summation", "Variance", "TextAuto",
                   "TextFormat" ];
                   
if ( $.os.search(/windows/i) != -1 )
	pluginList.push( "MFC PlugIn" );

var pluginIndex = [];

for ( var i = 0; i < pluginList.length; i++ ) {
    pluginIndex[i] = sysInfo.search( pluginList[i] );
    // $.writeln( pluginList[i] + " = " + pluginIndex[i] );
    if ( pluginIndex[i] == -1 ) {
        errors++;
        fileLog.writeln( "Plug in not found: " + pluginList[i] );
    }
    else if ( pluginIndex[i] > failStart && pluginIndex[i] < failEnd ) {
        errors++;
        fileLog.writeln( "pluginIndex[i] > failStart && pluginIndex[i] < failEnd " +  pluginList[i] );
    }
}

if (errors) {
	fileLog.close();
	fileLog.execute();
}

return errors == 0 ? " PASS" : " FAIL";
}
// end FindPluginInSystemInfo.jsx
