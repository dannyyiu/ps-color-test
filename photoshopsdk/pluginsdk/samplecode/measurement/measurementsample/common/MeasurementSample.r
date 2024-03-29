// ADOBE SYSTEMS INCORPORATED
// Copyright  1993 - 2007 Adobe Systems Incorporated
// All Rights Reserved
//
// NOTICE:  Adobe permits you to use, modify, and distribute this 
// file in accordance with the terms of the Adobe license agreement
// accompanying it.  If you have received this file from a source
// other than Adobe, then your use, modification, or distribution
// of it requires the prior written permission of Adobe.
//-------------------------------------------------------------------------------

#include "PIDefines.h"

#ifdef __PIMac__
	#include <Carbon.r>
	#include "PIGeneral.r"
	#include "PIUtilities.r"
#elif defined(__PIWin__)
	#define Rez
	#include "PIGeneral.h"
	#include "PIUtilities.r"
#endif

resource 'PiPL' (1600, "Measurement Sample", purgeable) 
	{
		{
		Kind { Measurement },
		Name { "Measurement Sample" },
		
		RequiredHost { '8BIM' },
		Version { 0x00010000 },
		Priority { 0 },
   		
		PlugInMaxSize { 2000000, 2000000 },
	
		#ifdef __PIMac__
			CodeMacIntel64 { "PluginMain" },
		#else
			#if defined(_WIN64)
				CodeWin64X86 { "PluginMain" },
			#else
				CodeWin32X86 { "PluginMain" },
			#endif
		#endif
		}
	};

