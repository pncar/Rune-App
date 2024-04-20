const youngerFuthark = {
  map: [
    ["ch","ᚴ"],
    ["ck","ᚴ"],
    ["cci","ᚴᛋᛁ"],
    ["cce","ᚴᛋᛁ"],
    ["ce","ᛋᛁ"],
    ["ci","ᛋᛁ"],
    ["qu","ᚴ"],
    ["ae","ᚬ"],
    ["th","ᚦ"],
    ["þ","ᚦ"],
    ["ng","ᚴ"],
    ["ee","ᛁ"],
    ["sh","ᛋᚴ"],
    ["ll","ᛚ"],
    ["ph","ᚠ"],
    ["f","ᚠ"],
    ["v","ᚢ"],    
    ["u","ᚢ"],
    ["a","ᛅ"],
    ["r","ᚱ"],
    ["c","ᚴ"],
    ["k","ᚴ"],
    ["q","ᚴ"],
    ["g","ᚴ"],
    ["w","ᚢ"],
    ["h","ᚼ"],
    ["n","ᚾ"],
    ["i","ᛁ"],
    ["j","ᛁ"],
    ["y","ᚢ"],
    ["p","ᛒ"],
    ["z","ᛏᛋ"],
    ["s","ᛋ"],
    ["t","ᛏ"],
    ["b","ᛒ"],
    ["e","ᛁ"],
    ["m","ᛘ"],
    ["l","ᛚ"],
    ["d","ᛏ"],
    ["o","ᚢ"],
    ["x","ᚴᛋ"]
  ],
  reverse: [
      ["ᛅ","a"],
      ["ᚾ","n"],
      ["ᚱ","r"],
      ["ᚴ","k"],
      ["ᛋ","s"],
      ["ᛁ","i"],
      ["ᚦ","th"],
      ["ᛚ","l"],
      ["ᚠ","f"],
      ["ᚢ","u"],
      ["ᚼ","h"],
      ["ᛒ","b"],
      ["ᛘ","m"],
      ["ᛏ","t"],
      ["ᚬ","ae"]
  ]
};

const elderFuthark = {
  map: [
    ["ch","ᚲ"],
    ["ck","ᚲ"],
    ["cci","ᚲᛊᛁ"],
    ["cce","ᚲᛊᛖ"],
    ["ce","ᛊᛁ"],
    ["ci","ᛊᛁ"],
    ["qu","ᚲ"],
    ["ae","ᛇ"],
    ["th","ᚦ"],
    ["þ","ᚦ"],
    ["ng","ᛜ"],
    ["ee","ᛁ"],
    ["sh","ᛊᚲ"],
    ["ll","ᛚ"],
    ["ph","ᚠ"],
    ["f","ᚠ"],
    ["v","ᚠ"],    
    ["u","ᚢ"],
    ["a","ᚨ"],
    ["r","ᚱ"],
    ["c","ᚲ"],
    ["k","ᚲ"],
    ["q","ᚲ"],
    ["g","ᚷ"],
    ["w","ᚹ"],
    ["h","ᚺ"],
    ["n","ᚾ"],
    ["i","ᛁ"],
    ["j","ᛃ"],
    ["y","ᛃ"],
    ["p","ᛈ"],
    ["z","ᛉ"],
    ["s","ᛊ"],
    ["t","ᛏ"],
    ["b","ᛒ"],
    ["e","ᛖ"],
    ["m","ᛗ"],
    ["l","ᛚ"],
    ["d","ᛞ"],
    ["o","ᛟ"],
    ["x","ᚲᛊ"]
  ],
  reverse: [
      ["ᛜ","ng"],
      ["ᚦ","th"],
      ["ᛇ","ae"],
      ["ᚨ","a"],
      ["ᛖ","e"],
      ["ᛁ","i"],
      ["ᛃ","y"],
      ["ᛟ","o"],
      ["ᚢ","u"],
      ["ᛒ","b"],
      ["ᛈ","p"],
      ["ᚾ","n"],
      ["ᚱ","r"],
      ["ᚲ","k"],
      ["ᚷ","g"],
      ["ᛊ","s"],
      ["ᛉ","z"],
      ["ᛚ","l"],
      ["ᚠ","f"],
      ["ᚺ","h"],
      ["ᛗ","m"],
      ["ᛏ","t"],
      ["ᛞ","d"]
  ]
};

const angloSaxon = {
  map: [
    ["oe","ᛟ"],
    ["ö","ᛟ"],
    ["st","ᛥ"],
    ["io","ᛡ"],
    ["ea","ᛠ"],
    ["ch","ᚳ"],
    ["ck","ᚳ"],
    ["cci","ᚳᛋᛁ"],
    ["cce","ᚳᛋᛖ"],
    ["ce","ᛋᛁ"],
    ["ci","ᛋᛁ"],
    ["qu","ᛢ"],
    ["ae","ᚫ"],
    ["th","ᚦ"],
    ["þ","ᚦ"],
    ["ng","ᛝ"],
    ["ee","ᛁ"],
    ["sh","ᛋᚳ"],
    ["ll","ᛚ"],
    ["ph","ᚠ"],
    ["f","ᚠ"],
    ["v","ᚠ"],    
    ["u","ᚢ"],
    ["a","ᚪ"], // ᚨ and ᚫ seem to be different
    ["r","ᚱ"],
    ["c","ᚳ"],
    ["k","ᚳ"],
    ["q","ᛢ"],
    ["g","ᚷ"],
    ["w","ᚹ"],
    ["h","ᚻ"],
    ["n","ᚾ"],
    ["i","ᛁ"],
    ["j","ᛄ"],
    ["y","ᚣ"],
    ["p","ᛈ"],
    ["z","ᛉ"],
    ["s","ᛋ"],
    ["t","ᛏ"],
    ["b","ᛒ"],
    ["e","ᛖ"],
    ["m","ᛗ"],
    ["l","ᛚ"],
    ["d","ᛞ"],
    ["o","ᚩ"],
    ["x","ᚳᛋ"]
  ],
  reverse: [
      ["ᛡ","io"], //Could be troublesome since these can form without being there originally
      ["ᛠ","ea"],
      ["ᚦ","th"],
      ["ᚫ","ae"],
      ["ᛥ","st"],
      ["ᛝ","ng"],
      ["ᛟ","ö"],
      ["ᚪ","a"],
      ["ᛖ","e"],
      ["ᛁ","i"],
      ["ᛄ","j"],
      ["ᚩ","o"],
      ["ᚢ","u"],
      ["ᛒ","b"],
      ["ᛈ","p"],
      ["ᚾ","n"],
      ["ᚱ","r"],
      ["ᚳ","k"],
      ["ᚷ","g"],
      ["ᛋ","s"],
      ["ᛉ","z"],
      ["ᛚ","l"],
      ["ᚠ","f"],
      ["ᚻ","h"],
      ["ᛗ","m"],
      ["ᛏ","t"],
      ["ᛞ","d"],
      ["ᛢ","q"],
      ["ᚣ","y"],
      ["ᚹ","w"]
  ]
};

const medieval = {
  map: [
    ["ch","ᚴ"],
    ["ck","ᚴ"],
    ["cci","ᚴᛋᛁ"],
    ["cce","ᚴᛋᛁ"],
    ["ce","ᛋᛁ"],
    ["ci","ᛋᛁ"],
    ["qu","ᛩ"],
    ["ae","ᛅ"],
    ["th","ᚦ"],
    ["þ","ᚦ"],
    ["ng","ᚶ"],
    ["ee","ᛁ"],
    ["sh","ᛋᚴ"],
    ["ll","ᛚ"],
    ["oe","ᚯ"],
    ["ph","ᚠ"],
    ["a","ᛆ"],
    ["ö","ᚯ"],
    ["f","ᚠ"],
    ["v","ᚡ"],    
    ["u","ᚢ"],
    ["r","ᚱ"],
    ["c","ᚴ"],
    ["k","ᚴ"],
    ["q","ᛩ"],
    ["g","ᚵ"],
    ["w","ᚢ"],
    ["h","ᚼ"],
    ["n","ᚿ"],
    ["i","ᛁ"],
    ["j","ᛂ"],
    ["y","ᚤ"],
    ["p","ᛔ"],
    ["z","ᛪ"],
    ["s","ᛋ"],
    ["t","ᛐ"],
    ["b","ᛒ"],
    ["e","ᛂ"],
    ["m","ᛘ"],
    ["l","ᛚ"],
    ["d","ᚧ"],
    ["o","ᚮ"],
    ["x","ᚴᛋ"]
  ],
  reverse: [
      ["ᚶ","ng"],
      ["ᚦ","th"],
      ["ᛅ","ae"],
      ["ᚯ","ö"],
      ["ᛆ","a"],
      ["ᚮ","o"],
      ["ᛂ","e"],
      ["ᚿ","n"],
      ["ᚱ","r"],
      ["ᚴ","k"],
      ["ᚵ","g"],
      ["ᛩ","q"],
      ["ᛋ","s"],
      ["ᛪ","z"],
      ["ᛁ","i"],
      ["ᛂ","j"],
      ["ᛚ","l"],
      ["ᚠ","f"],
      ["ᚡ","v"],
      ["ᚢ","u"],
      ["ᚼ","h"],
      ["ᛒ","b"],
      ["ᛔ","p"],
      ["ᛘ","m"],
      ["ᛐ","t"],
      ["ᚧ","d"],
      ["ᚤ","y"]
  ]
};


const own = {
  map: [
    ["ch","ᚴ"],
    ["ck","ᚴ"],
    ["cci","ᚴᛋᛁ"],
    ["cce","ᚴᛋᛁ"],
    ["ce","ᛋᛁ"],
    ["ci","ᛋᛁ"],
    ["qu","ᛩ"],
    ["ae","ᛅ"],
    ["th","ᚦ"],
    ["þ","ᚦ"],
    ["ng","ᚶ"],
    ["ee","ᛁ"],
    ["sh","ᛋᚴ"],
    ["ll","ᛚ"],
    ["oe","ᚯ"],
    ["ph","ᚠ"],
    ["ö","ᚯ"],    
    ["a","ᚨ"],
    ["b","ᛒ"],
    ["c","ᚴ"],
    ["d","ᚧ"],
    ["e","ᛂ"],
    ["f","ᚠ"],
    ["h","ᚻ"],
    ["i","ᛁ"],
    ["g","ᚵ"],
    ["j","ᛂ"],
    ["k","ᚴ"],
    ["l","ᛚ"],
    ["m","ᛗ"],
    ["n","ᚾ"],
    ["o","ᛟ"],
    ["p","ᛔ"],
    ["q","ᛩ"],
    ["r","ᚱ"],
    ["s","ᛋ"],
    ["t","ᛐ"],
    ["u","ᚢ"],
    ["v","ᚡ"],
    ["w","ᚢ"],
    ["x","ᚴᛋ"],
    ["y","ᚤ"],
    ["z","ᛪ"]
  ],
  reverse: [
      ["ᚶ","ng"],
      ["ᚦ","th"],
      ["ᛅ","ae"],
      ["ᚯ","ö"],
      ["ᚨ","a"],
      ["ᛟ","o"],
      ["ᛂ","e"],
      ["ᚾ","n"],
      ["ᚱ","r"],
      ["ᚴ","k"],
      ["ᚵ","g"],
      ["ᛩ","q"],
      ["ᛋ","s"],
      ["ᛪ","z"],
      ["ᛁ","i"],
      ["ᛂ","j"],
      ["ᛚ","l"],
      ["ᚠ","f"],
      ["ᚡ","v"],
      ["ᚢ","u"],
      ["ᚻ","h"],
      ["ᛒ","b"],
      ["ᛔ","p"],
      ["ᛗ","m"],
      ["ᛐ","t"],
      ["ᚧ","d"],
      ["ᚤ","y"]
  ]
};

const twigMapYounger = [
  ["ᚬ","ᚭ"],
  ["ᚼ","ᚽ"],
  ["ᚾ","ᚿ"],
  ["ᛅ","ᛆ"],
  ["ᛋ","ᛌ"],
  ["ᛏ","ᛐ"],
  ["ᛒ","ᛓ"],
  ["ᛘ","ᛙ"],
  ["ᛦ","ᛧ"]
];

export {elderFuthark, youngerFuthark, angloSaxon, medieval, own, twigMapYounger}