(()=>{ServerEvents.recipes(e=>{function s(a,r,o,t,c,_){e.remove({output:`powah:${a}_${r}`}),e.shaped(`1x powah:${a}_${r}`,["AEA","BCB","DDD"],{A:t,B:`powah:capacitor_${o}`,C:"powah:dielectric_casing",D:c,E:_})}function h(a,r,o,t,c,_){e.remove({output:`powah:${a}_${r}`}),e.shaped(`1x powah:${a}_${r}`,["AAA","BCB","DED"],{A:c,B:`powah:capacitor_${o}`,C:"powah:dielectric_casing",D:t,E:_})}function l(a,r,o,t){e.remove({output:`powah:reactor_${a}`}),e.shaped(`2x powah:reactor_${a}`,["ABA","BCB","ABA"],{A:`powah:${o}`,B:`powah:capacitor_${r}`,C:`powah:${t}`})}function w(a,r,o,t){e.remove({output:`powah:thermo_generator_${a}`}),e.shaped(`1x powah:thermo_generator_${a}`,["ABA","CDC","EFE"],{A:"powah:dielectric_paste",B:r,C:`powah:capacitor_${o}`,D:"powah:dielectric_casing",E:`powah:${t}`,F:"powah:thermoelectric_plate"})}let i=["starter","basic","hardened","blazing","niotic","spirited","nitro"],n=["basic_tiny","basic","hardened","blazing","niotic","spirited","nitro"],p=["powah:dielectric_paste","minecraft:iron_ingot","powah:steel_energized","powah:crystal_blazing","powah:crystal_niotic","powah:crystal_spirited","powah:crystal_nitro"],m=["powah:photoelectric_pane","powah:solar_panel_starter","powah:solar_panel_basic","powah:solar_panel_hardened","powah:solar_panel_blazing","powah:solar_panel_niotic","powah:solar_panel_spirited"],d=["minecraft:furnace","powah:furnator_starter","powah:furnator_basic","powah:furnator_hardened","powah:furnator_blazing","powah:furnator_niotic","powah:furnator_spirited"],g=["minecraft:bucket","powah:magmator_starter","powah:magmator_basic","powah:magmator_hardened","powah:magmator_blazing","powah:magmator_niotic","powah:magmator_spirited"],u=["thermoelectric_plate","thermo_generator_starter","thermo_generator_basic","thermo_generator_hardened","thermo_generator_blazing","thermo_generator_niotic","thermo_generator_spirited"],f=["uraninite","reactor_starter","reactor_basic","reactor_hardened","reactor_blazing","reactor_niotic","reactor_spirited"],b=["dielectric_casing","uraninite","uraninite","uraninite","uraninite","uraninite","uraninite"];for(let a in i)s("solar_panel",i[a],n[a],m[a],p[a],"powah:photoelectric_pane"),h("furnator",i[a],n[a],d[a],p[a],"minecraft:furnace"),h("magmator",i[a],n[a],g[a],p[a],"minecraft:bucket"),l(i[a],n[a],f[a],b[a]),w(i[a],p[a],n[a],u[a])});})();