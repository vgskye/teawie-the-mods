(()=>{var n={bacon:{name:"Bacon Bee",bee:{primaryColor:"#bddada",secondaryColor:"#d0581f",flowerTag:"minecraft:flowers",conditions:[{type:"forge:mod_loaded",modid:"productivebees"}]},breeding_recipe:["productivebees:zombie","productivebees:farmer_bee"],conversion_recipe:{from:"productivebees:zombie",with:"minecraft:porkchop"},comb_output:{item:"minecraft:porkchop",range:{min:1,max:4},chance:90,do_blocks:!0}}},o=n;ClientEvents.lang("en_us",i=>{for(let e in o)console.log("adding lang:",`entity.productivebees.${e}_bee`,o[e].name),i.add(`entity.productivebees.${e}_bee`,o[e].name)});})();