import bcModSdk from "bondage-club-mod-sdk"
import { httpInit } from "config";
const modApi = bcModSdk.registerMod("MyExampleModName", "1.0.0");

httpInit()
// Example: Add original text to the end of any garble text
// For more details see `SpeechGarble` function in BC code
modApi.hookFunction("SpeechGarble", 4, (args, next) => {
	// Copy original, which is second argument
	const originalText = args[1];
	// Call the original function, saving result
	const garbledText = next(args);
	// Return modified result by adding original text after the garbled text
	return garbledText + "<>" + originalText;
});
