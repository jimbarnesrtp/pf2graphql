import json

## loading weapons
with open('weapons-pf2.json') as f:
  data = json.load(f)

fileweap = "weapons.js"
weap = open(fileweap, "w")

weap.write("const melee = "+json.dumps(data['meleeWeapons'])+"\n")
weap.write("const range = "+json.dumps(data['rangeWeapons'])+"\n")
weap.write("const baseMagicWeapons = "+json.dumps(data['baseMagicWeapons'])+"\n")
weap.write("const specialMats = "+json.dumps(data['specialMaterialWeapons'])+"\n")
weap.write("const magicWeapons = "+json.dumps(data['magicWeapons'])+"\n")
weap.write("const critSpecialization = "+json.dumps(data['critSpecialization'])+"\n")
weap.write("\n")
weap.write("module.exports = { melee, range, specialMats, baseMagicWeapons, magicWeapons, critSpecialization}\n")

weap.close

## loading spells
with open('spells-pf2-v2.json') as f:
  data1 = json.load(f)

filespells = "spells.js"
spells = open(filespells, "w")
spells.write("const spells = "+json.dumps(data1['spells'])+"\n")
spells.write("\n")
spells.write("module.exports = { spells}\n")
spells.close

## loading traits file
with open('traits-pf2.json') as f:
  data2 = json.load(f)

filestraits = "traits.js"
traits = open(filestraits, "w")
traits.write("const traits = "+json.dumps(data2['traits'])+"\n")
traits.write("\n")
traits.write("module.exports = { traits}\n")

traits.close


##loading feats
with open('feats-pf2-v2.json') as f:
  data3 = json.load(f)

filefeats = "feats.js"
feats = open(filefeats, "w")
featHolder = []
featHolder.extend(data3['baseFeats'][' generalFeats'])
featHolder.extend(data3['baseFeats'][' alchemistFeats'])
featHolder.extend(data3['baseFeats'][' barbarianFeats'])
featHolder.extend(data3['baseFeats'][' bardFeats'])
featHolder.extend(data3['baseFeats'][' championFeats'])
featHolder.extend(data3['baseFeats'][' clericFeats'])
featHolder.extend(data3['baseFeats'][' druidFeats'])
featHolder.extend(data3['baseFeats'][' fighterFeats'])
featHolder.extend(data3['baseFeats'][' monkFeats'])
featHolder.extend(data3['baseFeats'][' rangerFeats'])
featHolder.extend(data3['baseFeats'][' rogueFeats'])
featHolder.extend(data3['baseFeats'][' sorcererFeats'])
featHolder.extend(data3['baseFeats'][' wizardFeats'])

feats.write("const baseFeats = "+json.dumps(featHolder)+"\n")
feats.write("\n")
archHolder = []
for key in data3['archTypeFeats']:
  archHolder.extend(data3['archTypeFeats'][key])

feats.write("const archFeats = "+json.dumps(archHolder)+"\n")
feats.write("\n")
feats.write("module.exports = { baseFeats, archFeats}\n")

feats.close

### loading monsters
with open('monsters-v2-pf2.json') as f:
  data4 = json.load(f)

filestraits = "monsters.js"
traits = open(filestraits, "w")
traits.write("const monsters = "+json.dumps(data4['monsters'])+"\n")
traits.write("\n")
traits.write("module.exports = { monsters}\n")

traits.close

### loading adventuring gear
with open('adv-gear-v2-pf2.json') as f:
  data5 = json.load(f)

filegear = "advgear.js"
gear = open(filegear, "w")
gear.write("const itemList = "+json.dumps(data5['wornItems'])+"\n")
gear.write("\n")
gear.write("module.exports = { itemList}\n")

gear.close

### loading consumables
with open('consumables-pf2.json') as f:
  data6 = json.load(f)

fileconsum = "consumables.js"
consum = open(fileconsum, "w")
consum.write("const ammunition = "+json.dumps(data6['ammunition'])+"\n")
consum.write("const other = "+json.dumps(data6['other'])+"\n")
consum.write("const oils = "+json.dumps(data6['oil'])+"\n")
consum.write("const potions = "+json.dumps(data6['potions'])+"\n")
consum.write("const talismans = "+json.dumps(data6['talismans'])+"\n")
consum.write("\n")
consum.write("module.exports = { ammunition, other, oils, potions, talismans}\n")

consum.close

### loading alchemical items
with open('alchemical-pf2.json') as f:
  data7 = json.load(f)

filealchem = "alchemicalitems.js"
alchem = open(filealchem, "w")
alchem.write("const bombs = "+json.dumps(data7['bombs'])+"\n")
alchem.write("const elixirs = "+json.dumps(data7['elixirs'])+"\n")
alchem.write("const poisons = "+json.dumps(data7['poisons'])+"\n")
alchem.write("const tools = "+json.dumps(data7['tools'])+"\n")
alchem.write("\n")
alchem.write("module.exports = { bombs, elixirs, poisons, tools}\n")

alchem.close

### loading shields
with open('shields-pf2.json') as f:
  data8 = json.load(f)

fileshield = "shields.js"
shield = open(fileshield, "w")
shield.write("const baseShields = "+json.dumps(data8['baseShields'])+"\n")
shield.write("const specialMaterialShields = "+json.dumps(data8['specialMaterialShields'])+"\n")
shield.write("const specificShields = "+json.dumps(data8['specificShields'])+"\n")
shield.write("\n")
shield.write("module.exports = { baseShields, specialMaterialShields, specificShields}\n")

shield.close

## loading focus spells
with open('focus-spells-pf2.json') as f:
  data9 = json.load(f)

filefspells = "focusspells.js"
fspells = open(filefspells, "w")
fspells.write("const spellList = "+json.dumps(data9['spells'])+"\n")
fspells.write("\n")
fspells.write("module.exports = { spellList}\n")
fspells.close

## loading rituals
with open('rituals-pf2.json') as f:
  data10 = json.load(f)

filerituals = "rituals.js"
rituals = open(filerituals, "w")
rituals.write("const rituals = "+json.dumps(data10['rituals'])+"\n")
rituals.write("\n")
rituals.write("module.exports = { rituals}\n")
rituals.close

## loading armors
with open('armor-pf2.json') as f:
  data11 = json.load(f)

filearmor = "armors.js"
armor = open(filearmor, "w")
armor.write("const armorList = "+json.dumps(data11['baseArmor'])+"\n")
armor.write("const baseMagicArmor = "+json.dumps(data11['baseMagicArmor'])+"\n")
armor.write("const preciousMaterialArmor = "+json.dumps(data11['preciousMaterialArmor'])+"\n")
armor.write("const magicArmorList = "+json.dumps(data11['magicArmor'])+"\n")
armor.write("\n")
armor.write("module.exports = { armorList, baseMagicArmor,preciousMaterialArmor,magicArmorList}\n")
armor.close

## loading conditions
with open('conditions-pf2.json') as f:
  data12 = json.load(f)

filecond = "conditions.js"
cond = open(filecond, "w")
cond.write("const conditions = "+json.dumps(data12['conditions'])+"\n")
cond.write("\n")
cond.write("module.exports = { conditions}\n")
cond.close