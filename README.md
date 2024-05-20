# Rune Transliteration App

![rune app](https://i.imgur.com/DvaFSMs.png)
 

A simple web app which takes a latin input and transforms it to runic systems, it currently supports elder and younger futhark, anglo-saxon futhorc and medieval runes. For the younger futhark system it has the option to toggle between short-twig types and long-branch types. 

This shouldn't be used for any serious project nor proper transliteration, and it's purpose is so far only recreational. It may be useful if you want to generate a design that displays runic alphabets, or add some flavor text.

## Alphabets supported
- **Elder Futhark**: Used for proto-norse, proto-germanic and ancient languages like gothic. 
- **Younger Futhark**: Default option. This is the writing system of old norse.
- **Anglo-Saxon Fuhtorc**: Anglo-saxon runes used in britain. 
- **Medieval Runes**: Runic alphabet used to write scandinavian languages during the middle ages.
- **Amalgamation**: This is a system I made up mixing elements from the other four alphabets, its advantage being that it covers most latin characters

I'd implement other related writing systems like old italic or phoenician, however there's no unicode support for it.

## Tools used
- React
- TailwindCSS

## Run Locally
Go to the main directory and run
`npm run dev`
No configuration needed

## Live Demo
[View Live](https://pncar.github.io/runetranscript/)

## Known Issues & Future
- It currently does not transform english text phonetically, let alone recognizing the language of the input and transforming it depending on the language's phonetics, so the output may not always be accurate.
- There may be letter combinations which are currently not handled. For example *fohn* gets converted to *ᚠᚢᛁᚼᚾ*. In which ᚼ and shouldn't be there, and ᚢᛁ may not be accurate.
- A reverse option (rune input to latin) may be implemented.
- The logo/branding is a bit bland
