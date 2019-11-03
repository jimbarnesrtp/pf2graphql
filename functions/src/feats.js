const baseFeats = [{
    "name": "Additional Lore",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=750",
    "prerequisites": "trained in Lore",
    "benefits": "Become trained in another Lore subcategory",
    "text": "Your knowledge has expanded to encompass a new field. Choose an additional Lore skill subcategory. You become trained in it. At 3rd, 7th, and 15th levels, you gain an additional skill increase you can apply only to the chosen Lore subcategory.  You can select this feat more than once. Each time you must select a new subcategory of Lore and you gain the additional skill increases to that subcategory for the listed levels."
}, {
    "name": "Adopted Ancestry",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=751",
    "prerequisites": "",
    "benefits": "Gain access to ancestry feats from another ancestry",
    "text": "You\u2019re fully immersed in another ancestry\u2019s culture and traditions, whether born into them, earned through rite of passage, or bonded through a deep friendship or romance. Choose a common ancestry. You can select ancestry feats from the ancestry you chose, in addition to your character\u2019s own ancestry, as long as the ancestry feats don\u2019t require any physiological feature that you lack, as determined by the GM."
}, {
    "name": "Alchemical Crafting",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=752",
    "prerequisites": "trained in Crafting",
    "benefits": "Craft alchemical items",
    "text": "You can use the Craft activity to create alchemical items. When you select this feat, you immediately add the formulas for four common 1st-level alchemical items to your formula book."
}, {
    "name": "Arcane Sense",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=754",
    "prerequisites": "trained in Arcana",
    "benefits": "Cast detect magic at will as an arcane innate spell",
    "text": "Your study of magic allows you to instinctively sense its presence. You can cast 1st-level   at will as an arcane innate spell. If you\u2019re a master in Arcana, the spell is heightened to 3rd level; if you\u2019re legendary, it is heightened to 4th level."
}, {
    "name": "Armor Proficiency",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=755",
    "prerequisites": "",
    "benefits": "Become trained in a type of armor",
    "text": "You become trained in light armor. If you already were trained in light armor, you gain training in medium armor. If you were trained in both, you become trained in heavy armor.  You can select this feat more than once. Each time, you become trained in the next type of armor above."
}, {
    "name": "Assurance",
    "level": 1,
    "traits": ["General", " Fortune", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=756",
    "prerequisites": "trained in at least one skill",
    "benefits": "Receive a fixed result on a skill check",
    "text": "Even in the worst circumstances, you can perform basic tasks. Choose a skill you\u2019re trained in. You can forgo rolling a skill check for that skill to instead receive a result of 10 + your proficiency bonus (do not apply any other bonuses, penalties, or modifiers).  You can select this feat multiple times. Each time, choose a different skill and gain the benefits for that skill."
}, {
    "name": "Bargain Hunter",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=758",
    "prerequisites": "trained in Diplomacy",
    "benefits": "Earn Income by searching for deals",
    "text": "You can Earn Income (page 236) using Diplomacy, spending your days hunting for bargains and reselling at a profit. You can also spend time specifically sniffing out a great bargain on an item; this works as if you were using Earn Income with Diplomacy, except instead of gaining money, you purchase the item at a discount equal to the money you would have gained, gaining the item for free if your earned income equals or exceeds its cost. Finally, if you select Bargain Hunter during character creation at 1st level, you start play with an additional 2 gp."
}, {
    "name": "Battle Medicine",
    "level": 1,
    "traits": ["General", " Healing", " Manipulate", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=760",
    "prerequisites": "trained in Medicine",
    "benefits": "Heal yourself or an ally in battle",
    "text": "You can patch up yourself or an adjacent ally, even in combat. Attempt a Medicine check with the same DC as for Treat Wounds and provide the corresponding amount of healing. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day."
}, {
    "name": "Breath Control",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=763",
    "prerequisites": "",
    "benefits": "Hold your breath longer and gain benefits against inhaled threats",
    "text": "You have incredible breath control, which grants you advantages when air is hazardous or sparse. You can hold your breath for 25 times as long as usual before suffocating. You gain a +1 circumstance bonus to saving throws against inhaled threats, such as inhaled poisons, and if you roll a success on such a saving throw, you get a critical success instead."
}, {
    "name": "Canny Acumen",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=764",
    "prerequisites": "",
    "benefits": "Become an expert in a saving throw or Perception",
    "text": "Your avoidance or observation is beyond the ken of most in your profession. Choose Fortitude saves, Reflex saves, Will saves, or Perception. You become an expert in your choice. At 17th level, you become a master in your choice."
}, {
    "name": "Cat Fall",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=765",
    "prerequisites": "trained in Acrobatics",
    "benefits": "Treat falls as shorter than they are",
    "text": "Your catlike aerial acrobatics allow you to cushion your falls. Treat falls as 10 feet shorter. If you\u2019re an expert in Acrobatics, treat falls as 25 feet shorter. If you\u2019re a master in Acrobatics, treat them as 50 feet shorter. If you\u2019re legendary in Acrobatics, you always land on your feet and don\u2019t take damage, regardless of the distance of the fall."
}, {
    "name": "Charming Liar",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=766",
    "prerequisites": "trained in Deception",
    "benefits": "Improve a target's attitude with your lies",
    "text": "Your charm allows you to win over those you lie to. When you get a critical success using the Lie action, the target\u2019s attitude toward you improves by one step, as though you\u2019d succeeded at using Diplomacy to Make an Impression. This works only once per conversation, and if you critically succeed against multiple targets using the same result, you choose one creature\u2019s attitude to improve. You must be lying to impart seemingly important information, inflate your status, or ingratiate yourself, which trivial or irrelevant lies can\u2019t achieve."
}, {
    "name": "Combat Climber",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=768",
    "prerequisites": "trained in Athletics",
    "benefits": "Fight more effectively as you Climb",
    "text": "Your techniques allow you to fight as you climb. You\u2019re not flat-footed while Climbing and can Climb with a hand occupied. You must still use another hand and both legs to Climb."
}, {
    "name": "Courtly Graces",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=772",
    "prerequisites": "trained in Society",
    "benefits": "Use Society to get along in noble society",
    "text": "You were raised among the nobility or have learned proper etiquette and bearing, allowing you to present yourself as a noble and play games of influence and politics. You can use Society to Make an Impression on a noble, as well as with Impersonate to pretend to be a noble if you aren\u2019t one. If you want to impersonate a specific noble, you still need to use Deception to Impersonate normally, and to Lie when necessary."
}, {
    "name": "Diehard",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=774",
    "prerequisites": "",
    "benefits": "Die at dying 5, rather than dying 4",
    "text": "It takes more to kill you than most. You die from the dying condition at dying 5, rather than dying 4."
}, {
    "name": "Different Worlds",
    "level": 1,
    "traits": ["General", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=923",
    "prerequisites": "ability to select ancestry feats from multiple ancestries",
    "benefits": "Create a second identity for yourself with a different name, history, and background.",
    "text": "Your separate experiences in different societies have evolved into entirely separate lives. Create a second identity for yourself with a different name, history, and background. This identity must correspond to one of the ancestries whose ancestry feats you can select. You gain the trained proficiency rank in the Lore skill from the second background you chose (but you don\u2019t gain any of the background\u2019s other benefits), and you gain a +4 circumstance bonus to   checks when making a statement that would be true of your second identity or when disguising yourself as your second identity.  At the GM\u2019s discretion, this feat can be used against non-humanoids if they have regular contact with humanoids or you are able to disguise yourself as a member of the target\u2019s ancestry or type of creature."
}, {
    "name": "Dubious Knowledge",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=776",
    "prerequisites": "trained in a skill with the Recall Knowledge action",
    "benefits": "Learn true and erroneous knowledge on failed check",
    "text": "You\u2019re a treasure trove of information, but not all of it comes from reputable sources. When you fail a Recall Knowledge check using any skill, you learn a bit of true knowledge and a bit of erroneous knowledge, but you don\u2019t have any way to differentiate which is which."
}, {
    "name": "Experienced Professional",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=778",
    "prerequisites": "trained in Lore",
    "benefits": "Prevent critical failures when Earning Income",
    "text": "You carefully safeguard your professional endeavors to prevent disaster. When you use Lore to Earn Income, if you roll a critical failure, you instead get a failure. If you\u2019re an expert in Lore, you gain twice as much income from a failed check to Earn Income, unless it was originally a critical failure."
}, {
    "name": "Experienced Smuggler",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=779",
    "prerequisites": "trained in Stealth",
    "benefits": "Conceal items from observers more effectively",
    "text": "You often smuggle things past the authorities. When the GM rolls your Stealth check to see if a passive observer notices a small item you have concealed, the GM uses the number rolled or 10\u2014whichever is higher\u2014as the result of your die roll, adding it to your Stealth modifier to determine your Stealth check result. If you\u2019re a master in Stealth, the GM uses the number rolled or 15, and if you\u2019re legendary in Stealth, you automatically succeed at hiding a small concealed item from passive observers. This provides no benefits when a creature attempts a Perception check while actively searching you for hidden items. Due to your smuggling skill, you\u2019re more likely to find more lucrative smuggling jobs when using Underworld Lore to Earn Income."
}, {
    "name": "Experienced Tracker",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=780",
    "prerequisites": "trained in Survival",
    "benefits": "Track at your full Speed at a \u20135 penalty",
    "text": "Tracking is second nature to you, and when necessary you can follow a trail without pause. You can Track while moving at full Speed by taking a \u20135 penalty to your Survival check. If you\u2019re a master in Survival, you don\u2019t take the \u20135 penalty. If you\u2019re legendary in Survival, you no longer need to roll a new Survival check every hour when tracking, though you still need to roll whenever there are significant changes in the trail."
}, {
    "name": "Fascinating Performance",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=781",
    "prerequisites": "trained in Performance",
    "benefits": "Perform to fascinate observers",
    "text": "When you Perform, compare your result to the Will DC of one observer. If you succeed, the target is fascinated by you for 1 round. If the observer is in a situation that demands immediate attention, such as combat, you must critically succeed to fascinate it and the Perform action gains the incapacitation trait. You must choose which creature you\u2019re trying to fascinate before you roll your check, and the target is then temporarily immune for 1 hour. If you\u2019re an expert in Performance, you can fascinate up to four observers; if you\u2019re a master, you can fascinate up to 10 observers; and if you\u2019re legendary, you can fascinate any number of observers at the same time."
}, {
    "name": "Fast Recovery",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=782",
    "prerequisites": "Constitution 14",
    "benefits": "Regain more HP from rest, recover faster from disease and poisons",
    "text": "Your body quickly bounces back from afflictions. You regain twice as many Hit Points from resting. Each time you succeed at a Fortitude save against an ongoing disease or poison, you reduce its stage by 2, or by 1 against a virulent disease or poison. Each critical success you achieve against an ongoing disease or poison reduces its stage by 3, or by 2 against a virulent disease or poison. In addition, you reduce the severity of your drained condition by 2 when you rest for a night instead of by 1."
}, {
    "name": "Feather Step",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=783",
    "prerequisites": "Dexterity 14",
    "benefits": "Step into difficult terrain",
    "text": "You step carefully and quickly. You can Step into difficult terrain."
}, {
    "name": "Fleet",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=784",
    "prerequisites": "",
    "benefits": "Increase your Speed by 5 feet",
    "text": "You move more quickly on foot. Your Speed increases by 5 feet."
}, {
    "name": "Forager",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=786",
    "prerequisites": "trained in Survival",
    "benefits": "Forage for supplies to provide for multiple creatures",
    "text": "While using Survival to Subsist, if you roll any result worse than a success, you get a success. On a success, you can provide subsistence living for yourself and four additional creatures, and on a critical success, you can take care of twice as many creatures as on a success.  Each time your proficiency rank in Survival increases, double the number of additional creatures you can take care of on a success (to eight if you\u2019re an expert, 16 if you\u2019re a master, or 32 if you\u2019re legendary). You can choose to care for half the number of additional creatures and provide a comfortable living instead of subsistence living.  Multiple smaller creatures or creatures with significantly smaller appetites than a human are counted as a single creature for this feat, and larger creatures or those with significantly greater appetites each count as multiple creatures. The GM determines how much a non-human creature needs to eat."
}, {
    "name": "Group Coercion",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=788",
    "prerequisites": "trained in Intimidation",
    "benefits": "Coerce multiple targets simultaneously",
    "text": "When you Coerce, you can compare your Intimidation check result to the Will DCs of two targets instead of one. It\u2019s possible to get a different degree of success for each target. The number of targets you can Coerce in a single action increases to four if you\u2019re an expert, 10 if you\u2019re a master, and 25 if you\u2019re legendary."
}, {
    "name": "Group Impression",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=789",
    "prerequisites": "trained in Diplomacy",
    "benefits": "Make an Impression on multiple targets at once",
    "text": "When you Make an Impression, you can compare your Diplomacy check result to the Will DCs of two targets instead of one. It\u2019s possible to get a different degree of success for each target. The number of targets increases to four if you\u2019re an expert, 10 if you\u2019re a master, and 25 if you\u2019re legendary."
}, {
    "name": "Hefty Hauler",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=790",
    "prerequisites": "trained in Athletics",
    "benefits": "Increase your Bulk limits by 2",
    "text": "You can carry more than your frame implies. Increase your maximum and encumbered Bulk limits by 2."
}, {
    "name": "Hobnobber",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=791",
    "prerequisites": "trained in Diplomacy",
    "benefits": "Gather Information rapidly",
    "text": "You are skilled at learning information through conversation. The Gather Information exploration activity takes you half as long as normal (typically reducing the time to 1 hour). If you\u2019re a master in Diplomacy and you Gather Information at the normal speed, when you attempt to do so and roll a critical failure, you get a failure instead. There is still no guarantee that a rumor you learn with Gather Information is accurate."
}, {
    "name": "Impressive Performance",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=793",
    "prerequisites": "trained in Performance",
    "benefits": "Make an Impression with Performance",
    "text": "Your performances inspire admiration and win you fans. You can Make an Impression using Performance instead of Diplomacy."
}, {
    "name": "Incredible Initiative",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=794",
    "prerequisites": "",
    "benefits": "+2 to initiative rolls",
    "text": "You react more quickly than others can. You gain a +2 circumstance bonus to initiative rolls."
}, {
    "name": "Intimidating Glare",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=796",
    "prerequisites": "trained in Intimidation",
    "benefits": "Demoralize a creature without speaking",
    "text": "You can Demoralize with a mere glare. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don\u2019t take a penalty if the creature doesn\u2019t understand your language."
}, {
    "name": "Lengthy Diversion",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=810",
    "prerequisites": "trained in Deception",
    "benefits": "Remain hidden after you Create a Diversion",
    "text": "When you critically succeed to Create a Diversion, you continue to remain hidden after the end of your turn. This effect lasts for an amount of time that depends on the diversion and situation, as determined by the GM (minimum 1 additional round)."
}, {
    "name": "Lie to Me",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=811",
    "prerequisites": "trained in Deception",
    "benefits": "Use Deception to detect lies",
    "text": "You can use Deception to weave traps to trip up anyone trying to deceive you. If you can engage in conversation with someone trying to Lie to you, use your Deception DC if it is higher than your Perception DC to determine whether they succeed. This doesn\u2019t apply if you don\u2019t have a back-and-forth dialogue, such as when someone attempts to Lie during a long speech."
}, {
    "name": "Multilingual",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=814",
    "prerequisites": "trained in Society",
    "benefits": "Learn two new languages",
    "text": "You easily pick up new languages. You learn two new languages, chosen from common languages, uncommon languages, and any others you have access to. You learn an additional language if you are or become a master in Society and again if you are or become legendary.  You can select this feat multiple times. Each time, you learn additional languages."
}, {
    "name": "Natural Medicine",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=815",
    "prerequisites": "trained in Nature",
    "benefits": "Use Nature to Treat Wounds",
    "text": "You can apply natural cures to heal your allies. You can use Nature instead of Medicine to Treat Wounds. If you\u2019re in the wilderness, you might have easier access to fresh ingredients, allowing you to gain a +2 circumstance bonus to your check to Treat Wounds using Nature, subject to the GM\u2019s determination."
}, {
    "name": "Oddity Identification",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=817",
    "prerequisites": "trained in Occultism",
    "benefits": "+2 to Occultism checks to Identify Magic with certain traits",
    "text": "You have a sense for spells that twist minds or reveal secrets. You gain a +2 circumstance bonus to Occultism checks to Identify Magic with the mental, possession, prediction, or scrying traits."
}, {
    "name": "Pickpocket",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=818",
    "prerequisites": "trained in Thievery",
    "benefits": "Steal or Palm an Object more effectively",
    "text": "You can Steal or Palm an Object that\u2019s closely guarded, such as in a pocket, without taking the \u20135 penalty. You can\u2019t steal objects that would be extremely noticeable or time consuming to remove (like worn shoes or armor or actively wielded objects). If you\u2019re a master in Thievery, you can attempt to Steal from a creature in combat or otherwise on guard. When doing so, Stealing requires 2 manipulate actions instead of 1, and you take a \u20135 penalty."
}, {
    "name": "Quick Coercion",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=822",
    "prerequisites": "trained in Intimidation",
    "benefits": "Coerce a creature quickly",
    "text": "You can bully others with just a few choice implications. You can Coerce a creature after 1 round of conversation instead of 1 minute. You still can\u2019t Coerce a creature in the midst of combat, or without engaging in a conversation."
}, {
    "name": "Quick Identification",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=824",
    "prerequisites": "trained in Arcana, Nature, Occultism or Religion",
    "benefits": "Identify Magic in 1 minute or less",
    "text": "You can Identify Magic swiftly. You take only 1 minute when using Identify Magic to determine the properties of an item, ongoing effect, or location, rather than 10 minutes. If you\u2019re a master, it takes a 3-action activity, and if you\u2019re legendary, it takes 1 action."
}, {
    "name": "Quick Jump",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=825",
    "prerequisites": "trained in Athletics",
    "benefits": "High Jump or Long Jump as a single action",
    "text": "You can use High Jump and Long Jump as a single action instead of 2 actions. If you do, you don\u2019t perform the initial Stride (nor do you fail if you don\u2019t Stride 10 feet)."
}, {
    "name": "Quick Repair",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=827",
    "prerequisites": "trained in Crafting",
    "benefits": "Repair items quickly",
    "text": "You take 1 minute to Repair an item. If you\u2019re a master in Crafting, it takes 3 actions. If you\u2019re legendary, it takes 1 action."
}, {
    "name": "Quick Squeeze",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=828",
    "prerequisites": "trained in Acrobatics",
    "benefits": "Move swiftly as you Squeeze",
    "text": "You Squeeze 5 feet per round (10 feet on a critical success). If you\u2019re legendary in Acrobatics, you Squeeze at full Speed."
}, {
    "name": "Read Lips",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=833",
    "prerequisites": "trained in Society",
    "benefits": "Read the lips of people you can see",
    "text": "You can read lips of others nearby who you can clearly see. When you\u2019re at your leisure, you can do this automatically. In encounter mode or when attempting a more difficult feat of lipreading, you\u2019re fascinated and flat-footed during each round in which you focus on lip movements, and you must succeed at a Society check (DC determined by the GM) to successfully read someone\u2019s lips. In either case, the language read must be one that you know.  If you are deaf or hard of hearing and have Read Lips, you recognize the lip movements for the spoken form of your languages. You can also speak the spoken form of your languages clearly enough for others to understand you."
}, {
    "name": "Recognize Spell",
    "level": 1,
    "traits": ["General", " Secret", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=834",
    "prerequisites": "trained in Arcana, Nature, Occultism, or Religion",
    "benefits": " Identify a spell as a reaction as it's being cast",
    "text": "If you are trained in the appropriate skill for the spell\u2019s tradition and it\u2019s a common spell of 2nd level or lower, you automatically identify it (you still roll to attempt to get a critical success, but can\u2019t get a worse result than success). The highest level of spell you automatically identify increases to 4 if you\u2019re an expert, 6 if you\u2019re a master, and 10 if you\u2019re legendary. The GM rolls a secret Arcana, Nature, Occultism, or Religion check, whichever corresponds to the tradition of the spell being cast. If you\u2019re not trained in the skill, you can\u2019t get a result better than failure.   You correctly recognize the spell and gain a +1 circumstance bonus to your saving throw or your AC against it.   You correctly recognize the spell.  You fail to recognize the spell.  You misidentify the spell as another spell entirely, of the GM\u2019s choice."
}, {
    "name": "Ride",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=835",
    "prerequisites": "",
    "benefits": "Automatically succeed at commanding your mount to move",
    "text": "When you Command an Animal you\u2019re mounted on to take a move action (such as Stride), you automatically succeed instead of needing to attempt a check. Any animal you\u2019re mounted on acts on your turn, like a minion. If you Mount an animal in the middle of an encounter, it skips its next turn and then acts on your next turn. Page 249 has more on Command an Animal."
}, {
    "name": "Secret Speech",
    "level": 1,
    "traits": ["General", " Skill", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=925",
    "prerequisites": "trained in Deception",
    "benefits": "Learn the secret language of a society",
    "text": "Choose a secret society (such as the Lacunafex or the Bellflower Network). You\u2019ve learned that society\u2019s secret cant or jargon, enabling you to share hidden messages when signing or speaking with others who\u2019ve also learned it. If an observer succeeds at a Perception check against your   DC when you do this, they realize you are passing a message but fail to discern its content, unless they subsequently succeed at a Society check against your Deception DC. On a critical success, they learn not only the message, but also who you\u2019re passing the message to.  You can take this feat multiple times. You learn the secret speech of a different society each time."
}, {
    "name": "Shield Block",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=839",
    "prerequisites": "",
    "benefits": "Ward off a blow with your shield",
    "text": "You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield\u2019s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield."
}, {
    "name": "Sign Language",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=840",
    "prerequisites": "trained in Society",
    "benefits": "Learn sign languages",
    "text": "You learn the sign languages associated with the languages you know, allowing you to sign and understand signs. Sign languages typically require both hands to convey more complex concepts, and they are visual rather than auditory.  Sign language is difficult to understand during combat due to the level of attention needed, unlike basic gestures like pointing at a foe to suggest a target. Sign language is hard to use in areas of low visibility, just like speech is difficult in a noisy environment."
}, {
    "name": "Skill Training",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=841",
    "prerequisites": "Intelligence 12",
    "benefits": "Become trained in a skill",
    "text": "You become trained in the skill of your choice.  You can select this feat multiple times, choosing a new skill to become trained in each time."
}, {
    "name": "Snare Crafting",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=843",
    "prerequisites": "trained in Crafting",
    "benefits": "Craft snares",
    "text": "You can use the Craft activity to create snares, using the rules from page 244. When you select this feat, you add the formulas for four common snares to your formula book."
}, {
    "name": "Specialty Crafting",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=844",
    "prerequisites": "trained in Crafting",
    "benefits": "Gain bonuses to Craft certain items",
    "text": "Your training focused on Crafting one particular kind of item. Select one of the specialties listed on page 267; you gain a +1 circumstance bonus to Crafting checks to Craft items of that type. If you are a master in Crafting, this bonus increases to +2. If it\u2019s unclear whether the specialty applies, the GM decides. Some specialties might apply only partially. For example, if you were making a morningstar and had specialty in woodworking, the GM might give you half your bonus because the item requires both blacksmithing and woodworking.  * You must have the   skill feat to Craft alchemical items."
}, {
    "name": "Steady Balance",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=845",
    "prerequisites": "trained in Acrobatics",
    "benefits": "Maintain your balance in adverse conditions",
    "text": "You can keep your balance easily, even in adverse conditions. Whenever you roll a success using the Balance action, you get a critical success instead. You\u2019re not flat-footed while attempting to Balance on narrow surfaces and uneven ground. Thanks to your incredible balance, you can attempt an Acrobatics check instead of a Reflex save to Grab an Edge."
}, {
    "name": "Streetwise",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=846",
    "prerequisites": "trained in Society",
    "benefits": "Use Society to Gather Information and Recall Knowledge",
    "text": "You know about life on the streets and feel the pulse of your local settlement. You can use your Society modifier instead of your Diplomacy modifier to Gather Information. In any settlement you frequent regularly, you can use the Recall Knowledge action with Society to know the same sorts of information that you could discover with Diplomacy to Gather Information. The DC is usually significantly higher, but you know the information without spending time gathering it. If you fail to recall the information, you can still subsequently attempt to Gather Information normally."
}, {
    "name": "Student of the Canon",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=847",
    "prerequisites": "trained in Religion",
    "benefits": "More accurately recognize the tenets of your faith or philosophy",
    "text": "You\u2019ve researched many faiths enough to recognize notions about them that are unlikely to be true. If you roll a critical failure at a Religion check to Decipher Writing of a religious nature or to Recall Knowledge about the tenets of faiths, you get a failure instead. When attempting to Recall Knowledge about the tenets of your own faith, if you roll a failure, you get a success instead, and if you roll a success, you get a critical success instead."
}, {
    "name": "Subtle Theft",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=848",
    "prerequisites": "trained in Thievery",
    "benefits": "Your thefts are harder to notice",
    "text": "When you successfully Steal something, observers (creatures other than the creature you stole from) take a \u20132 circumstance penalty to their Perception DCs to detect your theft. Additionally, if you first Create a Diversion using Deception, taking a single Palm an Object or Steal action doesn\u2019t end your undetected condition."
}, {
    "name": "Survey Wildlife",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=849",
    "prerequisites": "trained in Survival",
    "benefits": "Identify nearby creatures through signs and clues",
    "text": "You can study details in the wilderness to determine the presence of nearby creatures. You can spend 10 minutes assessing the area around you to find out what creatures are nearby, based on nests, scat, and marks on vegetation. Attempt a Survival check against a DC determined by the GM based on how obvious the signs are. On a success, you can attempt a Recall Knowledge check with a \u20132 penalty to learn more about the creatures just from these signs. If you\u2019re a master in Survival, you don\u2019t take the penalty."
}, {
    "name": "Terrain Expertise",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=851",
    "prerequisites": "trained in Survival",
    "benefits": "+1 to Survival checks in certain terrain",
    "text": "Your experience in navigating a certain type of terrain makes you supremely confident while doing so. You gain a +1 circumstance bonus to Survival checks in one of the following types of terrain, chosen when you select this feat: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground.  You can select this feat more than once, choosing a different type of terrain each time."
}, {
    "name": "Terrain Stalker",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=852",
    "prerequisites": "trained in Stealth",
    "benefits": "Sneak in certain terrain without attempting a check",
    "text": "Select one type of difficult terrain from the following list: rubble, snow, or underbrush. While undetected by all non-allies in that type of terrain, you can Sneak without attempting a Stealth check as long as you move no more than 5 feet and do not move within 10 feet of an enemy at any point during your movement. This also allows you to automatically approach creatures to within 15 feet while Avoiding Notice during exploration as long as they aren\u2019t actively Searching or on guard.  You can select this feat multiple times. Each time, choose a different type of terrain."
}, {
    "name": "Titan Wrestler",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=854",
    "prerequisites": "trained in Athletics",
    "benefits": "Disarm, Grapple, Shove, or Trip larger creatures",
    "text": "You can attempt to Disarm, Grapple, Shove, or Trip creatures up to two sizes larger than you, or up to three sizes larger than you if you\u2019re legendary in Athletics."
}, {
    "name": "Toughness",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=855",
    "prerequisites": "",
    "benefits": "Increase your maximum HP and reduce the DCs of recovery checks",
    "text": "You can withstand more punishment than most before succumbing. Increase your maximum Hit Points by your level. You reduce the DC of recovery checks by 1 (page 459)."
}, {
    "name": "Train Animal",
    "level": 1,
    "traits": ["General", " Downtime", " Manipulate", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=856",
    "prerequisites": "trained in Nature",
    "benefits": "Teach an animal a trick",
    "text": "You spend time teaching an animal to do a certain action. You can either select a basic action the animal already knows how to do (typically those listed in the Command an Animal action on page 249) or attempt to teach the animal a new basic action. The GM determines the DC of any check required and the amount of time the training takes (usually at least a week). It\u2019s usually impossible to teach an animal a trick that uses critical thinking. If you\u2019re expert, master, or legendary in Nature, you might be able to train more unusual creatures, at the GM\u2019s discretion.   The animal learns the action. If it was an action the animal already knew, you can Command the Animal to take that action without attempting a Nature check. If it was a new basic action, add that action to the actions the animal can take when Commanded, but you must still roll.  The animal doesn\u2019t learn the trick."
}, {
    "name": "Trick Magic Item",
    "level": 1,
    "traits": ["General", " Manipulate", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=857",
    "prerequisites": "trained in Arcana, Nature, Occultism, or Religion",
    "benefits": "Activate a magic item you normally can't activate",
    "text": "You examine a magic item you normally couldn\u2019t use in an effort to fool it and activate it temporarily. For example, this might allow a fighter to cast a spell from a wand or allow a wizard to cast a spell that\u2019s not on the arcane list using a scroll. You must know what activating the item does, or you can\u2019t attempt to trick it.  Attempt a check using the skill matching the item\u2019s magic tradition, or matching a tradition that has the spell on its list, if you\u2019re trying to cast a spell from the item. The relevant skills are Arcana for arcane, Nature for primal, Occultism for occult, Religion for divine, or any of the four for an item that has the magical trait and not a tradition trait. The GM determines the DC based on the item\u2019s level (possibly adjusted depending on the item or situation).  If you activate a magic item that requires a spell attack roll or spell DC and you don\u2019t have the ability to cast spells of the relevant tradition, use your level as your proficiency bonus and the highest of your Intelligence, Wisdom, or Charisma modifiers. If you\u2019re a master in the appropriate skill for the item\u2019s tradition, you instead use the trained proficiency bonus, and if you\u2019re legendary, you instead use the expert proficiency bonus.   For the rest of the current turn, you can spend actions to activate the item as if you could normally use it.  You can\u2019t use the item or try to trick it again this turn, but you can try again on subsequent turns.  You can\u2019t use the item, and you can\u2019t try to trick it again until your next daily preparations."
}, {
    "name": "Underwater Marauder",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=858",
    "prerequisites": "trained in Athletics",
    "benefits": "Fight more effectively underwater",
    "text": "You\u2019ve learned to fight underwater. You are not flat-footed while in water, and you don\u2019t take the usual penalties for using a bludgeoning or slashing melee weapon in water."
}, {
    "name": "Virtuosic Performer",
    "level": 1,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=862",
    "prerequisites": "trained in Performance",
    "benefits": "+1 with a certain type of performance",
    "text": "You have exceptional talent with one type of performance. You gain a +1 circumstance bonus when making a certain type of performance. If you are a master in Performance, this bonus increases to +2. Select one of the following specialties and apply the bonus when attempting Performance checks of that type. If it\u2019s unclear whether the specialty applies, the GM decides."
}, {
    "name": "Weapon Proficiency",
    "level": 1,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=866",
    "prerequisites": "",
    "benefits": "Become trained in a weapon type",
    "text": "You become trained in all simple weapons. If you were already trained in all simple weapons, you become trained in all martial weapons. If you were already trained in all martial weapons, you become trained in one advanced weapon of your choice.  You can select this feat more than once. Each time you do, you become trained in additional weapons as appropriate, following the above progression."
}, {
    "name": "Automatic Knowledge",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=757",
    "prerequisites": "expert in a skill with the Recall Knowledge action, Assurance in that skill",
    "benefits": "Expert in Recall Knowledge action, Recall Knowledge as a free action once per day",
    "text": "You know basic facts off the top of your head. Choose a skill you\u2019re an expert in that has the Recall Knowledge action and for which you have the Assurance feat. You can use the Recall Knowledge action with that skill as a free action once per round. If you do, you must use Assurance on the skill check.  You can select this feat multiple times, choosing a different skill each time. You can use Automatic Knowledge with any skills you have chosen, but you can still use Automatic Knowledge only once per round."
}, {
    "name": "Backup Disguise",
    "level": 2,
    "traits": ["General", " Skill", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1064",
    "prerequisites": "expert in Deception",
    "benefits": "You have a specific disguise that you keep at the ready, worn underneath your outer garment",
    "text": "You have a specific disguise that you keep at the ready, worn underneath your outer garment. You can change into this disguise to   as a 3-action activity. If you have master proficiency in Deception, it is instead a 2-action activity, and if you have legendary proficiency, it is a single action. You can create a new backup disguise by spending the normal amount of time it takes you to Impersonate, but you can have only one backup disguise at a time. Having a backup disguise doesn\u2019t allow you to remove your armor or any other complex piece of clothing any more quickly, but once you have those off, the disguise is readily available. Because you have the backup disguise at the ready, it\u2019s possible that a thorough search might reveal some elements of the disguise (see   in the   skill)."
}, {
    "name": "Bonded Animal",
    "level": 2,
    "traits": ["General", " Downtime", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=762",
    "prerequisites": "expert in Nature",
    "benefits": "An animal becomes permanently helpful to you",
    "text": "You forge strong connections with animals. You can spend 7 days of downtime trying to bond with a normal animal (not a companion or other special animal). After this duration, attempt a DC 20 Nature check. If successful, you bond with the animal. The animal is permanently helpful to you, unless you do something egregious to break your bond. A helpful animal is easier to direct, as described under Command an Animal on page 249.  Bonding with a new animal ends any previous bond you had. You can\u2019t have both a bonded animal and an animal companion (though you can have both a bonded animal and a familiar)."
}, {
    "name": "Confabulator",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=769",
    "prerequisites": "expert in Deception",
    "benefits": "Reduce the bonuses against your repeated lies",
    "text": "Even when caught in falsehoods, you pile lie upon lie. Reduce the circumstance bonus a target gains for your previous attempts to Create a Diversion or Lie to it from +4 to +2. If you\u2019re a master in Deception, reduce the bonus to +1, and if you\u2019re legendary, your targets don\u2019t get these bonuses at all."
}, {
    "name": "Connections",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=770",
    "prerequisites": "expert in Society, Courtly Graces",
    "benefits": "Leverage your connections for favors and meetings",
    "text": "You have social connections you can leverage to trade favors or meet important people. When you\u2019re in an area with connections (typically a settlement where you\u2019ve spent downtime building connections, or possibly another area in the same nation), you can attempt a Society check to arrange a meeting with an important political figure or ask for a favor in exchange for a later favor of your contact\u2019s choice. The GM decides the DC based on the difficulty of the favor and the figure\u2019s prominence."
}, {
    "name": "Continual Recovery",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=771",
    "prerequisites": "expert in Medicine",
    "benefits": "Treat Wounds on a patient more often",
    "text": "You zealously monitor a patient\u2019s progress to administer treatment faster. When you Treat Wounds, your patient becomes immune for only 10 minutes instead of 1 hour. This applies only to your Treat Wounds activities, not any other the patient receives."
}, {
    "name": "Eye of the Arclords",
    "level": 2,
    "traits": ["General", " Skill", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=870",
    "prerequisites": "expert in Arcana, Arcane\r\nSense; ",
    "benefits": "The Arclords of Nex have achieved a\r\nunique mastery of magic.",
    "text": "You open an incandescent third eye\r\nupon your forehead. The eye can remain\r\nopen for 1 minute, and you can close it\r\nbefore then with a single action with the\r\nconcentrate trait. It can remain open for\r\n2 minutes if you\u2019re a master in Arcana,\r\nor 5 minutes if you\u2019re legendary. While\r\nthe eye is open, you gain the following\r\nbenefits: you gain the effects of the\r\ndetect magic arcane innate spell from\r\nyour Arcane Sense at the start of each\r\nof your turns without needing to cast\r\nthe spell; you gain darkvision; you gain\r\na +2 status bonus to Perception checks\r\nto Seek undetected and hidden creatures\r\nand to your Perception DC against Hide\r\nand Sneak. After your third eye closes,\r\nyou are dazzled for an amount of time\r\nequal to how long you had it open."
}, {
    "name": "Glad-Hand",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=787",
    "prerequisites": "expert in Diplomacy",
    "benefits": "Make an Impression on a target you've just met",
    "text": "First impressions are your strong suit. When you meet someone in a casual or social situation, you can immediately attempt a Diplomacy check to Make an Impression on that creature rather than needing to converse for 1 minute. You take a \u20135 penalty to the check. If you fail or critically fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result."
}, {
    "name": "Godless Healing",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=869",
    "prerequisites": "Battle Medicine, can\u2019t have a patron deity",
    "benefits": "With limited access to divine healing magic, Rahadoumi often become adept at\r\nusing ordinary medicine for when dangerous situations arise.",
    "text": "You recover an additional 5 Hit Points from a successful attempt to Treat your Wounds or\r\nuse Battle Medicine on you. After you or an ally use Battle Medicine on you, you become\r\ntemporarily immune to that Battle Medicine for\r\nonly 1 hour, instead of 1 day."
}, {
    "name": "Intimidating Prowess",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=797",
    "prerequisites": "Strength 16, expert in Intimidation",
    "benefits": "Gain a bonus to physically Demoralize a target",
    "text": "In situations where you can physically menace the target when you Coerce or Demoralize, you gain a +1 circumstance bonus to your Intimidation check and you ignore the penalty for not sharing a language. If your Strength score is 20 or higher and you are a master in Intimidation, this bonus increases to +2."
}, {
    "name": "Lasting Coercion",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=800",
    "prerequisites": "expert in Intimidation",
    "benefits": "Coerce a target into helping you longer",
    "text": "When you successfully Coerce someone, the maximum time they comply increases to a week, still determined by the GM. If you\u2019re legendary, the maximum increases to a month."
}, {
    "name": "Magical Crafting",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=812",
    "prerequisites": "expert in Crafting",
    "benefits": "Craft magic items",
    "text": "You can Craft magic items, though some have other requirements, as listed in Chapter 11. When you select this feat, you gain formulas for four common magic items of 2nd level or lower."
}, {
    "name": "Magical Shorthand",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=813",
    "prerequisites": "expert in Arcana, Nature, Occultism, or Religion",
    "benefits": "Expert in Arcana, Nature, Occultism, Learn spells quickly and at a reduced cost",
    "text": "Learning spells comes easily to you. If you\u2019re an expert in a tradition\u2019s associated skill, you take 10 minutes per spell level to learn a spell of that tradition, rather than 1 hour per spell level. If you fail to learn the spell, you can try again after 1 week or after you gain a level, whichever comes first. If you\u2019re a master in the tradition\u2019s associated skill, learning a spell takes 5 minutes per spell level, and if you\u2019re legendary, it takes 1 minute per spell level. You can use downtime to learn and inscribe new spells. This works as if you were using Earn Income with the tradition\u2019s associated skill, but instead of gaining money, you choose a spell available to you to learn and gain a discount on learning it, learning it for free if your earned income equals or exceeds its cost."
}, {
    "name": "Nimble Crawl",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=816",
    "prerequisites": "expert in Acrobatics",
    "benefits": "Crawl at a faster rate",
    "text": "You can Crawl incredibly swiftly\u2014up to half your Speed, rather than 5 feet. If you\u2019re a master in Acrobatics, you can Crawl at full Speed, and if you\u2019re legendary, you aren\u2019t flat-footed while prone."
}, {
    "name": "Powerful Leap",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=820",
    "prerequisites": "expert in Athletics",
    "benefits": "Jump farther and higher",
    "text": "When you Leap, you can jump 5 feet up with a vertical Leap, and you increase the distance you can jump horizontally by 5 feet."
}, {
    "name": "Quick Disguise",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=823",
    "prerequisites": "expert in Deception",
    "benefits": "Set up a disguise in only half the time",
    "text": "You can set up a disguise in half the usual time (generally 5 minutes). If you\u2019re a master, it takes one-tenth the usual time (usually 1 minute). If you\u2019re legendary, you can create a full disguise and Impersonate as a 3-action activity."
}, {
    "name": "Quiet Allies",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=831",
    "prerequisites": "expert in Stealth",
    "benefits": "Roll a single Stealth check when sneaking with allies",
    "text": "You\u2019re skilled at moving with a group. When you are Avoiding Notice and your allies Follow the Expert, you and those allies can roll a single Stealth check, using the lowest modifier, instead of rolling separately. This doesn\u2019t apply for initiative rolls."
}, {
    "name": "Rapid Mantel",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=832",
    "prerequisites": "expert in Athletics",
    "benefits": "Pull yourself onto ledges quickly",
    "text": "You easily pull yourself onto ledges. When you Grab an Edge, you can pull yourself onto that surface and stand. You can use Athletics instead of a Reflex save to Grab an Edge."
}, {
    "name": "Robust Recovery",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=836",
    "prerequisites": "expert in Medicine",
    "benefits": "Greater benefits from Treat Disease and Treat Poison",
    "text": "You learned folk medicine to help recover from diseases and poison, and using it diligently has made you especially resilient. When you Treat a Disease or a Poison, or someone else uses one of these actions on you, increase the circumstance bonus granted on a success to +4, and if the result of the patient\u2019s saving throw is a success, the patient gets a critical success."
}, {
    "name": "Sow Rumor",
    "level": 2,
    "traits": ["General", " Secret", " Skill", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1065",
    "prerequisites": "expert in Deception",
    "benefits": "You spread rumors, which may or may not be true, about a specific subject",
    "text": "You spread rumors, which may or may not be true, about a specific subject. If the subject of your rumor is not currently the subject of any contradictory rumors, this takes as long as it would normally take you to   (typically 2 hours), at the end of which the GM rolls a secret Deception check to see how well you spread the rumor. If your rumor matches any current rumors about the subject, it takes less time to spread the rumor, and if you are attempting to overtake a particularly popular and contradictory rumor, it takes much longer or may be impossible. The DC similarly increases or decreases depending on how plausible your rumor is.  Your rumor spreads like wildfire. Anyone who succeeds at a check to Gather Information on the specific subject learns your rumor in preference to other rumors about the subject. Your rumor persists for 1 month.  You successfully spread the rumor. Anyone who succeeds at a check to Gather Information on the specific subject adds your rumor to the list of rumors they could learn about the subject. Your rumor persists for 1 week.  Your rumor dies off, never becoming popular enough for other people to learn it via Gather Information.  You are unable to spread a rumor and take a \u20134 circumstance penalty to Deception checks to Sow Rumors about the same subject within the same region for 1 week. In addition, a rumor spreads about someone trying to spread false rumors about the subject."
}, {
    "name": "Tweak Appearances",
    "level": 2,
    "traits": ["General", " Skill", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=927",
    "prerequisites": "expert in Crafting",
    "benefits": "You can alter a creature's clothing to improve their social impact.",
    "text": "You spend 1 minute making quick adjustments to someone\u2019s clothing and appearance, causing their words to carry more weight with an audience of your choice. While speaking to that audience, the target gains a +1 item bonus to   and   checks. If you have master proficiency in  , the bonus increases to +2; if you have legendary proficiency in Crafting, the bonus increases to +3. This bonus lasts until this ability is used on the target again, the situation they were prepared for ends, or they next change their outfit."
}, {
    "name": "Unmistakable Lore",
    "level": 2,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=860",
    "prerequisites": "expert in Lore",
    "benefits": "Recall Knowledge about your Lore more effectively",
    "text": "You never get information about your areas of expertise wrong. When you Recall Knowledge using any Lore subcategory in which you\u2019re trained, if you roll a critical failure, you get a failure instead. If you\u2019re a master in a Lore subcategory, on a critical success, you gain even more information or context than usual."
}, {
    "name": "Ward Medic",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=864",
    "prerequisites": "expert in Medicine",
    "benefits": "Treat several patients at once",
    "text": "You\u2019ve studied in large medical wards, treating several patients at once and tending to all their needs. When you use Treat Disease or Treat Wounds, you can treat up to two targets. If you\u2019re a master in Medicine, you can treat up to four targets, and if you\u2019re legendary, you can treat up to eight targets."
}, {
    "name": "Wary Disarmament",
    "level": 2,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=865",
    "prerequisites": "expert in Thievery",
    "benefits": "+2 to AC or saves against devices or traps you trigger while disarming",
    "text": "If you trigger a device or set off a trap while disarming it, you gain a +2 circumstance bonus to your AC or saving throw against the device or trap. This applies only to attacks or effects triggered by your failed attempt, not to any later ones, such as additional attacks from a complex trap."
}, {
    "name": "Wilderness Spotter",
    "level": 2,
    "traits": ["General", " Skill", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=868",
    "prerequisites": "expert in Survival",
    "benefits": "Use Survival for your Initiative when in a specific terrain",
    "text": "Select one type of terrain from the following list: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground. You can use   in place of Perception to roll initiative when in the selected terrain in a natural location (not a structure) even if you weren\u2019t tracking or otherwise using   before the encounter. You can also use   instead of Perception to notice traps in natural locations in the chosen terrain; if you find a snare in this way, you can also use   instead of   to Disable the Device.  You can select this feat more than once. Each time you select it, the feat applies to a new type of terrain."
}, {
    "name": "Ancestral Paragon",
    "level": 3,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=753",
    "prerequisites": "",
    "benefits": "Gain a 1st-level ancestry feat",
    "text": "Whether through instinct, study, or magic, you feel a deeper connection to your ancestry. You gain a 1st-level ancestry feat."
}, {
    "name": "Untrained Improvisation",
    "level": 3,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=861",
    "prerequisites": "",
    "benefits": "Become more adept at using untrained skills",
    "text": "You\u2019ve learned how to handle situations when you\u2019re out of your depth. Your proficiency bonus to untrained skill checks is equal to half your level instead of +0. If you\u2019re 7th level or higher, the bonus increases to your full level instead. This doesn\u2019t allow you to use the skill\u2019s trained actions."
}, {
    "name": "Battle Cry",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=759",
    "prerequisites": "master in Intimidation",
    "benefits": "Demoralizes foes when you roll for initiative",
    "text": "When you roll initiative, you can yell a mighty battle cry and Demoralize an observed foe as a free action. If you\u2019re legendary in Intimidation, you can use a reaction to Demoralize your foe when you critically succeed at an attack roll."
}, {
    "name": "Bizarre Magic",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=761",
    "prerequisites": "master in Occultism",
    "benefits": "Your magic becomes more difficult to identify",
    "text": "You can draw upon strange variations in your spellcasting, whether or not you can cast occult spells. The DCs to Recognize Spells you cast and Identify Magic you use increase by 5."
}, {
    "name": "Entourage",
    "level": 7,
    "traits": ["General", " Rare", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1066",
    "prerequisites": "master in Diplomacy, Hobnobber",
    "benefits": "You have a small group of admirers who tend to follow you around while you\u2019re in civilized settlements",
    "text": "You have a small group of admirers who tend to follow you around while you\u2019re in civilized settlements. Your admirers are helpful to you, allowing you to make simple   of them such as purchasing basic equipment with your funds or finding a room at an inn. These admirers do not travel with you to places that are obviously dangerous, including most adventure locations, but they\u2019ll wait for you at the nearest settlement. Your admirers never use actions in encounter mode other than to retreat, and they abandon you if you intentionally bring them harm or at the GM\u2019s discretion. When you  , you can use your admirers to assist you, granting a +1 circumstance bonus to your Diplomacy check and reducing the time it takes even further (typically to 30 minutes, rather than 1 hour with the Hobnobber feat alone). If you have the   feat, you can have your admirers assist you, with the same benefits as Gather Information."
}, {
    "name": "Expeditious Search",
    "level": 7,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=777",
    "prerequisites": "master in Perception",
    "benefits": "Search areas in half the time",
    "text": "You have a system that lets you search at great speed, finding details and secrets twice as quickly as others can. When Searching, you take half as long as usual to Search a given area. This means that while exploring, you double the Speed you can move while ensuring you\u2019ve Searched an area before walking into it (up to half your Speed). If you\u2019re legendary in Perception, you instead Search areas four times as quickly."
}, {
    "name": "Foil Senses",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=785",
    "prerequisites": "master in Stealth",
    "benefits": "Take precautions against special senses",
    "text": "You are adept at foiling creatures\u2019 special senses and cautious enough to safeguard against them at all times. Whenever you use the Avoid Notice, Hide, or Sneak actions, you are always considered to be taking precautions against special senses (see the Detecting with Other Senses sidebar on page 465)."
}, {
    "name": "Impeccable Crafter",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=792",
    "prerequisites": "master in Crafting, Specialty Crafting",
    "benefits": "Specialty Crafting Craft items more efficiently",
    "text": "You craft flawless creations with great efficiency. Whenever you roll a success at a Crafting check to make an item of the type you chose with Specialty Crafting, you get a critical success instead."
}, {
    "name": "Inventor",
    "level": 7,
    "traits": ["General", " Downtime", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=798",
    "prerequisites": "master in Crafting",
    "benefits": "Use Crafting to create item formulas",
    "text": "You are a genius at Crafting, easily able to determine how things are made and create new inventions. You can spend downtime to invent a common formula that you don\u2019t know. This works just like the Craft activity: you spend half the Price of the formula up front, attempt a Crafting check, and on a success either finish the formula by paying the difference or work for longer to decrease the Price. The difference is that you spend the additional time in research, design, and development, rather than in creating an item. Once it\u2019s complete, you add the new formula you invented to your formula book."
}, {
    "name": "Kip Up",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=799",
    "prerequisites": "master in Acrobatics",
    "benefits": "Stand up for free without triggering reactions",
    "text": "You stand up. This movement doesn\u2019t trigger reactions."
}, {
    "name": "Planar Survival",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=819",
    "prerequisites": "master in Survival",
    "benefits": "Use Survival to Subsist on different planes",
    "text": "You can Subsist using Survival on different planes, even those without resources or natural phenomena you normally need. For instance, you can forage for food even if the plane lacks food that could normally sustain you. A success on your check to Subsist can also reduce the damage dealt by the plane, at the GM\u2019s discretion."
}, {
    "name": "Quick Climber",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=821",
    "prerequisites": "master in Athletics",
    "benefits": "Climb swiftly",
    "text": "When Climbing, you move 5 more feet on a success and 10 more feet on a critical success, to a maximum of your Speed. If you\u2019re legendary in Athletics, you gain a climb Speed equal to your Speed."
}, {
    "name": "Quick Recognition",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=826",
    "prerequisites": "master in Arcana, Nature, Occultism, or Religion; Recognize Spell",
    "benefits": "Master in Arcana, Nature, Occultism, Identify spells as a free action",
    "text": "You Recognize Spells swiftly. Once per round, you can Recognize a Spell using a skill in which you\u2019re a master as a free action."
}, {
    "name": "Quick Swim",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=829",
    "prerequisites": "master in Athletics",
    "benefits": "Swim quickly",
    "text": "You Swim 5 feet farther on a success and 10 feet farther on a critical success, to a maximum of your Speed. If you\u2019re legendary in Athletics, you gain a swim Speed equal to your Speed."
}, {
    "name": "Quick Unlock",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=830",
    "prerequisites": "master in Thievery",
    "benefits": "Pick a Lock with 1 action",
    "text": "You can Pick a Lock using 1 action instead of 2."
}, {
    "name": "Shameless Request",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=838",
    "prerequisites": "master in Diplomacy",
    "benefits": "Make Requests of others with lesser consequences",
    "text": "You can downplay the consequences or outrageousness of your requests using sheer brazenness and charm. When you Request something, you reduce any DC increases for making an outrageous request by 2, and if you roll a critical failure for your Request, you get a failure instead. While this means you can never cause your target to reduce their attitude toward you by making a Request, they eventually tire of requests, even though they still have a positive attitude toward you."
}, {
    "name": "Slippery Secrets",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=842",
    "prerequisites": "master in Deception",
    "benefits": "Evade attempts to uncover your true nature",
    "text": "You elude and evade attempts to uncover your true nature or intentions. When a spell or magical effect tries to read your mind, detect whether you are lying, or reveal your alignment, you can attempt a Deception check against the spell or effect\u2019s DC. If you succeed, the effect reveals nothing."
}, {
    "name": "Swift Sneak",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=850",
    "prerequisites": "master in Stealth",
    "benefits": "Move your full Speed while you Sneak",
    "text": "You can move your full Speed when you Sneak. You can use Swift Sneak while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Terrified Retreat",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=853",
    "prerequisites": "master in Intimidation",
    "benefits": "Cause foes you Demoralize to flee",
    "text": "When you critically succeed at the Demoralize action, if the target\u2019s level is lower than yours, the target is fleeing for 1 round."
}, {
    "name": "Wall Jump",
    "level": 7,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=863",
    "prerequisites": "master in Athletics",
    "benefits": "Jump of walls",
    "text": "You can use your momentum from a jump to propel yourself off a wall. If you\u2019re adjacent to a wall at the end of a jump (whether performing a High Jump, Long Jump, or Leap), you don\u2019t fall as long as your next action is another jump. Furthermore, since your previous jump gives you momentum, you can use High Jump or Long Jump as a single action, but you don\u2019t get to Stride as part of the activity.  You can use Wall Jump only once in a turn, unless you\u2019re legendary in Athletics, in which case you can use Wall Jump as many times as you can use consecutive jump actions in that turn."
}, {
    "name": "Incredible Investiture",
    "level": 11,
    "traits": ["General"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=795",
    "prerequisites": "Charisma 16",
    "benefits": "Invest up to 12 magic items",
    "text": "You have an incredible ability to invest more magic items. Increase your limit on invested items from 10 to 12."
}, {
    "name": "Cloud Jump",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=767",
    "prerequisites": "legendary in Athletics",
    "benefits": "Jump impossible distances",
    "text": "Your unparalleled athletic skill allows you to jump impossible distances. Triple the distance you Long Jump (so you could jump 60 feet on a successful DC 20 check). When you High Jump, use the calculation for a Long Jump but don\u2019t triple the distance.  When you Long Jump or High Jump, you can also increase the number of actions you use (up to the number of actions you have remaining in your turn) to jump even further. For each extra action, add your Speed to the maximum distance you jump."
}, {
    "name": "Craft Anything",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=773",
    "prerequisites": "legendary in Crafting",
    "benefits": "Ignore most requirements for crafting items",
    "text": "You can find ways to craft just about anything, despite restrictions. As long as you have the appropriate Crafting skill feat (such as   for magic items) and meet the item\u2019s level and proficiency requirement, you ignore just about any other requirement, such as being of a specific ancestry or providing spells. The only exceptions are requirements that add to the item\u2019s cost, including castings of spells that themselves have a cost, and requirements of special items such as the   that have exclusive means of access and Crafting. The GM decides whether you can ignore a requirement."
}, {
    "name": "Divine Guidance",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=775",
    "prerequisites": "legendary in Religion",
    "benefits": "Find guidance in the writings of your faith",
    "text": "You\u2019re so immersed in divine scripture that you find meaning and guidance in your texts in any situation. Spend 10 minutes Deciphering Writing on religious scriptures of your deity or philosophy while thinking about a particular problem or conundrum you face, and then attempt a Religion check (DC determined by the GM). If you succeed, you unearth a relevant passage, parable, or aphorism that can help you move forward or change your thinking to help solve your conundrum. For example, the GM might provide you with a cryptic poem or hint that can guide you to the next step of solving your problem."
}, {
    "name": "Legendary Codebreaker",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=801",
    "prerequisites": "legendary in Society",
    "benefits": "Quickly Decipher Writing using Society",
    "text": "Your skill with languages and codes is so great that you can decipher information with little more than a quick read through a text. You can Decipher Writing using Society while reading at normal speed. If you slow down and spend the full amount of time that\u2019s ordinarily required and roll a success, you get a critical success; if you critically succeed while spending the normal amount of time, you gain a nearly word-for-word understanding of the document."
}, {
    "name": "Legendary Linguist",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=802",
    "prerequisites": "legendary in Society, Multilingual",
    "benefits": "Create pidgin languages to communicate with anyone",
    "text": "You\u2019re so skilled with languages you can create a pidgin instantly. You can always talk to any creature that has a language\u2014even a language you don\u2019t know \u2014by creating a new pidgin language that uses simplified terms and conveys basic concepts. To do so, you must first understand at least what medium of communication the creature uses (speech, sign language, and so on)."
}, {
    "name": "Legendary Medic",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=803",
    "prerequisites": "legendary in Medicine",
    "benefits": "Remove disease or the blinded, deafened, doomed, or drained condition",
    "text": "You\u2019ve discovered medical breakthroughs or techniques that achieve miraculous results. Once per day for each target, you can spend 1 hour treating that target and attempt a Medicine check to remove a disease or the blinded, deafened, doomed, or drained condition. Use the DC of the disease or of the spell or effect that created the condition. If the effect\u2019s source is an artifact, above 20th level, or similarly powerful, increase the DC by 10."
}, {
    "name": "Legendary Negotiation",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=804",
    "prerequisites": "legendary in Diplomacy",
    "benefits": "Quickly parley with foes",
    "text": "You can negotiate incredibly quickly in adverse situations. You attempt to Make an Impression and then Request your opponent cease their current activity and engage in negotiations. You take a \u20135 penalty to your Diplomacy check. The GM sets the DC of the Request based on the circumstances\u2014it\u2019s generally at least a very hard DC of the creature\u2019s level. Some creatures might simply refuse, and even those who agree to parley might ultimately find your arguments lacking and return to violence."
}, {
    "name": "Legendary Performer",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=805",
    "prerequisites": "legendary in Performance, Virtuosic Performer",
    "benefits": "Gain renown for your Performance Virtuosic Performer",
    "text": "Your fame has spread throughout the lands. NPCs who succeed at a DC 10 Society check to Recall Knowledge have heard of you and usually have an attitude toward you one step better than normal, depending on your reputation and the NPC\u2019s disposition. For instance, if you\u2019re well-known for cruel and demanding behavior, creatures might be intimidated by you, rather than be friendly toward you. When you Earn Income with Performance, you attract higher-level audiences than your location would allow, as audiences flock to see you. For instance, rulers and angels might travel to your small tower in the woods to hear you perform. Typically, this increases the audiences available by 2 levels or more, determined by the GM."
}, {
    "name": "Legendary Professional",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=806",
    "prerequisites": "legendary in Lore",
    "benefits": "Gain renown for your Lore",
    "text": "Your fame has spread throughout the lands (for instance, if you have Warfare Lore, you might be a legendary general or tactician). This works as  , except you gain higher-level jobs when you Earn Income with Lore."
}, {
    "name": "Legendary Sneak",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=807",
    "prerequisites": "legendary in Stealth, Swift Sneak",
    "benefits": "Hide and Sneak without cover or being concealed",
    "text": "You\u2019re always sneaking unless you choose to be seen, even when there\u2019s nowhere to hide. You can Hide and Sneak even without cover or being concealed. When you employ an exploration tactic other than Avoiding Notice, you also gain the benefits of Avoiding Notice unless you choose not to. See page 479 for more information about exploration tactics."
}, {
    "name": "Legendary Survivalist",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=808",
    "prerequisites": "legendary in Survival",
    "benefits": "Survive extreme conditions",
    "text": "You can survive indefinitely without food or water and can endure severe, extreme, and incredible cold and heat without taking damage from doing so."
}, {
    "name": "Legendary Thief",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=809",
    "prerequisites": "legendary in Thievery, Pickpocket",
    "benefits": "Steal what would normally be impossible to steal",
    "text": "Your ability to Steal defies belief. You can attempt to Steal something that is actively wielded or that would be extremely noticeable or time consuming to remove (like worn shoes or armor). You must do so slowly and carefully, spending at least 1 minute (and significantly longer for items that are normally time consuming to remove, like armor). Throughout this duration you must have some means of staying hidden, such as the cover of darkness or a bustling crowd. You take a \u20135 penalty to your Thievery check. Even if you succeed, if the item is extremely prominent\u2014like a suit of full plate armor\u2014onlookers will quickly notice it\u2019s gone after you steal it."
}, {
    "name": "Reveal Machinations",
    "level": 15,
    "traits": ["General", " Rare", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=924",
    "prerequisites": "legendary in Deception",
    "benefits": "You convince a creature that you played a minor but recurring role in its life.",
    "text": "You reveal that you played a minor but recurring role in another humanoid\u2019s life\u2014or at least convince them that\u2019s the case. Attempt a   check against the target\u2019s Will DC. On a success, the revelation makes them   2, and on a critical success they are frightened 3. In addition, you gain information about the subject as though you had attempted to   about them using an appropriate skill and received the same result on your roll. You can\u2019t use this ability against the same humanoid again until 1 day has passed and you\u2019ve also successfully disguised yourself as a different person."
}, {
    "name": "Scare to Death",
    "level": 15,
    "traits": ["General", " Death", " Emotion", " Fear", " Incapacitation", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=837",
    "prerequisites": "legendary in Intimidation",
    "benefits": "Scare a target so much, they might die",
    "text": "You can frighten foes so much, they might die. Attempt an Intimidation check against the Will DC of a living creature within 30 feet of you that you sense or observe and who can sense or observe you. If the target can\u2019t hear you or doesn\u2019t understand the language you are speaking, you take a \u20134 circumstance penalty. The creature is temporarily immune for 1 minute.  The target must succeed at a Fortitude save against your Intimidation DC or die. If the target succeeds at its save, it becomes frightened 2 and is fleeing for 1 round; it suffers no effect on a critical success.   The target becomes frightened 2.  The target becomes frightened 1.  The target is unaffected."
}, {
    "name": "Unified Theory",
    "level": 15,
    "traits": ["General", " Skill"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=859",
    "prerequisites": "legendary in Arcana",
    "benefits": "Use Arcana for checks for all magical traditions",
    "text": "You\u2019ve started to make a meaningful connection about the common underpinnings of the four traditions of magic and magical essences, allowing you to understand them all through an arcane lens. Whenever you use an action or a skill feat that requires a Nature, Occultism, or Religion check, depending on the magic tradition, you can use Arcana instead. If you would normally take a penalty or have a higher DC for using Arcana on other magic (such as when using Identify Magic), you no longer do so."
}, {
    "name": "Alchemical Familiar",
    "level": 1,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=92",
    "prerequisites": "",
    "benefits": "You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood.",
    "text": "You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood. This alchemical familiar appears to be a small creature of flesh and blood, though it might have some unusual or distinguishing aspects depending on your creative process. Like other familiars, your alchemical familiar assists you in your laboratory and on adventures. The familiar uses your Intelligence modifier to determine its Perception, Acrobatics, and Stealth modifiers (see   for more information)."
}, {
    "name": "Alchemical Savant",
    "level": 1,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=93",
    "prerequisites": "trained in Crafting",
    "benefits": "You can identify alchemical items quickly.",
    "text": "You can identify alchemical items quickly. When using the Crafting skill to Identify Alchemy on an alchemical item you hold, you can do so as a single action, which has the concentrate and manipulate traits, instead of spending 10 minutes. If you have the formula for the item you are attempting to identify, you gain a +2 circumstance bonus to your check, and if you roll a critical failure, you get a failure instead."
}, {
    "name": "Far Lobber",
    "level": 1,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=94",
    "prerequisites": "",
    "benefits": "You\u2019ve learned how to throw a longer distance.",
    "text": "You\u2019ve learned how to throw a longer distance. When you throw an alchemical bomb, it has a range increment of 30 feet instead of the usual 20 feet."
}, {
    "name": "Quick Bomber",
    "level": 1,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=95",
    "prerequisites": "",
    "benefits": "You keep your bombs in easy-to-reach pouches from which you draw without thinking.",
    "text": "You keep your bombs in easy-to-reach pouches from which you draw without thinking. You Interact to draw a bomb, then Strike with it."
}, {
    "name": "Poison Resistance",
    "level": 2,
    "traits": ["Alchemist", " Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=96",
    "prerequisites": "",
    "benefits": "Repeated exposure to toxic reagents has fortified your body against poisons of all kinds.",
    "text": "Your body has become fortified against toxins. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons."
}, {
    "name": "Revivifying Mutagen",
    "level": 2,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=97",
    "prerequisites": "",
    "benefits": "While under the effect of a mutagen, you can metabolize that mutagen\u2019s power to heal yourself.",
    "text": "While under the effect of a mutagen, you can metabolize that mutagen\u2019s power to heal yourself. This uses a single action, which has the concentrate and manipulate traits. Once the action is complete, you regain 1d6 Hit Points for every 2 item levels of the mutagen (minimum 1d6), but the mutagen\u2019s duration immediately ends, even if you are under the effect of Persistent Mutagen."
}, {
    "name": "Smoke Bomb",
    "level": 2,
    "traits": ["Alchemist", " Additive 1"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=98",
    "prerequisites": "",
    "benefits": "You cause the bomb to create a cloud of thick smoke, in addition to its normal effects.",
    "text": "You cause the bomb to create a cloud of thick smoke, in addition to its normal effects. When thrown, the bomb creates a cloud of smoke in a 10-foot-radius burst. You choose which corner of the target\u2019s space (or the space in which the bomb lands) the cloud is centered on. Creatures within that area have the concealed condition, and all other creatures are concealed to them. The smoke lasts for 1 minute or until dissipated by a strong wind."
}, {
    "name": "Calculated Splash",
    "level": 4,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=99",
    "prerequisites": "",
    "benefits": "You have calculated all the angles to maximize a bomb\u2019s splash.",
    "text": "You have calculated all the angles to maximize a bomb\u2019s splash. When you throw an alchemical bomb with the   trait, you can cause the bomb to deal splash damage equal to your Intelligence modifier (minimum 0) instead of the normal amount."
}, {
    "name": "Efficient Alchemy",
    "level": 4,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=100",
    "prerequisites": "",
    "benefits": "Thanks to the time you\u2019ve spent studying and experimenting, you know how to scale your formulas into larger batches that don\u2019t require any additional attention.",
    "text": "Thanks to the time you\u2019ve spent studying and experimenting, you know how to scale your formulas into larger batches that don\u2019t require any additional attention. When spending downtime to Craft alchemical items, you can produce twice as many alchemical items in a single batch without spending additional preparatory time. For instance, if you are creating elixirs of life, you can craft up to eight elixirs in a single batch using downtime, rather than four. This does not reduce the amount of alchemical reagents required or other ingredients needed to craft each item, nor does it increase your rate of progress for days past the base downtime spent. This also does not change the number of items you can create in a batch using advanced alchemy."
}, {
    "name": "Enduring Alchemy",
    "level": 4,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=101",
    "prerequisites": "",
    "benefits": "You\u2019ve learned how to make your personal energy last just a little bit longer when quickly brewing ad hoc concoctions.",
    "text": "You\u2019ve learned how to make your personal energy last just a little bit longer when quickly brewing ad hoc concoctions. When using   to create an alchemical tool or elixir, that tool or elixir remains potent until the end of your next turn, instead of losing its potency at the start of your next turn."
}, {
    "name": "Combine Elixirs",
    "level": 6,
    "traits": ["Alchemist", " Additive 2"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=102",
    "prerequisites": "",
    "benefits": "You\u2019ve discovered how to mix two elixirs into a single hybrid concoction.",
    "text": "You\u2019ve discovered how to mix two elixirs into a single hybrid concoction. You can spend 2 additional batches of infused reagents to add a second elixir to the one you\u2019re crafting. The second elixir must also be at least 2 levels lower than your advanced alchemy level, and the combination elixir is an alchemical item two levels higher than the higher of the two elixirs\u2019 levels. When this combination elixir is consumed, both the constituent elixirs take effect. For example, you can combine two   to create a combined elixir that heals twice the normal amount, or you can combine a   with a   to both gain darkvision and find secret doors."
}, {
    "name": "Debilitating Bomb",
    "level": 6,
    "traits": ["Alchemist", " Additive 2"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=103",
    "prerequisites": "",
    "benefits": "Your bombs impose additional effects on your enemies.",
    "text": "Your bombs impose additional effects on your enemies. You mix a substance into the bomb that causes one of the following: dazzled, deafened, flat-footed, or a \u20135-foot status penalty to Speeds. If the attack with that bomb hits, the target must succeed at a Fortitude saving throw or suffer that effect until the start of your next turn. Use your class DC for this saving throw (even if someone else throws the bomb)."
}, {
    "name": "Directional Bombs",
    "level": 6,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=104",
    "prerequisites": "",
    "benefits": "You can lob bombs with great force and a precise trajectory to angle the splash in a cone spraying in a single direction. ",
    "text": "You can lob bombs with great force and a precise trajectory to angle the splash in a cone spraying in a single direction. When throwing an alchemical bomb with the   trait, instead of splashing all squares adjacent to the target, you can treat the target\u2019s space as the first affected square of a 15-foot cone directed away from you, potentially allowing you to avoid allies and splash deeper into enemy lines. If the target takes up more than a single square, the target\u2019s square closest to you is the first affected square of the cone."
}, {
    "name": "Feral Mutagen",
    "level": 8,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=105",
    "prerequisites": "",
    "benefits": "Your bestial mutagen brings out the beast lurking within you.",
    "text": "Your   brings out the beast lurking within you, granting you especially sharp claws and teeth as well as a ferocious appearance. Whenever you\u2019re affected by a bestial mutagen you created, you gain the mutagen\u2019s item bonus to your Intimidation checks. In addition, your claws and jaws are increasingly vicious, and they gain the   trait. Finally, you can increase the mutagen\u2019s penalty to AC from \u20131 to \u20132 and, in exchange, increase the damage die size of your claws and jaws by one step."
}, {
    "name": "Powerful Alchemy",
    "level": 8,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=106",
    "prerequisites": "",
    "benefits": "Alchemical items you create on the fly are particularly potent.",
    "text": "Alchemical items you create on the fly are particularly potent. When you use Quick Alchemy to create an infused alchemical item that allows a saving throw, you can change its DC to your class DC."
}, {
    "name": "Sticky Bomb",
    "level": 8,
    "traits": ["Alchemist", " Additive 2"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=107",
    "prerequisites": "",
    "benefits": "You mix in an additive to make your bomb\u2019s contents adhere to the target and continue to deal damage.",
    "text": "You mix in an additive to make your bomb\u2019s contents adhere to the target and continue to deal damage. A creature that takes a direct hit from one of your sticky bombs also takes persistent damage equal to and of the same type as the bomb\u2019s splash damage. If the bomb already deals persistent damage, combine the two amounts."
}, {
    "name": "Elastic Mutagen",
    "level": 10,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=108",
    "prerequisites": "",
    "benefits": "You can cause your body to twist and flow like the quicksilver within your mutagens.",
    "text": "You can cause your body to twist and flow like the quicksilver within your mutagens. Whenever you are under the effects of a   you created, you can stretch your legs and Step up to 10 feet, and you can squish and compress your body, allowing you to make it through tight spaces as if you were one size smaller, in addition to any effect from Squeezing."
}, {
    "name": "Expanded Splash",
    "level": 10,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=109",
    "prerequisites": "Calculated Splash",
    "benefits": "The particularly volatile compounds that you brew into your bombs result in them creating especially large and powerful explosions.",
    "text": "The particularly volatile compounds that you brew into your bombs result in them creating especially large and powerful explosions. When you throw an alchemical bomb you created and that bomb has the   trait, you can add your Intelligence modifier to the bomb\u2019s usual splash damage, and it deals splash damage to every creature within 10 feet of the target."
}, {
    "name": "Greater Debilitating Bomb",
    "level": 10,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=110",
    "prerequisites": "Debilitating Bomb",
    "benefits": "You have learned enhanced techniques and alchemical secrets that allow you to expand the range of effects you can impose with your bombs.",
    "text": "You have learned enhanced techniques and alchemical secrets that allow you to expand the range of effects you can impose with your bombs. When you use  , add the following to the list you can choose from: clumsy 1, enfeebled 1, stupefied 1, or \u201310-foot status penalty to Speeds."
}, {
    "name": "Merciful Elixir",
    "level": 10,
    "traits": ["Alchemist", " Additive 2"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=111",
    "prerequisites": "",
    "benefits": "You mix a special additive into your elixir that calms the drinker\u2019s body and mind.",
    "text": "You mix a special additive into your elixir that calms the drinker\u2019s body and mind. The elixir of life attempts to counteract one fear effect or one effect imposing the paralyzed condition on the drinker."
}, {
    "name": "Potent Poisoner",
    "level": 10,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=112",
    "prerequisites": "Powerful Alchemy",
    "benefits": "By concentrating your poisons\u2019 toxic components, you make them harder for victims to resist.",
    "text": "By concentrating your poisons\u2019 toxic components, you make them harder for victims to resist. When you craft an alchemical item with the   trait by any means, the DC is increased by up to 4, to a maximum of your class DC."
}, {
    "name": "Extend Elixir",
    "level": 12,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=113",
    "prerequisites": "",
    "benefits": "Integrating your own personal energy into the elixirs you create causes them to affect you for longer.",
    "text": "Integrating your own personal energy into the elixirs you create causes them to affect you for longer. When you consume one of your alchemical items that has the   and   traits and a duration of 1 minute or longer, that elixir\u2019s duration is doubled."
}, {
    "name": "Invincible Mutagen",
    "level": 12,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=114",
    "prerequisites": "",
    "benefits": "The fortifying additives you brew into your mutagens make your juggernaut form impervious.",
    "text": "The fortifying additives you brew into your mutagens make your juggernaut form impervious. Whenever you\u2019re affected by a   you created, you gain resistance to all physical damage equal to your Intelligence modifier (minimum 0)."
}, {
    "name": "Uncanny Bombs",
    "level": 12,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=115",
    "prerequisites": "Far Lobber",
    "benefits": "You lob bombs unerringly, despite obstructions or distance.",
    "text": "You lob bombs unerringly, despite obstructions or distance. When you throw an alchemical item with the   trait, its range increment increases to 60 feet, you reduce any circumstance bonus to the target\u2019s AC from cover by 1, and you automatically succeed at the flat check when targeting a concealed creature."
}, {
    "name": "Glib Mutagen",
    "level": 14,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=116",
    "prerequisites": "",
    "benefits": "Your silvertongue mutagen transcends languages and plausibility.",
    "text": "Your   transcends languages and plausibility. When affected by a silvertongue mutagen you have created, you ignore circumstance penalties to Deception, Diplomacy, Intimidation, and Performance checks. In addition, your words transcend linguistic barriers; everyone listening to you speak hears your words as if you were speaking in their own language (though you do not actually speak that language, nor does this ability allow you to understand any additional languages)."
}, {
    "name": "Greater Merciful Elixir",
    "level": 14,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=117",
    "prerequisites": "Merciful Elixir",
    "benefits": "Your additives contain panaceas that can remedy a plethora of maladies.",
    "text": "Your additives contain panaceas that can remedy a plethora of maladies. When you use  , your elixir can instead attempt to counteract the blinded, deafened, sickened, or slowed condition."
}, {
    "name": "True Debilitating Bomb",
    "level": 14,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=118",
    "prerequisites": "Greater Debilitating Bomb",
    "benefits": "Ever inventive, you have discovered increasingly devastating ways for your bombs to impede and hamper your foes.",
    "text": "Ever inventive, you have discovered increasingly devastating ways for your bombs to impede and hamper your foes. When you use  , add the following to the list of effects you can choose from: enfeebled 2, stupefied 2, or a \u201315-foot status penalty to Speeds. If you instead apply one of the effects listed in Debilitating Bomb, the target avoids the effect only if the result of its saving throw is a critical success."
}, {
    "name": "Eternal Elixir",
    "level": 16,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=119",
    "prerequisites": "Extend Elixir",
    "benefits": "Your body readily accepts and retains minor changes.",
    "text": "Your body readily accepts and retains minor changes. When you drink one of your alchemical items that has the   and   traits and a duration of 1 minute or more, you can make the elixir\u2019s duration indefinite. You can do so only if the elixir\u2019s level is half your level or lower. If you later consume a different elixir and make it indefinite, the effect of the previous indefinite elixir ends."
}, {
    "name": "Exploitive Bomb",
    "level": 16,
    "traits": ["Alchemist", " Additive 2"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=120",
    "prerequisites": "",
    "benefits": "You mix a substance into the bomb to foil resistances.",
    "text": "You mix a substance into the bomb to foil resistances. The\r\nbomb reduces any resistance the enemy has to its damage\r\ntype by an amount equal to your level, but only for that attack."
}, {
    "name": "Genius Mutagen",
    "level": 16,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=121",
    "prerequisites": "",
    "benefits": "Specialized tweaks to your formula that supplements your genius considerably broaden the benefits you gain from cognitive mutagens.",
    "text": "Specialized tweaks to your formula that supplements your genius considerably broaden the benefits you gain from cognitive mutagens. When you\u2019re affected by a   you created, you also gain the mutagen\u2019s item bonus to Deception, Diplomacy, Intimidation, Medicine, Nature, Performance, Religion, and Survival checks. In addition, you can communicate telepathically with creatures within 60 feet with whom you share a language. The communication is two-way once you establish it, so a creature you contact can also communicate with you."
}, {
    "name": "Persistent Mutagen",
    "level": 16,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=122",
    "prerequisites": "Extend Elixir",
    "benefits": "You\u2019ve trained your physical form to remain stable within the a given altered state.",
    "text": "You\u2019ve trained your physical form to remain stable within the a given altered state. Once per day, when you consume an alchemical item with the   and   traits that you have crafted, you can retain its effects until the next time you make your daily preparations instead of its normal duration."
}, {
    "name": "Improbable Elixirs",
    "level": 18,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=123",
    "prerequisites": "",
    "benefits": "Your mastery of alchemical secrets enables you to replicate effects most believe can be achieved only via magic.",
    "text": "Your mastery of alchemical secrets enables you to replicate effects most believe can be achieved only via magic. Select a number of potions equal to your Intelligence modifier (minimum 1) of 9th level or lower. You gain formulas to Craft these potions as alchemical items with the   trait. When Crafting these alchemical elixirs, you can substitute alchemical reagents for an equal value of magical components, and you can use   instead of any other required tool kits. Other than that, the formula does not change. Once you\u2019ve chosen the potion formulas, they can\u2019t be changed."
}, {
    "name": "Mindblank Mutagen",
    "level": 18,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=124",
    "prerequisites": "",
    "benefits": "With a minor adjustment of ratios in the formula for your serene mutagen, you gain mental protections.",
    "text": "With a minor adjustment of ratios in the formula for your  , you gain mental protections. When you\u2019re affected by a serene mutagen you created,  ,  , and   effects of 9th level or lower detect nothing from you or your possessions and auras. For instance,   would still detect other magic in the area, but not any magic on you."
}, {
    "name": "Miracle Worker",
    "level": 18,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=125",
    "prerequisites": "",
    "benefits": "Your alchemical mastery can resuscitate the recently slain.",
    "text": "Your alchemical mastery can resuscitate the recently slain. You can administer a   to a creature who has been dead for no more than 2 rounds. When you do, that creature is immediately returned to life with 1 Hit Point and becomes wounded 1."
}, {
    "name": "Perfect Debilitation",
    "level": 18,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=126",
    "prerequisites": "",
    "benefits": "You have perfected the formulas for bombs that impede your enemies.",
    "text": "You have perfected the formulas for bombs that impede your enemies. When you use  , your target avoids the condition the bomb imposes only if it critically succeeds at its saving throw."
}, {
    "name": "Craft Philosopher's Stone",
    "level": 20,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=127",
    "prerequisites": "",
    "benefits": "Your research has paid off, culminating in the legendary philosopher\u2019s stone.",
    "text": "Your research has paid off, culminating in the legendary philosopher\u2019s stone. You learn the formula for the   and can add it to your formula book."
}, {
    "name": "Mega Bomb",
    "level": 20,
    "traits": ["Alchemist", " Additive 3"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=128",
    "prerequisites": "Expanded Splash",
    "benefits": "You add an incredibly powerful additive to a held bomb to create a mega bomb.",
    "text": "You add an incredibly powerful additive to a held bomb to create a mega bomb, greatly increasing its area and power. You use an Interact action to throw the mega bomb, rather than Strike, and you don\u2019t make an attack roll. The mega bomb affects creatures in a 30-foot-radius burst, centered within 60 feet of you. The bomb deals damage as if each creature were the primary target, with a basic Reflex save. On a failed save, a creature also takes any extra effects that affect a primary target (such as flat-footed from  ). While all targets in the area take splash damage as primary targets, there is no further splash beyond that area. If your next action after creating a mega bomb isn\u2019t an Interact action to throw it, the mega bomb denatures and loses all effects."
}, {
    "name": "Perfect Mutagen",
    "level": 20,
    "traits": ["Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=129",
    "prerequisites": "",
    "benefits": "You have enhanced the formulas for your mutagens, aligning them perfectly to your physiology.",
    "text": "You have enhanced the formulas for your  , aligning them perfectly to your physiology. When under the effect of a mutagen you crafted, you do not suffer its drawback."
}, {
    "name": "Acute Vision",
    "level": 1,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=130",
    "prerequisites": "",
    "benefits": "Your sense improve when you are raging.",
    "text": "When you are raging, your visual senses improve, granting you darkvision."
}, {
    "name": "Moment of Clarity",
    "level": 1,
    "traits": ["Barbarian", " Concentrate", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=131",
    "prerequisites": "",
    "benefits": "You push back your rage for a moment in order to think clearly.",
    "text": "You push back your rage for a moment in order to think clearly. Until the end of this turn, you can use actions with the   trait even if those actions don\u2019t have the   trait."
}, {
    "name": "Raging Intimidation",
    "level": 1,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=132",
    "prerequisites": "",
    "benefits": "Your fury fills your foes with fear.",
    "text": "Your fury fills your foes with fear. While you are raging, your Demoralize and Scare to Death actions (from the Intimidation skill and an Intimidation skill feat, respectively) gain the rage trait, allowing you to use them while raging. As soon as you meet the prerequisites for the skill feats   and  , you gain these feats."
}, {
    "name": "Raging Thrower",
    "level": 1,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=133",
    "prerequisites": "",
    "benefits": "Thrown weapons become especially deadly in your fury.",
    "text": "Thrown weapons become especially deadly in your fury. You apply the additional damage from Rage to your thrown weapon attacks. If you have the   feat or the devastator class feature, apply their benefits to thrown weapon attacks."
}, {
    "name": "Sudden Charge",
    "level": 1,
    "traits": ["Barbarian", " Fighter", " Flourish", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=134",
    "prerequisites": "",
    "benefits": "With a quick sprint, you dash up to your foe and swing.",
    "text": "With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Acute Scent",
    "level": 2,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=135",
    "prerequisites": "Acute Vision or darkvision",
    "benefits": "When you Rage, your sense of smell improves.",
    "text": "When you Rage, your sense of smell improves. You gain imprecise scent with a range of 30 feet."
}, {
    "name": "Furious Finish",
    "level": 2,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=136",
    "prerequisites": "",
    "benefits": "Desperate to finish the fight, you pour all your rage into one final blow.",
    "text": "Desperate to finish the fight, you pour all your rage into one final blow. Make a Strike. If it hits, you gain a circumstance bonus to damage equal to the number of rounds remaining in your Rage (maximum 10). After this Strike, your Rage immediately ends, and you are fatigued until you rest for at least 10 minutes."
}, {
    "name": "No Escape",
    "level": 2,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=137",
    "prerequisites": "",
    "benefits": "You keep pace with a retreating foe.",
    "text": "You keep pace with a retreating foe. Stride up to your Speed, following the foe and keeping it in reach throughout its movement until it stops moving or you\u2019ve moved your full Speed. You can use No Escape to Burrow, Climb, Fly, or Swim instead of Stride if you have the corresponding movement type."
}, {
    "name": "Second Wind",
    "level": 2,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=138",
    "prerequisites": "",
    "benefits": "You can enter a second rage, but afterward you need to catch your breath",
    "text": "You can enter a second rage, but afterward you need to catch your breath. You can Rage without waiting for 1 minute after the previous Rage (or 1 round, with quick rage), but when you end this second Rage, you\u2019re fatigued until you rest for 10 minutes."
}, {
    "name": "Shake it Off",
    "level": 2,
    "traits": ["Barbarian", " Concentrate", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=139",
    "prerequisites": "",
    "benefits": "You concentrate on your rage, overcoming fear and fighting back sickness.",
    "text": "You concentrate on your rage, overcoming fear and fighting back sickness. Reduce your frightened condition value by 1, and attempt a Fortitude save to recover from the sickened condition as if you had spent an action retching; you reduce your sickened condition value by 1 on a failure (but not on a critical failure), by 2 on a success, or by 3 on a critical success."
}, {
    "name": "Fast Movement",
    "level": 4,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=140",
    "prerequisites": "",
    "benefits": "Your rage is a frenzy of rapid movements.",
    "text": "Your rage is a frenzy of rapid movements. While you are raging, you gain a +10-foot status bonus to your Speed."
}, {
    "name": "Raging Athlete",
    "level": 4,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=141",
    "prerequisites": "expert in Athletics",
    "benefits": "Physical obstacles can\u2019t hold back your fury. ",
    "text": "Physical obstacles can\u2019t hold back your fury. While you are raging, you gain a climb Speed and swim Speed equal to your land Speed, the DC of High Jumps and Long Jumps decreases by 10, and your Leap distance increases by 5 feet when you jump horizontally and by 2 feet when you jump vertically."
}, {
    "name": "Swipe",
    "level": 4,
    "traits": ["Barbarian", " Fighter", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=142",
    "prerequisites": "",
    "benefits": "You make a wide, arcing swing. ",
    "text": "You make a wide, arcing swing. Make a single melee Strike and compare the attack roll result to the ACs of up to two foes, each of whom must be within your melee reach and adjacent to the other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty. If you\u2019re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks."
}, {
    "name": "Wounded Rage",
    "level": 4,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=143",
    "prerequisites": "",
    "benefits": "You roar in pain, awakening the rage within you.",
    "text": "You roar in pain, awakening the rage within you. You Rage."
}, {
    "name": "Animal Skin",
    "level": 6,
    "traits": ["Barbarian", " Instinct", " Morph", " Primal", " Transmutation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=144",
    "prerequisites": "animal instinct",
    "benefits": "Your proficiency in unarmored defense increases to expert.",
    "text": "Your proficiency in unarmored defense increases to expert. While you are raging and unarmored, your skin transforms into a thick hide resembling your animal\u2019s skin. You gain a +1 status bonus to AC instead of taking a \u20131 penalty to AC; if you have the greater juggernaut class feature, this status bonus increases to +2. The thickness of your hide gives you a Dexterity modifier cap to your AC of +3."
}, {
    "name": "Attack of Opportunity",
    "level": 6,
    "traits": ["Barbarian", " Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=145",
    "prerequisites": "",
    "benefits": "You swat a foe that leaves an opening. ",
    "text": "You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a   action, you disrupt that action. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike."
}, {
    "name": "Brutal Bully",
    "level": 6,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=146",
    "prerequisites": "expert in Athletics",
    "benefits": "You push your foes around and leave bruises.",
    "text": "You push your foes around and leave bruises. While raging, when you successfully Disarm, Grapple, Shove, or Trip a foe, you deal that foe bludgeoning damage equal to your Strength modifier; add this to the damage from a critical success to Trip."
}, {
    "name": "Cleave",
    "level": 6,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=147",
    "prerequisites": "",
    "benefits": "You swing clear through one foe and into another.",
    "text": "You swing clear through one foe and into another. Make a melee Strike against the second foe."
}, {
    "name": "Dragon's Rage Breath",
    "level": 6,
    "traits": ["Barbarian", " Arcane", " Concentrate", " Evocation", " Instinct", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=148",
    "prerequisites": "dragon instinct",
    "benefits": "You exhale powerful draconic energy ",
    "text": "You breathe deeply and exhale powerful energy in a 30-foot cone or 60-foot line, dealing 1d6 damage per level. The area and damage type match those of your dragon (see Table 3\u20134. If you used this ability in the last hour, the area and the damage are halved (15-foot cone or 30-foot line; 1d6 damage for every 2 levels). Each creature in the area must attempt a basic Reflex save."
}, {
    "name": "Giant's Stature",
    "level": 6,
    "traits": ["Barbarian", " Instinct", " Polymorph", " Primal", " Rage", " Transmutation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=149",
    "prerequisites": "giant instinct",
    "benefits": "You grow to incredible size.",
    "text": "You grow to incredible size. You become Large, increasing your reach by 5 feet and gaining the clumsy 1 condition (page 618) until you stop raging. Your equipment grows with you."
}, {
    "name": "Spirits' Interference",
    "level": 6,
    "traits": ["Barbarian", " Instinct", " Necromancy", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=150",
    "prerequisites": "spirit instinct",
    "benefits": "You call forth protective spirits to ward off ranged attacks.",
    "text": "You call forth protective spirits to ward off ranged attacks. Until your rage ends, anyone making a ranged attack against you must succeed at a DC 5 flat check or the attack misses with no effect."
}, {
    "name": "Animal Rage",
    "level": 8,
    "traits": ["Barbarian", " Concentrate", " Instinct", " Polymorph", " Primal", " Rage", " Transmutation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=151",
    "prerequisites": "animal instinct",
    "benefits": "You transform into your animal.",
    "text": "You transform into your animal. You gain the effects of the 3rd-level   spell except you use your own statistics, temporary Hit Points, and unarmed attacks instead of those granted by animal form. You also retain the constant abilities of your gear. If your animal is a frog, your tongue\u2019s reach increases to 15 feet. Dismissing the transformation gains the rage trait."
}, {
    "name": "Furious Bully",
    "level": 8,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=152",
    "prerequisites": "master in Athletics",
    "benefits": "You bully foes across the battlefield.",
    "text": "You bully foes across the battlefield. While raging, you gain a +2 circumstance bonus to Athletics checks for attack actions."
}, {
    "name": "Renewed Vigor",
    "level": 8,
    "traits": ["Barbarian", " Concentrate", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=153",
    "prerequisites": "",
    "benefits": "You pause to recover your raging vigor.",
    "text": "You pause to recover your raging vigor. You gain temporary Hit Points equal to half your level plus your Constitution modifier."
}, {
    "name": "Share Rage",
    "level": 8,
    "traits": ["Barbarian", " Auditory", " Rage", " Visual"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=154",
    "prerequisites": "",
    "benefits": "You stoke an ally\u2019s fury.",
    "text": "You stoke an ally\u2019s fury. While you are raging, one willing creature within 30 feet gains the effects of the Rage action, except it can still use   actions."
}, {
    "name": "Sudden Leap",
    "level": 8,
    "traits": ["Barbarian", " Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=155",
    "prerequisites": "",
    "benefits": "You swing at a foe while mid-leap.",
    "text": "You make an impressive leap and swing while you soar. Make a Leap, High Jump, or Long Jump and attempt one melee Strike at any point during your jump. Immediately after the Strike, you fall to the ground if you\u2019re in the air, even if you haven\u2019t reached the maximum distance of your jump. If the distance you fall is no more than the height of your jump, you take no damage and land upright.  When attempting a High Jump or Long Jump during a Sudden Leap, determine the DC using the Long Jump DCs, and increase your maximum distance to double your Speed.  If you have  , you can spend 3 actions to make a Sudden Leap and use Felling Strike instead of a normal Strike."
}, {
    "name": "Thrash",
    "level": 8,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=156",
    "prerequisites": "",
    "benefits": "You thrash the grabbed foe around.",
    "text": "You thrash the grabbed foe around. It takes bludgeoning damage equal to your Strength modifier plus your ferocious specialization damage plus your Rage damage. The foe must attempt a basic Fortitude save against your class DC."
}, {
    "name": "Come and Get Me",
    "level": 10,
    "traits": ["Barbarian", " Concentrate", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=157",
    "prerequisites": "",
    "benefits": "You open yourself to attacks so you can respond in turn. ",
    "text": "You open yourself to attacks so you can respond in turn. Until your rage ends, you are flat-footed, and damage rolls against you gain a +2 circumstance bonus. If a creature hits you, that creature is flat-footed to you until the end of your next turn. If you hit it before the end of your next turn, you gain temporary Hit Points equal to your Constitution modifier, or double that on a critical hit. These temporary Hit Points last until the end of your rage."
}, {
    "name": "Furious Sprint",
    "level": 10,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=158",
    "prerequisites": "",
    "benefits": "You rush forward.",
    "text": "You rush forward. Stride up to five times your Speed in a straight line. You can increase the number of actions this activity takes to 3 to Stride up to eight times your Speed in a straight line instead."
}, {
    "name": "Great Cleave",
    "level": 10,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=159",
    "prerequisites": "Cleave",
    "benefits": "Your fury carries your weapon through multiple foes.",
    "text": "Your fury carries your weapon through multiple foes. When you  , if your Strike also kills or knocks the target unconscious, you can continue to make melee Strikes until you make a Strike that doesn\u2019t kill or knock a creature unconscious, or until there are no creatures adjacent to the most recent creature you attacked while Cleaving, whichever comes first."
}, {
    "name": "Knockback",
    "level": 10,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=160",
    "prerequisites": "",
    "benefits": "The weight of your swing drives your enemy back.",
    "text": "The weight of your swing drives your enemy back. You push the foe back 5 feet, with the effects of a successful Shove. You can follow the foe as normal for a successful Shove."
}, {
    "name": "Terrifying Howl",
    "level": 10,
    "traits": ["Barbarian", " Auditory", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=161",
    "prerequisites": "Intimidating Glare",
    "benefits": "You unleash a terrifying howl.",
    "text": "You unleash a terrifying howl. Attempt Intimidate checks to Demoralize each creature within 30 feet. Regardless of the results of your checks, each creature is then temporarily immune to Terrifying Howl for 1 minute."
}, {
    "name": "Dragon's Rage Wings",
    "level": 12,
    "traits": ["Barbarian", " Instinct", " Morph", " Primal", " Rage", " Transmutation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=162",
    "prerequisites": "dragon instinct",
    "benefits": "You sprout dragon wings from your back.",
    "text": "You sprout dragon wings from your back of the same color as your chosen dragon. While you are raging, you gain a fly Speed equal to your land Speed. If you are flying when your rage ends, you start to fall but the transformation only completes at the last moment, so you take no damage from the fall and land standing up."
}, {
    "name": "Furious Grab",
    "level": 12,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=163",
    "prerequisites": "",
    "benefits": "You grab your foe while it\u2019s distracted by your attack.",
    "text": "You grab your foe while it\u2019s distracted by your attack. The foe you hit becomes grabbed, as if you had succeeded at an Athletics check to Grapple the foe."
}, {
    "name": "Predator's Pounce",
    "level": 12,
    "traits": ["Barbarian", " Flourish", " Instinct", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=164",
    "prerequisites": "animal instinct",
    "benefits": "You close the distance to your prey in a blur",
    "text": "You close the distance to your prey in a blur, pouncing on the creature before it can react. You Stride up to your Speed and make a Strike at the end of your movement."
}, {
    "name": "Spirit's Wrath",
    "level": 12,
    "traits": ["Barbarian", " Attack", " Concentrate", " Instinct", " Open", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=165",
    "prerequisites": "spirit instinct",
    "benefits": "You call forth an ephemeral apparition.",
    "text": "You call forth an ephemeral apparition, typically the ghost of an ancestor or a nature spirit, which takes the form of a wisp. The spirit wisp makes a melee wisp rush unarmed attack against an enemy within 120 feet of you. The wisp\u2019s attack modifier is equal to your proficiency bonus for martial weapons plus your Strength modifier plus a +2 item bonus, and it applies the same circumstance and status bonuses and penalties that you have. On a hit, the wisp deals damage equal to 4d8 plus your Constitution modifier. The damage is your choice of negative or positive damage; don\u2019t apply your Rage damage or your weapon specialization damage, but circumstance and status bonuses and penalties that would also affect the wisp\u2019s damage apply. If your wisp\u2019s Strike is a critical hit, the target becomes frightened 1. This attack uses and counts toward your multiple attack penalty as if you were the one attacking."
}, {
    "name": "Titan's Stature",
    "level": 12,
    "traits": ["Barbarian", " Instinct", " Polymorph", " Transmutation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=166",
    "prerequisites": "giant instinct, Giant\u2019s Stature",
    "benefits": "You grow to even greater size.",
    "text": "You grow to even greater size. When using  , you can instead become Huge (increasing your reach by 10 feet if you were Medium or smaller) while you are raging. You have the clumsy 1 condition (page 618) as long as you are Huge."
}, {
    "name": "Awesome Blow",
    "level": 14,
    "traits": ["Barbarian", " Concentrate", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=167",
    "prerequisites": "Knockback",
    "benefits": "Your attacks are so powerful, they can flatten your opponents.",
    "text": "Your attacks are so powerful, they can flatten your opponents. When you use  , you can attempt an Athletics check against your target\u2019s Fortitude DC.  You gain the critical success effect of a Shove, then the critical success effect of a Trip against the target.   You gain the success effect of a Shove, then the success effect of a Trip against the target.  You gain the normal effect of Knockback."
}, {
    "name": "Giant's Lunge",
    "level": 14,
    "traits": ["Barbarian", " Concentrate", " Instinct"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=168",
    "prerequisites": "giant instinct",
    "benefits": "You extend your body and prepare to attack foes outside your normal reach.",
    "text": "You extend your body and prepare to attack foes outside your normal reach. Until your rage ends, all your melee weapons and unarmed attacks gain reach 10. This doesn\u2019t increase the reach of any weapon or unarmed attack that already has the reach trait, but it does combine with abilities that increase your reach due to increased size, such as  ."
}, {
    "name": "Vengeful Strike",
    "level": 14,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=169",
    "prerequisites": "Come and Get Me",
    "benefits": "When struck by an enemy, you respond in turn.",
    "text": "When struck by an enemy, you respond in turn. Make a melee Strike against the triggering creature. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike."
}, {
    "name": "Whirlwind Strike",
    "level": 14,
    "traits": ["Barbarian", " Fighter", " Flourish", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=170",
    "prerequisites": "",
    "benefits": "You attack all nearby adversaries.",
    "text": "You attack all nearby adversaries. Make a melee Strike against each enemy within your melee reach. Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks."
}, {
    "name": "Collateral Thrash",
    "level": 16,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=171",
    "prerequisites": "Thrash",
    "benefits": "When you Thrash a grabbed foe, you smack that foe into another nearby.",
    "text": "When you   a grabbed foe, you smack that foe into another nearby. Another foe adjacent to the grabbed foe also takes your Thrash damage, with a basic Reflex save against your class DC."
}, {
    "name": "Dragon Transformation",
    "level": 16,
    "traits": ["Barbarian", " Concentrate", " Instinct", " Polymorph", " Primal", " Rage", " Transmutation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=172",
    "prerequisites": "dragon instinct, Dragon\u2019s Rage Wings",
    "benefits": "You transform into a ferocious large dragon.",
    "text": "You transform into a ferocious Large dragon, gaining the effects of 6th-level   except that you use your own AC and attack modifier; you also apply your extra damage from Rage. The action to Dismiss the transformation gains the rage trait.  At 18th level, you gain a +20-foot status bonus to your fly Speed, your damage bonus with dragon Strikes increases to +12, your breath weapon DC increases to 30, and you gain a +14 status bonus to your breath weapon damage."
}, {
    "name": "Reckless Abandon",
    "level": 16,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=173",
    "prerequisites": "",
    "benefits": "Your blood boils when you take a beating, and you throw caution to the wind to finish the fight.",
    "text": "Your blood boils when you take a beating, and you throw caution to the wind to finish the fight. You gain a +2 circumstance bonus to attack rolls, a \u20132 penalty to AC, and a \u20131 penalty to saves. These bonuses and penalties last until your Rage ends or until you are above half Hit Points, whichever comes first."
}, {
    "name": "Brutal Critical",
    "level": 18,
    "traits": ["Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=174",
    "prerequisites": "",
    "benefits": "Your critical hits are particularly devastating.",
    "text": "Your critical hits are particularly devastating. On a critical hit, add one extra damage die. This is in addition to any extra dice you gain if the weapon is deadly or fatal. The target also takes persistent bleed damage equal to two damage dice."
}, {
    "name": "Perfect Clarity",
    "level": 18,
    "traits": ["Barbarian", " Concentrate", " Fortune", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=175",
    "prerequisites": "",
    "benefits": "You burn out all of your rage to ensure that your attack lands and your mind remains free.",
    "text": "You burn out all of your rage to ensure that your attack lands and your mind remains free. Reroll the triggering attack roll or Will save with a +2 circumstance bonus, use the better result, and resolve the effect. You then immediately stop raging."
}, {
    "name": "Vicious Evisceration",
    "level": 18,
    "traits": ["Barbarian", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=176",
    "prerequisites": "",
    "benefits": "You make a vicious attack that maims your enemy.",
    "text": "You make a vicious attack that maims your enemy. Make a melee Strike. If the Strike hits and deals damage, the target is drained 1, or drained 2 on a critical success."
}, {
    "name": "Contagious Rage",
    "level": 20,
    "traits": ["Barbarian", " Auditory", " Rage", " Visual"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=177",
    "prerequisites": "Share Rage",
    "benefits": "You can drive your allies into a frenzy, granting them incredible benefits.",
    "text": "You can drive your allies into a frenzy, granting them incredible benefits. You can ignore the requirements on  , using it multiple times in a Rage. Allies affected by Share Rage who accept your anathema for the duration of the Rage gain your instinct ability and the specialization ability it gains from weapon specialization, but not greater weapon specialization."
}, {
    "name": "Quaking Stomp",
    "level": 20,
    "traits": ["Barbarian", " Manipulate", " Rage"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=178",
    "prerequisites": "",
    "benefits": "You stomp the ground with such force that it creates a minor earthquake",
    "text": "You stomp the ground with such force that it creates a minor earthquake, with the effects of the   spell."
}, {
    "name": "Bardic Lore",
    "level": 1,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=179",
    "prerequisites": "enigma muse",
    "benefits": "Your studies make you informed on every subject.",
    "text": "Your studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can\u2019t increase your proficiency rank in Bardic Lore by any other means."
}, {
    "name": "Lingering Composition",
    "level": 1,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=180",
    "prerequisites": "maestro muse, focus pool",
    "benefits": "By adding a flourish, you make your compositions last longer.",
    "text": "By adding a flourish, you make your compositions last longer. You learn the   focus spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Reach Spell",
    "level": 1,
    "traits": ["Bard", " Cleric", " Concentrate", " Druid", " Metamagic", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
    "prerequisites": "",
    "benefits": "You can extend your spells\u2019 range",
    "text": "You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."
}, {
    "name": "Versatile Performance",
    "level": 1,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=182",
    "prerequisites": "polymath muse",
    "benefits": "You can rely on the grandeur of your performances rather than ordinary social skills.",
    "text": "You can rely on the grandeur of your performances rather than ordinary social skills. You can use Performance instead of Diplomacy to Make an Impression and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate. You can use your proficiency rank in Performance to meet the requirements of skill feats that require a particular rank in Deception, Diplomacy, or Intimidation."
}, {
    "name": "Cantrip Expansion",
    "level": 2,
    "traits": ["Bard", " Cleric", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
    "prerequisites": "",
    "benefits": "Study broadens your range of simple spells",
    "text": "A greater understanding of your magic broadens your range of simple spells. : You can prepare two additional cantrips each day. : Add two additional cantrips from your spell list to your repertoire. "
}, {
    "name": "Esoteric Polymath",
    "level": 2,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=184",
    "prerequisites": "polymath muse",
    "benefits": "You keep a book of occult spells, similar to a wizard\u2019s spellbook.",
    "text": "You keep a book of occult spells, similar to a wizard\u2019s spellbook, and can use its spells to supplement your spell repertoire. Add all the spells in your repertoire to this book for free. You can use the Occultism skill to Learn Spells (page 238) and add them to your spellbook by paying the appropriate cost, similar to a wizard.  During your daily preparations, choose any one spell from your book of occult spells. If that spell is already in your spell repertoire, you can treat it as an additional signature spell that day. If it isn\u2019t in your repertoire, treat it as though it were until your next daily preparations."
}, {
    "name": "Inspire Competence",
    "level": 2,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=185",
    "prerequisites": "maestro muse",
    "benefits": "You learn to aid your allies\u2019 skills with your performance.",
    "text": "You learn the   composition cantrip, which aids your allies\u2019 skills."
}, {
    "name": "Loremaster's Etude",
    "level": 2,
    "traits": ["Bard", " Fortune"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=186",
    "prerequisites": "enigma muse, focus pool",
    "benefits": "You magically unlock memories, making them easier to recall.",
    "text": "You magically unlock memories, making them easier to recall. You learn the   composition spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Multifarious Muse",
    "level": 2,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=187",
    "prerequisites": "",
    "benefits": "Your muse doesn\u2019t fall into a single label.",
    "text": "Your muse doesn\u2019t fall into a single label. Choose a type of muse other than that of your own. You gain a 1st-level feat that requires that muse, and your muse is now also a muse of that type, allowing you to take feats with the other muse as a prerequisite. You don\u2019t gain any of the other effects of the muse you chose.  You can take this feat multiple times. Each time you do, you must choose a different type of muse other than that of your own."
}, {
    "name": "Inspire Defense",
    "level": 4,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=188",
    "prerequisites": "maestro muse",
    "benefits": "You learn to protect yourself and your allies with your performance",
    "text": "You learn the   composition cantrip (page 386), which protects you and allies."
}, {
    "name": "Melodious Spell",
    "level": 4,
    "traits": ["Bard", " Concentrate", " Manipulate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=189",
    "prerequisites": "",
    "benefits": "You subtly weave your spellcasting into your performance.",
    "text": "You subtly weave your spellcasting into your performance. If the next action you take is to Cast a Spell, attempt a Performance check against all observers\u2019 Perception DCs. If your Performance check is successful against an observer\u2019s Perception DC, that observer doesn\u2019t notice that you are Casting a Spell, even though normally spells have sensory manifestations that would make spellcasting obvious to those around you, and verbal, somatic, and material components are extremely overt. You hide all of these as part of an ordinary performance.  This hides only the spell\u2019s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish."
}, {
    "name": "Triple Time",
    "level": 4,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=190",
    "prerequisites": "",
    "benefits": "You learn to speed up yourelf and your allies with your performance",
    "text": "You learn the   composition cantrip, which speeds up you and your allies for a round."
}, {
    "name": "Versatile Signature",
    "level": 4,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=191",
    "prerequisites": "polymath muse",
    "benefits": "You\u2019re always tweaking your available repertoire.",
    "text": "While most bards are known for certain signature performances and spells, you\u2019re always tweaking your available repertoire. When you make your daily preparations, you can change one of your signature spells to a different spell of that level from your repertoire."
}, {
    "name": "Dirge of Doom",
    "level": 6,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=192",
    "prerequisites": "",
    "benefits": "You learn to frighten your enemies with your performance",
    "text": "You learn the   composition cantrip, which frightens your enemies."
}, {
    "name": "Harmonize",
    "level": 6,
    "traits": ["Bard", " Concentrate", " Manipulate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=193",
    "prerequisites": "maestro muse",
    "benefits": "You can perform multiple compositions simultaneously.",
    "text": "You can perform multiple compositions simultaneously. If your next action is to cast a composition, it becomes a harmonized composition. Unlike a normal composition, a harmonized composition doesn\u2019t end if you cast another composition, and you can cast another composition on the same turn as a harmonized one. Casting another harmonized composition ends any harmonized composition you have in effect."
}, {
    "name": "Steady Spellcasting",
    "level": 6,
    "traits": ["Bard", " Cleric", " Druid", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
    "prerequisites": "",
    "benefits": "You don\u2019t lose spells easily",
    "text": "Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\u2019t disrupted."
}, {
    "name": "Eclectic Skill",
    "level": 8,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=195",
    "prerequisites": "polymath muse, master in Occultism",
    "benefits": "Your broad experiences translate to a range of skills.",
    "text": "Your broad experiences translate to a range of skills. You add your level to all skill checks in which you are untrained. You can attempt any skill check that normally requires you to be trained, even if you are untrained. If you have legendary proficiency in Occultism, you can attempt any skill check that normally requires you to have expert proficiency, even if untrained or trained."
}, {
    "name": "Inspire Heroics",
    "level": 8,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=196",
    "prerequisites": "maestro muse, focus pool",
    "benefits": "Your performances inspire even greater deeds in your allies.",
    "text": "Your performances inspire even greater deeds in your allies. You learn the   metamagic focus spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Know-It-All",
    "level": 8,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=197",
    "prerequisites": "enigma muse",
    "benefits": "Your knowledge of the world expands beyond what you have read",
    "text": "When you succeed at a Knowledge check, you gain additional information or context. When you critically succeed at a Knowledge check, at the GM\u2019s discretion you might gain even more additional information or context than normal."
}, {
    "name": "House of Imaginary Walls",
    "level": 10,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=198",
    "prerequisites": "",
    "benefits": "You erect an imaginary barrier others believe to be real.",
    "text": "You erect an imaginary barrier others believe to be real. You learn the   composition cantrip."
}, {
    "name": "Quickened Casting",
    "level": 10,
    "traits": ["Bard", " Concentrate", " Metamagic", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=199",
    "prerequisites": "",
    "benefits": "You are able to quickly cast a spell",
    "text": "If your next action is to cast a cantrip or a spell that is at least 2 levels lower than the highest level spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action).   This can only be used on a cantrip or spell from the class matching the one you gained this feat from."
}, {
    "name": "Unusual Composition",
    "level": 10,
    "traits": ["Bard", " Concentrate", " Manipulate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=200",
    "prerequisites": "polymath muse",
    "benefits": "You can translate the emotion and power of a composition to other mediums.",
    "text": "You can translate the emotion and power of a composition to other mediums. If your next action is to cast a composition spell, you can use a different kind of performance than usual for the composition to change any of its somatic components to verbal components or vice versa. As usual for composition spells, this changes whether the composition is auditory or visual."
}, {
    "name": "Eclectic Polymath",
    "level": 12,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=201",
    "prerequisites": "Esoteric Polymath",
    "benefits": "Your flexible mind can quickly shift spells.",
    "text": "Your flexible mind can quickly shift spells. If you add a spell to your repertoire during your daily preparations using  , when you prepare again, you can choose to keep the new spell from Esoteric Polymath in your repertoire and instead lose access to another spell of the same level in your repertoire."
}, {
    "name": "Inspirational Focus",
    "level": 12,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=202",
    "prerequisites": "",
    "benefits": "Your connection to your muse has granted you unusual focus.",
    "text": "Your connection to your muse has granted you unusual focus. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."
}, {
    "name": "Silver's Refrain",
    "level": 12,
    "traits": ["Bard", " Rare"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=926",
    "prerequisites": "",
    "benefits": "Learn the silver's refrain composition cantrip.",
    "text": "You learn the   composition cantrip, which aids you when fighting  ."
}, {
    "name": "Allegro",
    "level": 14,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=203",
    "prerequisites": "",
    "benefits": "You can quicken your allies with a fast-paced performance.",
    "text": "You can quicken your allies with a fast-paced performance. You learn the   composition cantrip."
}, {
    "name": "Soothing Ballad",
    "level": 14,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=204",
    "prerequisites": "focus pool",
    "benefits": "You soothe your allies\u2019 wounds with the power of your performance.",
    "text": "You soothe your allies\u2019 wounds with the power of your performance. You learn the   composition spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "True Hypercognition",
    "level": 14,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=205",
    "prerequisites": "enigma muse",
    "benefits": "Your mind works at an incredible pace.",
    "text": "Your mind works at an incredible pace. You instantly use up to five Recall Knowledge actions. If you have any special abilities or free actions that would normally be triggered when you Recall Knowledge, you can\u2019t use them for these actions."
}, {
    "name": "Effortless Concentration",
    "level": 16,
    "traits": ["Bard", " Druid", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
    "prerequisites": "",
    "benefits": "You can maintain a spell with hardly a thought.",
    "text": "You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "
}, {
    "name": "Studious Capacity",
    "level": 16,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=207",
    "prerequisites": "enigma muse, legendary in Occultism",
    "benefits": "Your continued study of occult magic has increased your magical capacity.",
    "text": "Your continued study of occult magic has increased your magical capacity, allowing you to cast spells even when it seems impossible. You can cast one spell each day even after you\u2019ve run out of spell slots of the appropriate spell level, but you can\u2019t use this ability to cast a spell of your highest spell level."
}, {
    "name": "Deep Lore",
    "level": 18,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=208",
    "prerequisites": "enigma muse, legendary in Occultism",
    "benefits": "Your repertoire is vast, containing far more spells than usual.",
    "text": "Your repertoire is vast, containing far more spells than usual. Add one spell to your repertoire of each level you can cast."
}, {
    "name": "Eternal Composition",
    "level": 18,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=209",
    "prerequisites": "maestro muse",
    "benefits": "The world is a stage upon which you are always playing. ",
    "text": "The world is a stage upon which you are always playing. You are permanently quickened; you can use your extra action only to cast a composition cantrip that requires 1 action to cast. While in exploration mode, you can declare that you are performing an eligible composition cantrip while using any exploration tactic. Even before your first turn in a combat encounter, that cantrip is active as if you had cast it on your previous turn."
}, {
    "name": "Impossible Polymath",
    "level": 18,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=210",
    "prerequisites": "trained in Arcana, Nature, or Religion, Esoteric Polymath",
    "benefits": "Your esoteric formulas are so unusual that they allow you to dabble in magic from diverse traditions.",
    "text": "Your esoteric formulas are so unusual that they allow you to dabble in magic from diverse traditions that other bards don\u2019t understand. As long as you\u2019re trained in Arcana, you can add arcane spells to your book from  ; as long as you\u2019re trained in Nature, you can add primal spells to your book; and as long as you are trained in Religion, you can add divine spells to your book.  Like your other spells in your book, you can add one of these spells from another tradition to your repertoire as an occult spell each day using Esoteric Polymath, but you can\u2019t retain any spells from another tradition when you prepare again, even if you have Eclectic Polymath."
}, {
    "name": "Fatal Aria",
    "level": 20,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=211",
    "prerequisites": "focus pool",
    "benefits": "Your songs overwhelm the target with unbearable emotion.",
    "text": "Your songs overwhelm the target with unbearable emotion, potentially striking them dead on the spot. You learn the   composition spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Perfect Encore",
    "level": 20,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=212",
    "prerequisites": "magnum opus",
    "benefits": "You develop another incredible creation.",
    "text": "You develop another incredible creation. You gain an additional 10th-level spell slot."
}, {
    "name": "Symphony of the Muses",
    "level": 20,
    "traits": ["Bard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=213",
    "prerequisites": "Harmonize",
    "benefits": "You are able to weave countless performances together into a solo symphony.",
    "text": "You are able to weave countless performances together into a solo symphony. You are no longer limited to a single composition each turn or a single composition at a time; when you use a new composition, all previous compositions\u2019 effects continue for their remaining duration."
}, {
    "name": "Deity's Domain",
    "level": 1,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=214",
    "prerequisites": "",
    "benefits": "You embody an aspect of your deity.",
    "text": "You embody an aspect of your deity. Choose one of your deity\u2019s domains from those listed on page 441. You gain the domain\u2019s initial domain spell as a devotion spell."
}, {
    "name": "Everstand Stance",
    "level": 1,
    "traits": ["Champion", " Fighter", " Stance", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1087",
    "prerequisites": "",
    "benefits": "You brace your shield with both hands, enhancing its potential for both offense and defense",
    "text": "You brace your shield with both hands, enhancing its potential for both offense and defense. When in this stance, you wield the shield with both hands. When wielding a shield this way, increase the weapon damage die of the shield\u2019s boss or spikes by one step, and increase the shield\u2019s Hardness by 2 when using the   reaction."
}, {
    "name": "Ranged Reprisal",
    "level": 1,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=215",
    "prerequisites": "paladin cause",
    "benefits": "You can use Retributive Strike with a ranged weapon.",
    "text": "You can use   with a ranged weapon. In addition, if the foe that triggered your reaction is within 5 feet of your reach but not in your reach, as part of your reaction you can Step to put the foe in your reach before making a melee Retributive Strike."
}, {
    "name": "Unimpeded Step",
    "level": 1,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=216",
    "prerequisites": "liberator cause",
    "benefits": "With a burst of divine liberation, your spur your ally\u2019s movement.",
    "text": "With a burst of divine liberation, your ally\u2019s movement from your   is unaffected by difficult terrain, greater difficult terrain, narrow surfaces, and uneven ground."
}, {
    "name": "Weight of Guilt",
    "level": 1,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=217",
    "prerequisites": "redeemer cause",
    "benefits": "Guilt clouds the minds of those who ignore your Glimpse of Redemption.",
    "text": "Guilt clouds the minds of those who ignore your  . Instead of making the triggering creature enfeebled 2, you can make it stupefied 2 for the same duration."
}, {
    "name": "Divine Grace",
    "level": 2,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=218",
    "prerequisites": "",
    "benefits": "You call upon your deity\u2019s grace.",
    "text": "You call upon your deity\u2019s grace, gaining a +2 circumstance bonus to the save."
}, {
    "name": "Dragonslayer Oath",
    "level": 2,
    "traits": ["Champion", " Oath"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=219",
    "prerequisites": "tenets of good",
    "benefits": "You\u2019ve sworn to slay evil dragons.",
    "text": "You\u2019ve sworn to slay evil dragons. Add the following tenet to your code after the others: \u201cYou must slay evil dragons you encounter as long as you have a reasonable chance of success.\u201d  Your Retributive Strike gains a +4 circumstance bonus to damage against an evil dragon, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption\u2019s resistance against damage from an evil dragon is 7 + your level. If you use Liberating Step triggered by an evil dragon, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.  You don\u2019t consider evil dragons to be legitimate authorities, even in nations they rule."
}, {
    "name": "Fiendsbane Oath",
    "level": 2,
    "traits": ["Champion", " Oath"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=220",
    "prerequisites": "tenets of good",
    "benefits": "You\u2019ve sworn an oath to banish the corruption of fiends to the dark planes they call home.",
    "text": "You\u2019ve sworn an oath to banish the corruption of fiends to the dark planes they call home. Add the following tenet to your champion\u2019s code after the other tenets: \u201cYou must banish or slay fiends you come across as long as you have a reasonable chance of success; in the incredibly unlikely event you find a good fiend, you don\u2019t have to banish or kill it.\u201d  Your Retributive Strike gains a +4 circumstance bonus to damage against a fiend, or a +6 circumstance bonus if you have master proficiency with the weapon you used. Your Glimpse of Redemption\u2019s resistance against damage from a fiend is 7 + your level. If you use Liberating Step triggered by a fiend, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.  You don\u2019t consider fiends to be legitimate authorities, even in nations ruled by fiends."
}, {
    "name": "Shining Oath",
    "level": 2,
    "traits": ["Champion", " Oath"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=221",
    "prerequisites": "tenets of good",
    "benefits": "You\u2019ve sworn an oath to put the undead to rest.",
    "text": "You\u2019ve sworn an oath to put the undead to rest. Add the following tenet to your champion\u2019s code after the other tenets: \u201cYou must end the existence of undead you encounter as long as you have a reasonable chance of success; in the unlikely event you find a good undead, you can try to work out a more peaceful way to help it recover from its undead state rather than destroying it in combat, such as helping it complete its unfinished business and find peace.\u201d  Your Retributive Strike gains a +4 circumstance bonus to damage against an undead, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption\u2019s resistance against damage from an undead is 7 + your level. If you use Liberating Step triggered by an undead, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.  You don\u2019t consider undead to be legitimate authorities, even in nations ruled by undead."
}, {
    "name": "Vengeful Oath",
    "level": 2,
    "traits": ["Champion", " Oath"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=222",
    "prerequisites": "paladin cause",
    "benefits": "You\u2019ve sworn an oath to hunt down wicked evildoers and bring them to judgment.",
    "text": "You\u2019ve sworn an oath to hunt down wicked evildoers and bring them to judgment. Add the following tenet to your code after the others: \u201cYou must hunt down and exterminate evil creatures that have committed heinous atrocities as long as you have a reasonable chance of success and aren\u2019t engaged in a mission that would prevent your doing so.\u201d  You can use   to damage a creature you witness harming an innocent or a good ally as if it were undead; in this case, lay on hands deals good damage instead of positive damage and gains the good trait. This good damage can affect non-evil creatures. This doesn\u2019t prevent you from healing such a creature with  ; you choose whether to heal or harm."
}, {
    "name": "Aura of Courage",
    "level": 4,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=223",
    "prerequisites": "tenets of good",
    "benefits": "You stand strong in the face of danger and inspire your allies to do the same.",
    "text": "You stand strong in the face of danger and inspire your allies to do the same. Whenever you become frightened, reduce the condition value by 1 (to a minimum of 0). At the end of your turn when you would reduce your frightened condition value by 1, you also reduce the value by 1 for all allies within 15 feet."
}, {
    "name": "Divine Health",
    "level": 4,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=224",
    "prerequisites": "tenets of good",
    "benefits": "Your faith makes you resistant to disease.",
    "text": "Your faith makes you resistant to disease, protecting you as you offer succor to the ill. You gain a +1 status bonus to saves against diseases. In addition, if you roll a success on a save against a disease, you get a critical success instead."
}, {
    "name": "Everstand Strike",
    "level": 4,
    "traits": ["Champion", " Fighter", " Press", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1088",
    "prerequisites": "Everstand Stance ",
    "benefits": "Your follow-up blow leaves you an opening to set your shield",
    "text": "Your follow-up blow leaves you an opening to set your shield. Make a Strike with the wielded shield. If the Strike hits and deals damage, you also  ."
}, {
    "name": "Light of Revelation",
    "level": 4,
    "traits": ["Champion", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1089",
    "prerequisites": "",
    "benefits": "You\u2019ve learned to call upon light to reveal what is hidden",
    "text": "You\u2019ve learned to call upon light to reveal what is hidden. You gain the   devotion spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Mercy",
    "level": 4,
    "traits": ["Champion", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=225",
    "prerequisites": "",
    "benefits": "Your touch relieves fear and restores movement.",
    "text": "Your touch relieves fear and restores movement. If the next action you use is to cast  , you can attempt to counteract a fear effect or an effect imposing the paralyzed condition on the target, in addition to the other benefits of  ."
}, {
    "name": "Sun Blade",
    "level": 4,
    "traits": ["Champion", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1090",
    "prerequisites": "",
    "benefits": "You can unleash burning sunlight from your sword or spear",
    "text": "You can unleash burning sunlight from your sword or spear. You gain the   devotion spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Attack of Opportunity",
    "level": 6,
    "traits": ["Champion", " Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=145",
    "prerequisites": "",
    "benefits": "You swat a foe that leaves an opening. ",
    "text": "You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a   action, you disrupt that action. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike."
}, {
    "name": "Litany Against Wrath",
    "level": 6,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=227",
    "prerequisites": "devotion spells, tenets of good",
    "benefits": "You excoriate a foe for its wrath against goodly creatures.",
    "text": "You excoriate a foe for its wrath against goodly creatures. You can cast the   devotion spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Loyal Warhorse",
    "level": 6,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=228",
    "prerequisites": "divine ally (steed)",
    "benefits": "You and your mount have grown closer, and your loyalty to each other is unbreakable.",
    "text": "You and your mount have grown closer, and your loyalty to each other is unbreakable. The mount you gained through the divine ally class feature is now a mature animal companion (page 214). In addition, your mount never attacks you, even if it is magically compelled to do so."
}, {
    "name": "Shield Warden",
    "level": 6,
    "traits": ["Champion", " Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=229",
    "prerequisites": "[Champion] divine ally (shield), tenets of good; [Fighter] shield block",
    "benefits": "You use your shield to protect your allies as well as yourself.",
    "text": "You use your shield to protect your allies. When you have a shield raised, you can use your Shield Block reaction when an attack is made against an ally adjacent to you. If you do, the shield prevents that ally from taking damage instead of preventing you from taking damage, following the normal rules for Shield Block."
}, {
    "name": "Smite Evil",
    "level": 6,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=230",
    "prerequisites": "divine ally (blade)",
    "benefits": "Your blade ally becomes an even more powerful tool against evildoers.",
    "text": "Your blade ally becomes an even more powerful tool against evildoers. Select one foe you can see. Until the start of your next turn, your Strikes with the weapon your blade ally inhabits against that foe deal an extra 4 good damage, increasing to 6 if you have master proficiency with this weapon.  If the foe attacks one of your allies, the duration extends to the end of that foe\u2019s next turn. If the foe continues to attack your allies each turn, the duration continues to extend."
}, {
    "name": "Advanced Deity's Domain",
    "level": 8,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=231",
    "prerequisites": "Deity\u2019s Domain",
    "benefits": "Through your conviction, you have glimpsed the deeper secrets of your deity\u2019s domain. ",
    "text": "Through your conviction, you have glimpsed the deeper secrets of your deity\u2019s domain. You gain an advanced domain spell from the domain you chose with Deity\u2019s Domain. You can cast that spell as a devotion spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Greater Mercy",
    "level": 8,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=232",
    "prerequisites": "Mercy",
    "benefits": "Your faith enhances your ability to remove conditions.",
    "text": "Your faith enhances your ability to remove conditions. When you use Mercy, you can instead attempt to counteract the blinded, deafened, sickened, or slowed conditions."
}, {
    "name": "Heal Mount",
    "level": 8,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=233",
    "prerequisites": "divine ally (steed)",
    "benefits": "Your devotion to your mount manifests as a surge of positive energy.",
    "text": "Your devotion to your mount manifests as a surge of positive energy. When you cast   on your mount, you can restore 10 Hit Points, plus 10 for each heightened level."
}, {
    "name": "Impassable Wall Stance",
    "level": 8,
    "traits": ["Champion", " Fighter", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1091",
    "prerequisites": "Attack of Opportunity",
    "benefits": "You refuse to let foes past your guard",
    "text": "You refuse to let foes past your guard. As long as you are in this stance, when you critically hit with an Attack of Opportunity triggered by a move action, you disrupt that move action."
}, {
    "name": "Quick Block",
    "level": 8,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=234",
    "prerequisites": "",
    "benefits": "You can block with your shield instinctively.",
    "text": "You can block with your shield instinctively. At the start of each of your turns, you gain an additional reaction that you can use only to perform a Shield Block."
}, {
    "name": "Second Ally",
    "level": 8,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=235",
    "prerequisites": "divine ally",
    "benefits": "Your inner grace attracts the attention of a second protective spirit.",
    "text": "Your inner grace attracts the attention of a second protective spirit. Choose a second type of divine ally and gain its benefits."
}, {
    "name": "Sense Evil",
    "level": 8,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=236",
    "prerequisites": "tenets of good",
    "benefits": "You sense evil as a queasy or foreboding feeling.",
    "text": "You sense evil as a queasy or foreboding feeling. When in the presence of an aura of evil that is powerful or overwhelming (page 328), you eventually detect the aura, though you might not do so instantly, and you can\u2019t pinpoint the location. This acts as a vague sense, similar to humans\u2019 sense of smell. An evil creature using a disguise or otherwise trying to hide its presence attempts a Deception check against your Perception DC to hide its aura from you. If the creature succeeds at its Deception check, it is then temporarily immune to your Sense Evil for 1 day."
}, {
    "name": "Devoted Focus",
    "level": 10,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=237",
    "prerequisites": "devotion spells",
    "benefits": "Your devotion is strong enough to increase your focus to incredible heights.",
    "text": "Your devotion is strong enough to increase your focus to incredible heights. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."
}, {
    "name": "Imposing Destrier",
    "level": 10,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=238",
    "prerequisites": "divine ally (steed), Loyal Warhorse",
    "benefits": "Under your care, your mount has realized its innate potential.",
    "text": "Under your care, your mount has realized its innate potential. The mount you gained through the divine ally class feature is now a nimble or savage animal companion (page 214). During an encounter, even if you don\u2019t use the Command an Animal action, your mount can still use 1 action on your turn to Stride or Strike."
}, {
    "name": "Litany Against Sloth",
    "level": 10,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=239",
    "prerequisites": "devotion spells, tenets of good",
    "benefits": "You rail against the sin of sloth, turning a foe\u2019s laziness against it.",
    "text": "You rail against the sin of sloth, turning a foe\u2019s laziness against it. You can cast the   devotion spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Radiant Blade Spirit",
    "level": 10,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=240",
    "prerequisites": "divine ally (blade)",
    "benefits": "Your divine ally radiates power, enhancing your chosen weapon.",
    "text": "Your divine ally radiates power, enhancing your chosen weapon. When you choose the weapon for your blade ally during your daily preparations, add the following property runes to the list of effects you can choose from:   and any aligned properties ( ,  ,  , or  ) that match your cause\u2019s alignment."
}, {
    "name": "Shield of Reckoning",
    "level": 10,
    "traits": ["Champion", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=241",
    "prerequisites": "champion\u2019s reaction, divine ally (shield), tenets of good, Shield Warden",
    "benefits": "When you shield your ally against an attack, you call upon your power to protect your ally further. ",
    "text": "When you shield your ally against an attack, you call upon your power to protect your ally further. You use the Shield Block reaction to prevent damage to an ally and also use your champion\u2019s reaction against the foe that attacked your ally."
}, {
    "name": "Affliction Mercy",
    "level": 12,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=242",
    "prerequisites": "Mercy",
    "benefits": "The divine grace that flows through you grants reprieve from an affliction.",
    "text": "The divine grace that flows through you grants reprieve from an affliction. When you use Mercy, you can instead attempt to counteract a curse, disease, or poison."
}, {
    "name": "Aura of Faith",
    "level": 12,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=243",
    "prerequisites": "tenets of good",
    "benefits": "You radiate an aura of pure belief that imbues your attacks and those of nearby allies with holy power.",
    "text": "You radiate an aura of pure belief that imbues your attacks and those of nearby allies with holy power. Your Strikes deal an extra 1 good damage against evil creatures. Also, each good-aligned ally within 15 feet gains this benefit on their first Strike that hits an evil creature each round."
}, {
    "name": "Blade of Justice",
    "level": 12,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=244",
    "prerequisites": "paladin cause",
    "benefits": "You call upon divine power and make a weapon or unarmed Strike against a foe you have witnessed harming an ally or innocent.",
    "text": "You call upon divine power and make a weapon or unarmed Strike against a foe you have witnessed harming an ally or innocent. The Strike deals two extra weapon damage dice if the target of your Strike is evil. Whether or not the target is evil, the Strike applies all effects that normally apply on a Retributive Strike (such as divine smite), and you can convert all the physical damage from the attack into good damage."
}, {
    "name": "Champion's Sacrifice",
    "level": 12,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=245",
    "prerequisites": "tenets of good",
    "benefits": "You can suffer so that others might live.",
    "text": "You can suffer so that others might live. You can cast the   devotion spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Divine Wall",
    "level": 12,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=246",
    "prerequisites": "You are wielding a shield.",
    "benefits": "You use your shield to harry your enemies, preventing them from stepping away from or around you.",
    "text": "You use your shield to harry your enemies, preventing them from stepping away from or around you. All spaces adjacent to you are difficult terrain for your enemies."
}, {
    "name": "Lasting Doubt",
    "level": 12,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=247",
    "prerequisites": "redeemer cause",
    "benefits": "When you cast doubt upon your foes, the effect lasts longer than usual.",
    "text": "When you cast doubt upon your foes, the effect lasts longer than usual. After being enfeebled 2 by your Glimpse of Redemption, the foe is enfeebled 1 for 1 minute. If you have Weight of Guilt, after being stupefied 2 by your Glimpse of Redemption, the foe is stupefied 1 for 1 minute or until the flat check from stupefied causes it to lose a spell, whichever comes first."
}, {
    "name": "Liberating Stride",
    "level": 12,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=248",
    "prerequisites": "liberator cause",
    "benefits": "Your allies can move farther when you release them from harm",
    "text": "Instead of you taking a Step at the end of your Liberating Step, the triggering ally can Stride up to half their Speed. Even if you have exalt, only the triggering ally gains this benefit."
}, {
    "name": "Anchoring Aura",
    "level": 14,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=249",
    "prerequisites": "Fiendsbane Oath",
    "benefits": "Your aura hampers fiends\u2019 teleportation.",
    "text": "Your aura hampers fiends\u2019 teleportation. Your aura attempts to counteract teleportation spells cast by fiends within 15 feet, using the spell level and DC of your devotion spells."
}, {
    "name": "Aura of Life",
    "level": 14,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=250",
    "prerequisites": "Shining Oath",
    "benefits": "Your aura protects against necromantic effects.",
    "text": "Your aura protects against necromantic effects. You and all allies within 15 feet gain resistance 5 to negative energy and a +1 status bonus to saves against necromancy effects."
}, {
    "name": "Aura of Righteousness",
    "level": 14,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=251",
    "prerequisites": "tenets of good",
    "benefits": "Your righteous aura dampens evil\u2019s might.",
    "text": "Your righteous aura dampens evil\u2019s might. You and all allies within 15 feet gain evil resistance 5."
}, {
    "name": "Aura of Vengeance",
    "level": 14,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=252",
    "prerequisites": "exalt, Vengeful Oath",
    "benefits": "When you call upon others to take retribution, you also guide their aim.",
    "text": "When you call upon others to take retribution, you also guide their aim. When you use Retributive Strike, your allies who make Strikes take only a \u20132 penalty, instead of a \u20135 penalty."
}, {
    "name": "Divine Reflexes",
    "level": 14,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=253",
    "prerequisites": "",
    "benefits": "You can use your champion's reaction more",
    "text": "At the start of each of your turns, you gain an additional reaction that you can use only for your champion\u2019s reaction."
}, {
    "name": "Litany of Righteousness",
    "level": 14,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=254",
    "prerequisites": "tenets of good",
    "benefits": "You call upon righteousness to expose an evil foe\u2019s weakness.",
    "text": "You call upon righteousness to expose an evil foe\u2019s weakness. You can cast the   devotion spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Wyrmbane Aura",
    "level": 14,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=255",
    "prerequisites": "Dragonslayer Oath",
    "benefits": "Your aura protects against destructive energies and dragons\u2019 breath.",
    "text": "Your aura protects against destructive energies and dragons\u2019 breath. You and all allies within 15 feet gain resistance equal to your Charisma modifier to acid, cold, electricity, fire, and poison. If the source of one of these types of damage is a dragon\u2019s breath, increase the resistance to half your level."
}, {
    "name": "Auspicious Mount",
    "level": 16,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=256",
    "prerequisites": "divine ally (steed), Imposing Destrier",
    "benefits": "Guided by your ongoing care, your steed has developed incredible intelligence and skill.",
    "text": "Guided by your ongoing care, your steed has developed incredible intelligence and skill. The mount you gained through the divine ally class feature is now a specialized animal companion (page 217). You can select one of the usual specializations or the auspice specialization.  Auspice mounts gain the following benefits: Your companion is marked by your deity\u2019s religious symbol as a sacred creature of your deity. Its proficiency rank in Religion increases to expert, it can speak the language associated with your deity\u2019s servitors (Celestial for champions who follow the tenets of good), and its Intelligence modifier increases by 2 and its Wisdom modifier by 1."
}, {
    "name": "Instrument of Zeal",
    "level": 16,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=257",
    "prerequisites": "divine ally (blade), tenets of good",
    "benefits": "Divine energy fills your weapon.",
    "text": "Divine energy fills your weapon. Whenever you critically hit a foe with Smite Evil or a Retributive Strike, your attack adds an extra damage die, and the target is slowed 1 on its next turn."
}, {
    "name": "Shield of Grace",
    "level": 16,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=258",
    "prerequisites": "Shield Warden",
    "benefits": "You protect an ally with both your shield and your body.",
    "text": "You protect an ally with both your shield and your body. Whenever you use the Shield Block reaction to prevent damage to an ally, you can evenly split the remaining damage after the Shield Block between the ally and yourself."
}, {
    "name": "Celestial Form",
    "level": 18,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=259",
    "prerequisites": "tenets of good",
    "benefits": "You take on a celestial countenance, appearing like a type of celestial who serves your deity.",
    "text": "You take on a celestial countenance, appearing like a type of celestial who serves your deity; for example, as an angel, you would gain a halo and feathery wings. You gain a fly Speed equal to your Speed. You gain darkvision if you don\u2019t already have it, and you gain the celestial trait and the trait appropriate to the type of servitor you\u2019ve become (archon, angel, or azata, for example)."
}, {
    "name": "Ultimate Mercy",
    "level": 18,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=260",
    "prerequisites": "Mercy",
    "benefits": "Your mercy transcends the bounds of life and death.",
    "text": "Your mercy transcends the bounds of life and death. When you use Mercy, you can cast   on a creature that died since your last turn to return it to life. The target returns to life with 1 hit point and becomes wounded 1. You can\u2019t use Ultimate Mercy if the triggering effect was   or a death effect."
}, {
    "name": "Celestial Mount",
    "level": 20,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=261",
    "prerequisites": "divine ally (steed), tenets of good",
    "benefits": "Your steed gains incredible celestial powers granted by your deity.",
    "text": "Your steed gains incredible celestial powers granted by your deity. It gains darkvision, its maximum Hit Points increase by 40, and it gains weakness 10 to evil damage.  Additionally, it grows wings appropriate to a servitor of your deity (such as metallic wings for an archon), granting it a fly Speed equal to its Speed. It gains the   trait and the trait appropriate to the type of servitor it has become ( ,  , or  , for example)."
}, {
    "name": "Radiant Blade Master",
    "level": 20,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=262",
    "prerequisites": "divine ally (blade), Radiant Blade Spirit",
    "benefits": "Your divine ally turns your chosen weapon into a paragon of its type. ",
    "text": "Your divine ally turns your chosen weapon into a paragon of its type. When you choose the weapon for your blade divine ally during your preparations, add the following property runes to the list of effects you can choose from:  ,  , and  ."
}, {
    "name": "Shield Paragon",
    "level": 20,
    "traits": ["Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=263",
    "prerequisites": "divine ally (shield)",
    "benefits": "Your shield is a vessel of divine protection.",
    "text": "Your shield is a vessel of divine protection. When you\u2019re wielding your chosen shield, it is always raised, even without you using the Raise a Shield action. Your chosen shield doubles its HP and BT, rather than increasing them by half. If it would be destroyed, it vanishes to your deity\u2019s realm instead, where your divine ally repairs it. During your next daily preparations, the shield returns to you fully repaired."
}, {
    "name": "Deadly Simplicity",
    "level": 1,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=264",
    "prerequisites": "deity with a simple favored weapon, trained with your deity\u2019s favored weapon",
    "benefits": "Your deity\u2019s weapon is especially powerful in your hands.",
    "text": "Your deity\u2019s weapon is especially powerful in your hands. When you are wielding your deity\u2019s favored weapon, increase the damage die size of that weapon by one step. If your deity\u2019s favored weapon is an unarmed attack (such as a fist, if you worship  ) and its damage die is smaller than d6, instead increase its damage die size to d6."
}, {
    "name": "Domain Initiate",
    "level": 1,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=265",
    "prerequisites": "",
    "benefits": "Your deity bestows a special spell related to their powers.",
    "text": "Your deity bestows a special spell related to their powers. Select one domain\u2014a subject of particular interest to you within your religion\u2014from your deity\u2019s list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics. Each domain\u2019s theme and domain spells appear in Table 8\u20132: Domains on page 441.  Domain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to pray to your deity or do service toward their causes.  Focus spells are automatically heightened to half your level rounded up. Focus spells don\u2019t require spell slots, nor can you cast them using spell slots. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points. The full rules for focus spells appear on page 300.  You can select this feat multiple times, selecting a different domain each time and gaining its domain spell."
}, {
    "name": "False Faith",
    "level": 1,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1144",
    "prerequisites": "worshipper of Droskar",
    "benefits": "Droskar knows you may need to disguise yourself in societies that oppose your faith.",
    "text": "Droskar knows you may need to disguise yourself in societies that oppose your faith. After spending 1 hour in prayer to Droskar, you can cast spells using the religious symbol of a different deity as your divine focus, and you can address verbal prayers to that deity. Droskar intercepts your prayers and answers them without the named god knowing.  This ability applies to the religious symbol of only one god at a time\u2014making a different religious symbol work in this fashion requires another hour of prayer and causes the old one to cease functioning. You can always use a religious symbol of Droskar without affecting this ability."
}, {
    "name": "Harming Hands",
    "level": 1,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=266",
    "prerequisites": "harmful font",
    "benefits": "The mordant power of your negative energy grows.",
    "text": "The mordant power of your negative energy grows. When you cast  , you roll d10s instead of d8s."
}, {
    "name": "Healing Hands",
    "level": 1,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=267",
    "prerequisites": "healing font",
    "benefits": "Your positive energy is even more vibrant and restorative.",
    "text": "Your positive energy is even more vibrant and restorative. When you cast  , you roll d10s instead of d8s."
}, {
    "name": "Holy Castigation",
    "level": 1,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=268",
    "prerequisites": "good alignment",
    "benefits": "You combine holy energy with positive energy to damage demons, devils, and their evil ilk.",
    "text": "You combine holy energy with positive energy to damage demons, devils, and their evil ilk.   spells you cast damage fiends as though they were undead."
}, {
    "name": "Reach Spell",
    "level": 1,
    "traits": ["Cleric", " Bard", " Concentrate", " Druid", " Metamagic", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
    "prerequisites": "",
    "benefits": "You can extend your spells\u2019 range",
    "text": "You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."
}, {
    "name": "Cantrip Expansion",
    "level": 2,
    "traits": ["Cleric", " Bard", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
    "prerequisites": "",
    "benefits": "Study broadens your range of simple spells",
    "text": "A greater understanding of your magic broadens your range of simple spells. : You can prepare two additional cantrips each day. : Add two additional cantrips from your spell list to your repertoire. "
}, {
    "name": "Communal Healing",
    "level": 2,
    "traits": ["Cleric", " Healing", " Positive"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=271",
    "prerequisites": "",
    "benefits": "You\u2019re a conduit for positive energy, and as you channel it through you, it heals some of your minor injuries. ",
    "text": "You\u2019re a conduit for positive energy, and as you cit through you, it heals some of your minor injuries. When you cast the   spell to heal a single creature other than yourself, you regain Hit Points equal to the spell level of the   spell."
}, {
    "name": "Emblazon Armament",
    "level": 2,
    "traits": ["Cleric", " Exploration"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=272",
    "prerequisites": "",
    "benefits": "Carefully etching a sacred image into a physical object, you steel yourself for battle.",
    "text": "Carefully etching a sacred image into a physical object, you steel yourself for battle. You can spend 10 minutes emblazoning a symbol of your deity upon a weapon or shield. The symbol doesn\u2019t fade until 1 year has passed, but if you Emblazon an Armament, any symbol you previously emblazoned and any symbol already emblazoned on that item instantly disappears. The item becomes a religious symbol of your deity and can be used as a divine focus while emblazoned, and it gains another benefit determined by the type of item. This benefit applies only to followers of the deity the symbol represents. "
}, {
    "name": "Sap Life",
    "level": 2,
    "traits": ["Cleric", " Healing"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=273",
    "prerequisites": "",
    "benefits": "You draw the life force out of your enemies to heal your own wounds.",
    "text": "You draw the life force out of your enemies to heal your own wounds. When you cast a   spell and damage at least one living creature, you regain Hit Points equal to the spell level of your   spell. If you aren\u2019t a living creature, you gain no benefit from this feat."
}, {
    "name": "Turn Undead",
    "level": 2,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=274",
    "prerequisites": "",
    "benefits": "Undead harmed by your positive energy might flee, compelled by an innate aversion to the force opposite undeath.",
    "text": "Undead harmed by your positive energy might flee, compelled by an innate aversion to the force opposite undeath. When you use a   spell to damage undead, each undead of your level or lower that critically fails its save gains the fleeing condition for 1 round."
}, {
    "name": "Versatile Font",
    "level": 2,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=275",
    "prerequisites": "harmful font or healing font, deity that allows clerics to have both fonts",
    "benefits": "As you explore your deity\u2019s aspects, you move beyond restrictions on healing or harming. ",
    "text": "As you explore your deity\u2019s aspects, you move beyond restrictions on healing or harming. You can prepare either   or   in the spell slots gained from the harmful font or healing font."
}, {
    "name": "Channel Smite",
    "level": 4,
    "traits": ["Cleric", " Divine", " Necromancy"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=276",
    "prerequisites": "harmful font or healing font",
    "benefits": "You siphon the destructive energies of positive or negative energy through a melee attack and into your foe. ",
    "text": "You siphon the destructive energies of positive or negative energy through a melee attack and into your foe. Make a melee Strike and add the spell\u2019s damage to the Strike\u2019s damage. This is negative damage if you expended a   spell or positive damage if you expended a   spell. The spell is expended with no effect if your Strike fails or hits a creature that isn\u2019t damaged by that energy type (such as if you hit a non-undead creature with a   spell)."
}, {
    "name": "Command Undead",
    "level": 4,
    "traits": ["Cleric", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=277",
    "prerequisites": "harmful font, evil alignment",
    "benefits": "You grasp the animating force within an undead creature and bend it to your will.",
    "text": "You grasp the animating force within an undead creature and bend it to your will. If the next action you use is to cast   targeting one undead creature, you transform the effects of that   spell. Instead of   normal effects, the target becomes controlled by you if its level is equal to or lower than your level \u2013 3. It can attempt a Will saving throw to resist being controlled by you. If the target is already under someone else\u2019s command, the controlling creature also rolls a saving throw, and the undead uses the better result.   The target is unaffected and is temporarily immune for 24 hours.  The target is unaffected.  The undead creature becomes a minion under your control. The spell gains a duration of 1 minute, but it is dismissed if you or an ally attacks the minion undead.  As failure, but the duration is 1 hour."
}, {
    "name": "Directed Channel",
    "level": 4,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=278",
    "prerequisites": "",
    "benefits": "You can shape the energy you channel in a single direction, reaching farther and in a more directed fashion.",
    "text": "You can shape the energy you channel in a single direction, reaching farther and in a more directed fashion. When you cast a version of   or   that has an area, you can make its area a 60-foot cone instead of a 30-foot emanation."
}, {
    "name": "Improved Communal Healing",
    "level": 4,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=279",
    "prerequisites": "Communal Healing",
    "benefits": "You can direct excess channeled energy outward to benefit an ally.",
    "text": "You can direct excess channeled energy outward to benefit an ally. You can grant the Hit Points you would regain from Communal Healing to any one creature within the range of your   spell instead of yourself. You can also use Communal Healing when you target only yourself with a   spell, though if you do, you must grant the additional healing to someone other than yourself."
}, {
    "name": "Necrotic Infusion",
    "level": 4,
    "traits": ["Cleric", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=280",
    "prerequisites": "harmful font, evil alignment",
    "benefits": "You pour negative energy into your undead subject to empower its attacks.",
    "text": "You pour negative energy into your undead subject to empower its attacks. If the next action you use is to cast   to restore Hit Points to a single undead creature, the target then deals an additional 1d6 negative damage with its melee weapons and unarmed attacks until the end of its next turn. If the   spell is at least 5th level, this damage increases to 2d6, and if the   spell is at least 8th level, the damage increases to 3d6."
}, {
    "name": "Cast Down",
    "level": 6,
    "traits": ["Cleric", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=281",
    "prerequisites": "harmful font or healing font",
    "benefits": "The sheer force of your faith can bring a foe crashing down.",
    "text": "The sheer force of your faith can bring a foe crashing down. If the next action you use is to cast   or   to damage one creature, the target is knocked prone if it takes any damage from the spell. If the target critically fails its save against the spell, it also takes a \u201310-foot status penalty to its Speed for 1 minute."
}, {
    "name": "Divine Weapon",
    "level": 6,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=282",
    "prerequisites": "",
    "benefits": "You siphon residual spell energy into a weapon you\u2019re wielding.",
    "text": "You siphon residual spell energy into a weapon you\u2019re wielding. Until the end of your turn, the weapon deals an additional 1d4 force damage. You can instead deal an additional 1d6 damage of an alignment type that matches one of your deity\u2019s alignment components. As usual for aligned damage, this can damage only creatures of the opposite alignment."
}, {
    "name": "Selective Energy",
    "level": 6,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=283",
    "prerequisites": "",
    "benefits": "As you call down divine power, you can prevent some enemies from benefiting or some allies from being hurt.",
    "text": "As you call down divine power, you can prevent some enemies from benefiting or some allies from being hurt. When you cast a version of   or   that has an area, you can designate a number of creatures equal to your Charisma modifier (minimum 1) that are not targeted by the spell."
}, {
    "name": "Steady Spellcasting",
    "level": 6,
    "traits": ["Cleric", " Bard", " Druid", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
    "prerequisites": "",
    "benefits": "You don\u2019t lose spells easily",
    "text": "Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\u2019t disrupted."
}, {
    "name": "Advanced Domain",
    "level": 8,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=285",
    "prerequisites": "Domain Initiate",
    "benefits": "Your studies or prayers have unlocked deeper secrets of your deity\u2019s domain.",
    "text": "Your studies or prayers have unlocked deeper secrets of your deity\u2019s domain. You gain an advanced domain spell from one of your domains (as listed in Table 8\u20132: Domains on page 441). Increase the number of Focus Points in your focus pool by 1.  You can select this feat multiple times. Each time, you must select a different advanced domain spell from a domain for which you have an initial domain spell."
}, {
    "name": "Align Armament",
    "level": 8,
    "traits": ["Cleric", " Divine", " Evocation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=286",
    "prerequisites": "chaotic, evil, good, or lawful deity",
    "benefits": "You bring a weapon into metaphysical concordance with your deity\u2019s beliefs.",
    "text": "You bring a weapon into metaphysical concordance with your deity\u2019s beliefs. When you select this feat, choose chaotic, evil, good, or lawful. Your choice must match one of your deity\u2019s alignment components. This action has the trait corresponding to the chosen alignment component.  When you use this action, you touch a weapon. For 1 round, that weapon deals an additional 1d6 damage of the chosen type to creatures of the opposed alignment. For example, if you chose good, the weapon would deal an extra 1d6 good damage to evil creatures. If you Align an Armament again, any previously aligned armament loses its additional damage.  You can select this feat a second time, choosing your deity\u2019s other alignment component. When you Align an Armament, you can choose either alignment component."
}, {
    "name": "Channeled Succor",
    "level": 8,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=287",
    "prerequisites": "healing font",
    "benefits": "You can remove conditions with divine grace.",
    "text": "You can remove conditions with divine grace. You can sacrifice one   spell you\u2019ve prepared in your extra slots from healing font to cast one of the following spells instead:  ,  ,  , or  . The spell is heightened to the same level as the   spell you sacrificed."
}, {
    "name": "Cremate Undead",
    "level": 8,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=288",
    "prerequisites": "",
    "benefits": "Your positive energy sets undead alight.",
    "text": "Your positive energy sets undead alight. When you use a   spell to damage undead, each undead that takes damage also takes persistent fire damage equal to the spell\u2019s level."
}, {
    "name": "Emblazon Energy",
    "level": 8,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=289",
    "prerequisites": "",
    "benefits": "With elemental forces, you make your emblazoned symbols more potent.",
    "text": "With elemental forces, you make your emblazoned symbols more potent. When you Emblazon an Armament, you can choose from the following effects instead of the effects listed in that feat. These effects have the same restrictions as the base options. "
}, {
    "name": "Castigating Weapon",
    "level": 10,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=290",
    "prerequisites": "Holy Castigation",
    "benefits": "The force of your deity\u2019s castigation strengthens your body so you can strike down the wicked. ",
    "text": "The force of your deity\u2019s castigation strengthens your body so you can strike down the wicked. After you damage a fiend using a   spell, your weapon or unarmed Strikes deal extra good damage to fiends equal to half the level of the   spell until the end of your next turn. This is cumulative with any good damage the weapon already deals (such as from a holy rune)."
}, {
    "name": "Heroic Recovery",
    "level": 10,
    "traits": ["Cleric", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=291",
    "prerequisites": "healing font, good alignment",
    "benefits": "The restorative power of your healing invigorates the recipient.",
    "text": "The restorative power of your healing invigorates the recipient. If the next action you use is to cast   targeting a single living creature and the target regains Hit Points from the spell, it also gains three bonuses until the end of its next turn: a +5-foot status bonus to its Speed, a +1 status bonus to attack rolls, and a +1 status bonus to damage rolls."
}, {
    "name": "Improved Command Undead",
    "level": 10,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=292",
    "prerequisites": "harmful font, Command Undead, evil alignment",
    "benefits": "Undead creatures find it all but impossible to resist your commands.",
    "text": "Undead creatures find it all but impossible to resist your commands. When you use Command Undead, if the undead succeeds at its save but doesn\u2019t critically succeed, it is your minion for 1 round. If the undead fails its save, it is your minion for 10 minutes. If it critically fails, it is your minion for 24 hours."
}, {
    "name": "Replenishment of War",
    "level": 10,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=293",
    "prerequisites": "expert in your deity\u2019s favored weapon",
    "benefits": "Striking out against your enemies draws praise and protection from your deity.",
    "text": "Striking out against your enemies draws praise and protection from your deity. When you damage a creature with a Strike using your deity\u2019s favored weapon, you gain a number of temporary Hit Points equal to half your level, or equal to your level if the Strike was a critical hit. These temporary Hit Points last until the start of your next turn."
}, {
    "name": "Defensive Recovery",
    "level": 12,
    "traits": ["Cleric", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=294",
    "prerequisites": "harmful font or healing font",
    "benefits": "Your faith provides temporary protection in addition to healing.",
    "text": "Your faith provides temporary protection in addition to healing. If the next action you use is to cast   or   on a single target and the target regains Hit Points from the spell, it also gains a +2 status bonus to AC and saving throws for 1 round."
}, {
    "name": "Domain Focus",
    "level": 12,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=295",
    "prerequisites": "one or more domain spells",
    "benefits": "Your devotion to your deity\u2019s domains grows greater, and so does the power granted to you.",
    "text": "Your devotion to your deity\u2019s domains grows greater, and so does the power granted to you. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."
}, {
    "name": "Emblazon Antimagic",
    "level": 12,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=296",
    "prerequisites": "Emblazon Armament",
    "benefits": "Your deity\u2019s symbol protects against offensive magic.",
    "text": "Your deity\u2019s symbol protects against offensive magic. When you Emblazon an Armament, you can choose from the following effects instead of the effects listed in that feat. These effects have the same restrictions as the base options. "
}, {
    "name": "Shared Replenishment",
    "level": 12,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=297",
    "prerequisites": "Replenishment of War",
    "benefits": "When your deity blesses your warlike acts, you can extend that favor to your allies.",
    "text": "When your deity blesses your warlike acts, you can extend that favor to your allies. You can grant the temporary Hit Points from Replenishment of War to an ally within 10 feet instead of gaining them yourself. You can grant these temporary Hit Points to a different ally each time, meaning you might be able to grant them to multiple creatures in a single turn."
}, {
    "name": "Deity's Protection",
    "level": 14,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=298",
    "prerequisites": "Advanced Domain",
    "benefits": "When you call upon your deity\u2019s power to fulfill the promise of their domain, you gain divine protection.",
    "text": "When you call upon your deity\u2019s power to fulfill the promise of their domain, you gain divine protection. After you cast a domain spell, you gain resistance to all damage until the start of your next turn. The amount of resistance is equal to the level of the domain spell you cast."
}, {
    "name": "Extend Armament Alignment",
    "level": 14,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=299",
    "prerequisites": "Align Armament",
    "benefits": "The alignment you impose on a weapon lasts much longer. ",
    "text": "The alignment you impose on a weapon lasts much longer. The duration of Align Armament increases to 1 minute."
}, {
    "name": "Fast Channel",
    "level": 14,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=300",
    "prerequisites": "harmful font or healing font",
    "benefits": "Divine power is always at your fingertips, swiftly responding to your call.",
    "text": "Divine power is always at your fingertips, swiftly responding to your call. When you cast   or   by spending 2 actions, you can get the effects of the 3-action version instead of the 2-action version.  You can do this with   if you have harmful font or   if you have healing font (or both if you have Versatile Font)."
}, {
    "name": "Swift Banishment",
    "level": 14,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=301",
    "prerequisites": "",
    "benefits": "The force of your blow sends your victim back to its home plane.",
    "text": "The force of your blow sends your victim back to its home plane. You expend a   spell you have prepared, affecting the creature you critically hit without needing to cast the spell. The creature can attempt to resist the spell as normal."
}, {
    "name": "Eternal Bane",
    "level": 16,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=302",
    "prerequisites": "evil alignment",
    "benefits": "A life of evil has made you a nexus for your deity\u2019s vile power.",
    "text": "A life of evil has made you a nexus for your deity\u2019s vile power. You\u2019re continuously surrounded by a   spell with a spell level equal to half your level (rounded up). The radius is 15 feet, and you can\u2019t increase it. You can Dismiss the spell; if you do, it returns automatically after 1 minute."
}, {
    "name": "Eternal Blessing",
    "level": 16,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=303",
    "prerequisites": "good alignment",
    "benefits": "Your good deeds have brought your deity\u2019s grace to you for all of eternity.",
    "text": "Your good deeds have brought your deity\u2019s grace to you for all of eternity. You\u2019re continuously surrounded by a   spell with a spell level equal to half your level (rounded up). The radius is 15 feet, and you can\u2019t increase it. You can Dismiss the spell; if you do, it returns automatically after 1 minute."
}, {
    "name": "Resurrectionist",
    "level": 16,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=304",
    "prerequisites": "",
    "benefits": "You can cause a creature you bring back from the brink of death to thrive and continue healing.",
    "text": "You can cause a creature you bring back from the brink of death to thrive and continue healing. When you restore Hit Points to a dying creature or bring a dead creature back to life and restore Hit Points to it, you grant that creature fast healing 5 for 1 minute. This fast healing ends if the creature is knocked unconscious."
}, {
    "name": "Domain Wellspring",
    "level": 18,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=305",
    "prerequisites": "Domain Focus",
    "benefits": "The intensity of your focus grows from the investment you\u2019ve placed in your domains.",
    "text": "The intensity of your focus grows from the investment you\u2019ve placed in your domains. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."
}, {
    "name": "Echoing Channel",
    "level": 18,
    "traits": ["Cleric", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=306",
    "prerequisites": "",
    "benefits": "When you pull forth positive or negative energy, you also create a smaller pocket of that energy. ",
    "text": "When you pull forth positive or negative energy, you also create a smaller pocket of that energy. If the next action you use is to cast a 2-action   or   to heal or damage a single creature, choose one additional creature adjacent to either you or the target. Target that creature with a 1-action version of the same spell. This spell is the same level as the 2-action   or   you cast and doesn\u2019t cost another spell slot."
}, {
    "name": "Improved Swift Banishment",
    "level": 18,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=307",
    "prerequisites": "Swift Banishment",
    "benefits": "You easily banish creatures with your weapon.",
    "text": "You easily banish creatures with your weapon. You can use Swift Banishment as long as you have a spell slot of 5th level or higher remaining, even if you don\u2019t have   prepared. You must sacrifice a prepared spell of 5th level or higher, and the   effect you create is heightened to the level of that spell. Your weapon serves as the special material component of  , causing the target to take the \u20132 penalty to its save against any   you cast using Swift Banishment."
}, {
    "name": "Avatar's Audience",
    "level": 20,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=308",
    "prerequisites": "",
    "benefits": "Your extensive service has made you a lesser herald of your deity, which affords you certain privileges.",
    "text": "Your extensive service has made you a lesser herald of your deity, which affords you certain privileges. First, any creature you encounter knows instinctively that you speak for your deity. Second, if you conduct the   ritual to contact your deity, you don\u2019t have to pay any cost and you automatically get a critical success. Third, once per day, you can cast   as a divine innate spell, but only to travel to the realm of your deity. When you cast it this way, its casting time is 1 minute, your religious symbol is a sufficient tuning fork for this spell, and you appear exactly where you want to be. If you\u2019re in your deity\u2019s realm due to this spell, you can return to the point you left when you cast it by spending a single action, which has the concentrate and divine traits."
}, {
    "name": "Maker of Miracles",
    "level": 20,
    "traits": ["Cleric"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=309",
    "prerequisites": "miraculous spell",
    "benefits": "You are a conduit for truly deific power. ",
    "text": "You are a conduit for truly deific power. You gain an additional 10th-level spell slot."
}, {
    "name": "Metamagic Channel",
    "level": 20,
    "traits": ["Cleric", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=310",
    "prerequisites": "",
    "benefits": "Deep understanding of divine revelations into the nature of vital essence allows you to freely manipulate the effects of your positive or negative energy.",
    "text": "Deep understanding of divine revelations into the nature of vital essence allows you to freely manipulate the effects of your positive or negative energy. Use 1 metamagic action that you can perform that normally takes 1 action and can be applied to the   or   spell. If you use it in this way, its effects apply only to a   or   spell."
}, {
    "name": "Animal Companion",
    "level": 1,
    "traits": ["Druid", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=311",
    "prerequisites": "[Druid] animal order",
    "benefits": "You gain the service of a young animal companion that travels with you.",
    "text": "You gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See Animal Companions on page 214 for more information. : When you Hunt Prey, your animal companion gains the action\u2019s benefits and your hunter\u2019s edge benefit if you have one."
}, {
    "name": "Leshy Familiar",
    "level": 1,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=312",
    "prerequisites": "leaf order",
    "benefits": "You gain a leshy familiar, a tiny plant that embodies one of the many spirits of nature.",
    "text": "You gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature. Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars, which are detailed on page 217."
}, {
    "name": "Reach Spell",
    "level": 1,
    "traits": ["Druid", " Bard", " Cleric", " Concentrate", " Metamagic", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
    "prerequisites": "",
    "benefits": "You can extend your spells\u2019 range",
    "text": "You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."
}, {
    "name": "Storm Born",
    "level": 1,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=314",
    "prerequisites": "storm order",
    "benefits": "You are at home out in the elements, reveling in the power of nature unleashed.",
    "text": "You are at home out in the elements, reveling in the power of nature unleashed. You do not take circumstance penalties to ranged spell attacks or Perception checks caused by weather, and your targeted spells don\u2019t require a flat check to succeed against a target concealed by weather (such as fog)."
}, {
    "name": "Widen Spell",
    "level": 1,
    "traits": ["Druid", " Manipulate", " Metamagic", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=315",
    "prerequisites": "",
    "benefits": "You manipulate the energy of your spell, causing it to spread out and affect a wider area.",
    "text": "You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."
}, {
    "name": "Wild Shape",
    "level": 1,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=316",
    "prerequisites": "wild order",
    "benefits": "You are one with the wild, always changing and adapting to meet any challenge.",
    "text": "You are one with the wild, always changing and adapting to meet any challenge. You gain the   order spell, which lets you transform into a variety of forms that you can expand with druid feats."
}, {
    "name": "Call of the Wild",
    "level": 2,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=317",
    "prerequisites": "",
    "benefits": "You call upon the creatures of nature to come to your aid.",
    "text": "You call upon the creatures of nature to come to your aid. You can spend 10 minutes in concert with nature to replace one of the spells you\u2019ve prepared in one of your druid spell slots with a   or   spell of the same level."
}, {
    "name": "Enhanced Familiar",
    "level": 2,
    "traits": ["Druid", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=318",
    "prerequisites": "a familiar",
    "benefits": "You infuse your familiar with additional primal energy, increasing its abilities.",
    "text": "You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.  (Wizard) If your arcane thesis is improved familiar attunement, your familiar\u2019s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four."
}, {
    "name": "Order Explorer",
    "level": 2,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=319",
    "prerequisites": "",
    "benefits": "You have learned the secrets of another druidic order.",
    "text": "You have learned the secrets of another druidic order, passing whatever rites of initiation that order requires and gaining access to its secrets. Choose an order other than your own. You gain a 1st-level feat that lists that order as a prerequisite, and you are now a member of that order for the purpose of meeting feat prerequisites. If you commit acts anathema to your new order, you lose all feats and abilities requiring that order but retain your other druid feats and abilities. You don\u2019t gain any of the other benefits of the order you chose.  You can take this feat multiple times. Each time you do, you must choose a different order other than your own."
}, {
    "name": "Poison Resistance",
    "level": 2,
    "traits": ["Druid", " Alchemist"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=96",
    "prerequisites": "",
    "benefits": "Repeated exposure to toxic reagents has fortified your body against poisons of all kinds.",
    "text": "Your body has become fortified against toxins. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons."
}, {
    "name": "Form Control",
    "level": 4,
    "traits": ["Druid", " Manipulate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=321",
    "prerequisites": "Strength 14, Wild Shape",
    "benefits": "With additional care and effort, you can take on an alternate form for a longer period of time.",
    "text": "With additional care and effort, you can take on an alternate form for a longer period of time. If your next action is to cast  ,   spell level is 2 lower than normal (minimum 1st level), but you can remain transformed for up to 1 hour or the listed duration (whichever is longer). You can still Dismiss the form at any time, as permitted by the spell."
}, {
    "name": "Mature Animal Companion (Druid)",
    "level": 4,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=322",
    "prerequisites": "Animal Companion",
    "benefits": "Your animal companion grows up, becoming a mature animal companion, which grants it additional capabilities.",
    "text": "Your animal companion grows up, becoming a mature animal companion, which grants it additional capabilities. See the animal companion rules on page 214 for more information. Your animal companion is better trained than most. During an encounter, even if you don\u2019t use the Command an Animal action, your animal companion can still use 1 action on your turn that round to Stride or Strike."
}, {
    "name": "Order Magic",
    "level": 4,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=323",
    "prerequisites": "Order Explorer",
    "benefits": "You have delved deeper into the teaching of a new order, gaining access to a coveted order spell.",
    "text": "You have delved deeper into the teaching of a new order, gaining access to a coveted order spell. Choose an order you have selected with Order Explorer. You gain the initial order spell from that order.  You can take this feat multiple times. Each time you do, you must choose a different order you have selected with Order Explorer."
}, {
    "name": "Thousand Faces",
    "level": 4,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=324",
    "prerequisites": "Wild Shape",
    "benefits": "Your form is as mutable as the weather, changing to meet your whim.",
    "text": "Your form is as mutable as the weather, changing to meet your whim. You add the forms listed in   to your   list."
}, {
    "name": "Woodland Stride",
    "level": 4,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=325",
    "prerequisites": "leaf order",
    "benefits": "You can always find a path, almost as if foliage parted before you.",
    "text": "You can always find a path, almost as if foliage parted before you. You ignore any difficult terrain caused by plants, such as bushes, vines, and undergrowth. Even plants manipulated by magic don\u2019t impede your progress."
}, {
    "name": "Green Empathy",
    "level": 6,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=326",
    "prerequisites": "leaf order",
    "benefits": "You can communicate with plants on a basic level and use Diplomacy to Make an Impression on them and to make very simple Requests of them.",
    "text": "You can communicate with plants on a basic level and use Diplomacy to Make an Impression on them and to make very simple Requests of them. Non-creature plants typically can\u2019t fulfill most requests you might ask of them unless you have access to other magic such as speak with plants. Because of your affiliation with the leaf order, plants have a sense that you support them, so you gain a +2 circumstance bonus on your check to Make a Request of a plant using Green Empathy."
}, {
    "name": "Insect Shape",
    "level": 6,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=327",
    "prerequisites": "Wild Shape",
    "benefits": "Your understanding of life expands, allowing you to mimic a wider range of creatures.",
    "text": "Your understanding of life expands, allowing you to mimic a wider range of creatures. Add the forms in   to your   list. Whenever you use   to polymorph into the non-flying insect form listed in  , the duration is 24 hours instead of 10 minutes."
}, {
    "name": "Steady Spellcasting",
    "level": 6,
    "traits": ["Druid", " Bard", " Cleric", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
    "prerequisites": "",
    "benefits": "You don\u2019t lose spells easily",
    "text": "Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\u2019t disrupted."
}, {
    "name": "Storm Retribution",
    "level": 6,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=329",
    "prerequisites": "storm order, tempest surge order spell",
    "benefits": "You lash out, directing a burst of storming fury toward a creature that has harmed you. ",
    "text": "You lash out, directing a burst of storming fury toward a creature that has harmed you. You cast   on the triggering opponent and push that creature, moving it 5 feet away from you if it fails its Reflex save, or 10 feet if it critically fails. This movement is forced movement."
}, {
    "name": "Ferocious Shape",
    "level": 8,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=330",
    "prerequisites": "Wild Shape",
    "benefits": "You have mastered the shape of ferocious dinosaurs.",
    "text": "You have mastered the shape of ferocious dinosaurs. Add the forms listed in   to your   list. Whenever you use   to take a form that grants you a specific Athletics modifier, you gain a +1 status bonus to your Athletics checks."
}, {
    "name": "Fey Caller",
    "level": 8,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=331",
    "prerequisites": "",
    "benefits": "You have learned some of the tricks the fey use to bend primal magic toward illusions and trickery.",
    "text": "You have learned some of the tricks the fey use to bend primal magic toward illusions and trickery. Add  ,  ,  , and   to your spell list as primal spells."
}, {
    "name": "Incredible Companion (Druid)",
    "level": 8,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=332",
    "prerequisites": "Mature Animal Companion",
    "benefits": "Your animal companion continues to grow and develop.",
    "text": "Your animal companion continues to grow and develop. It becomes a nimble or savage animal companion (your choice), gaining additional capabilities determined by the type of companion (page 214)."
}, {
    "name": "Soaring Shape",
    "level": 8,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=333",
    "prerequisites": "Wild Shape",
    "benefits": "Wings free you from the shackles of the ground below.",
    "text": "Wings free you from the shackles of the ground below. Add the bat and bird forms in   to your   list. If you have  , you also add the wasp form to your   list. If you have  , you also add the pterosaur form to your   list. Whenever you use   to gain a form that grants you a specific Acrobatics modifier, you gain a +1 status bonus to Acrobatics checks."
}, {
    "name": "Wind Caller",
    "level": 8,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=334",
    "prerequisites": "storm order",
    "benefits": "You bid the winds to lift and carry you through the air.",
    "text": "You bid the winds to lift and carry you through the air. You gain the   order spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Elemental Shape",
    "level": 10,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=335",
    "prerequisites": "Wild Shape",
    "benefits": "You understand the fundamental elements of nature such that you can imbue them into your body",
    "text": "You understand the fundamental elements of nature such that you can imbue them into your body and manifest as a living embodiment of those elements. Add the forms in   to your   list. Whenever you\u2019re polymorphed into another form using  , you gain resistance 5 to fire."
}, {
    "name": "Healing Transformation",
    "level": 10,
    "traits": ["Druid", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=336",
    "prerequisites": "",
    "benefits": "You can take advantage of shapechanging magic to close wounds and patch injuries.",
    "text": "You can take advantage of shapechanging magic to close wounds and patch injuries. If your next action is to cast a non-cantrip polymorph spell that targets only one creature, your polymorph spell also restores 1d6 Hit Points per spell level to that creature. This is a healing effect."
}, {
    "name": "Overwhelming Energy",
    "level": 10,
    "traits": ["Druid", " Manipulate", " Metamagic", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=337",
    "prerequisites": "",
    "benefits": "You alter your spells to overcome resistances.",
    "text": "You alter your spells to overcome resistances. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\u2019s resistance to acid, cold, electricity, fire, or sonic damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell, such as the wall created by  . A creature\u2019s immunities are unaffected."
}, {
    "name": "Plant Shape",
    "level": 10,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=338",
    "prerequisites": "leaf order or Wild Shape",
    "benefits": "You can take the form of a plant creature.",
    "text": "You can take the form of a plant creature. Add the forms listed in   to your   list; if you don\u2019t have  , you can instead cast   once per day, heightened to the highest spell level you can cast. Whenever you\u2019re polymorphed into another form using  , you gain resistance 5 to poison."
}, {
    "name": "Side by Side (Druid)",
    "level": 10,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=339",
    "prerequisites": "Animal Companion",
    "benefits": "You and your animal companion fight in tandem, distracting your foes and keeping them off balance.",
    "text": "You and your animal companion fight in tandem, distracting your foes and keeping them off balance. Whenever you and your animal companion are adjacent to the same foe, you are both flanking that foe with each other, regardless of your actual positions."
}, {
    "name": "Dragon Shape",
    "level": 12,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=340",
    "prerequisites": "Soaring Shape",
    "benefits": "You can take on the form of some of the world\u2019s most fearsome creatures.",
    "text": "You can take on the form of some of the world\u2019s most fearsome creatures. Add the forms listed in   to your   list. Whenever you\u2019re polymorphed into another form using  , you gain resistance 5 to your choice of acid, cold, electricity, fire, or poison."
}, {
    "name": "Green Tongue",
    "level": 12,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=341",
    "prerequisites": "Green Empathy",
    "benefits": "You share a special kinship with all things green and living.",
    "text": "You share a special kinship with all things green and living. You (and your leshy familiar, if you have one) are constantly under the effects of speak with plants. Most non-creature plants recognize you as a druid of the leaf order and are friendly to you."
}, {
    "name": "Primal Focus",
    "level": 12,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=342",
    "prerequisites": "",
    "benefits": "Your connection to nature is particularly strong, and the spirits of nature flock around you, helping you replenish your focus",
    "text": "Your connection to nature is particularly strong, and the spirits of nature flock around you, helping you replenish your focus. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."
}, {
    "name": "Primal Summons",
    "level": 12,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=343",
    "prerequisites": "Call of the Wild",
    "benefits": "Whenever you summon an ally, you can empower it with the elemental power of air, earth, fire, or water. ",
    "text": "Whenever you summon an ally, you can empower it with the elemental power of air, earth, fire, or water. You gain the   order spell."
}, {
    "name": "Specialized Companion (Druid)",
    "level": 14,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=344",
    "prerequisites": "Incredible Companion",
    "benefits": "Your animal companion continues to grow in power and ability, and it is now cunning enough to become specialized.",
    "text": "Your animal companion continues to grow in power and ability, and it is now cunning enough to become specialized. Your animal companion gains one specialization of your choice. (See the Animal Companion section on page 214.)  You can select this feat up to three times. Each time, add a different specialization to your companion."
}, {
    "name": "Timeless Nature",
    "level": 14,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=345",
    "prerequisites": "",
    "benefits": "With primal magic sustaining you, you cease aging.",
    "text": "With primal magic sustaining you, you cease aging. The overflowing primal energy gives you a +2 status bonus to saves against diseases and primal magic."
}, {
    "name": "Verdant Metamorphosis",
    "level": 14,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=346",
    "prerequisites": "leaf order",
    "benefits": "You transform into a plant version of yourself. ",
    "text": "You transform into a plant version of yourself. You gain the plant trait and lose any trait that\u2019s inappropriate for your new form (typically humanoid for a PC, but also possibly animal or fungus). You can change from a form that looks mostly like your old self into a tree or any other non-creature plant as a single action, which has the concentrate trait. This has the same effect as  , except you can turn into any kind of non-creature plant and your AC is 30.  If you rest for 10 minutes while transformed into a non-creature plant during daylight hours under direct sunlight, you recover half your maximum Hit Points. If you take your daily rest in this way, the rest restores you to maximum Hit Points and removes all non-permanent drained, enfeebled, clumsy, and stupefied conditions, as well as all poisons and diseases of 19th level or lower."
}, {
    "name": "Effortless Concentration",
    "level": 16,
    "traits": ["Druid", " Bard", " Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
    "prerequisites": "",
    "benefits": "You can maintain a spell with hardly a thought.",
    "text": "You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "
}, {
    "name": "Impaling Briars",
    "level": 16,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=348",
    "prerequisites": "leaf order",
    "benefits": "You can fill an area with devastating briars that impale and impede your foes.",
    "text": "You can fill an area with devastating briars that impale and impede your foes. You gain the   order spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Monstrosity Shape",
    "level": 16,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=349",
    "prerequisites": "Wild Shape",
    "benefits": "You can transform into a powerful magical creature.",
    "text": "You can transform into a powerful magical creature. Add the purple worm and sea serpent forms listed in   to your   list. If you have  , add the phoenix form listed in   to your wild shape list."
}, {
    "name": "Invoke Disaster",
    "level": 18,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=350",
    "prerequisites": "Wind Caller",
    "benefits": "You can invoke nature\u2019s fury upon your foes.",
    "text": "You can invoke nature\u2019s fury upon your foes. You gain the   order spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Perfect Form Control",
    "level": 18,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=351",
    "prerequisites": "Form Control, Strength 18",
    "benefits": "Thanks to magic and muscle memory, you can stay in your alternate forms indefinitely.",
    "text": "Thanks to magic and muscle memory, you can stay in your alternate forms indefinitely; you may have even forgotten your original form. When you use Form Control, instead of lasting 1 hour,   is permanent until you Dismiss it."
}, {
    "name": "Primal Wellspring",
    "level": 18,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=352",
    "prerequisites": "Wild Focus",
    "benefits": "Your reservoir of Focus Points is a deep wellspring.",
    "text": "Your reservoir of Focus Points is a deep wellspring. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."
}, {
    "name": "Hierophant's Power",
    "level": 20,
    "traits": ["Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=353",
    "prerequisites": "legendary in Nature",
    "benefits": "You have entwined yourself with the natural world, and its full power flows through you.",
    "text": "You have entwined yourself with the natural world, and its full power flows through you. You gain an additional 10th-level spell slot."
}, {
    "name": "Leyline Conduit",
    "level": 20,
    "traits": ["Druid", " Concentrate", " Manipulate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=354",
    "prerequisites": "",
    "benefits": "You can cast your spells effortlessly by tapping into the leylines of the world.",
    "text": "You can cast your spells effortlessly by tapping into the leylines of the world. If your next action is to Cast a Spell of 5th level or lower that has no duration, you don\u2019t expend the prepared spell as you cast it."
}, {
    "name": "True Shapeshifter",
    "level": 20,
    "traits": ["Druid", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=355",
    "prerequisites": "Dragon Shape, Wild Shape",
    "benefits": "You transcend the limitations of form.",
    "text": "You transcend the limitations of form. While under the effects of  , you can change into any other form on your   list; if the durations of the forms would vary, use the shorter of the two durations.  Once per day, you can transform into a kaiju, with the effects of  ; if you have  , you can instead transform into a green man."
}, {
    "name": "Double Slice",
    "level": 1,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=356",
    "prerequisites": "",
    "benefits": "You lash out at your foe with both weapons. ",
    "text": "You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn\u2019t have the agile trait, it takes a \u20132 penalty.  If both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty."
}, {
    "name": "Everstand Stance",
    "level": 1,
    "traits": ["Fighter", " Champion", " Stance", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1087",
    "prerequisites": "",
    "benefits": "You brace your shield with both hands, enhancing its potential for both offense and defense",
    "text": "You brace your shield with both hands, enhancing its potential for both offense and defense. When in this stance, you wield the shield with both hands. When wielding a shield this way, increase the weapon damage die of the shield\u2019s boss or spikes by one step, and increase the shield\u2019s Hardness by 2 when using the   reaction."
}, {
    "name": "Exacting Strike",
    "level": 1,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=357",
    "prerequisites": "",
    "benefits": "You make a controlled attack, fully accounting for your momentum.",
    "text": "You make a controlled attack, fully accounting for your momentum. Make a Strike. The Strike gains the following failure effect.  This attack does not count toward your multiple attack penalty."
}, {
    "name": "Point-Blank Shot",
    "level": 1,
    "traits": ["Fighter", " Open", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=358",
    "prerequisites": "",
    "benefits": "You take aim to pick off nearby enemies quickly.",
    "text": "You take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don\u2019t take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn\u2019t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon\u2019s first range increment."
}, {
    "name": "Power Attack",
    "level": 1,
    "traits": ["Fighter", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=359",
    "prerequisites": "",
    "benefits": "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady.",
    "text": "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you\u2019re at least 10th level, increase this to two extra dice, and if you\u2019re at least 18th level, increase it to three extra dice."
}, {
    "name": "Reactive Shield",
    "level": 1,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=360",
    "prerequisites": "",
    "benefits": "You can snap your shield into place just as you would take a blow, avoiding the hit at the last second.",
    "text": "You can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the Raise a Shield action and gain your shield\u2019s bonus to AC. The circumstance bonus from the shield applies to your AC when you\u2019re determining the outcome of the triggering attack."
}, {
    "name": "Snagging Strike",
    "level": 1,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=361",
    "prerequisites": "",
    "benefits": "You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach.",
    "text": "You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a Strike while keeping one hand free. If this Strike hits, the target is flat-footed until the start of your next turn or until it\u2019s no longer within the reach of your hand, whichever comes first."
}, {
    "name": "Sudden Charge",
    "level": 1,
    "traits": ["Fighter", " Barbarian", " Flourish", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=134",
    "prerequisites": "",
    "benefits": "With a quick sprint, you dash up to your foe and swing.",
    "text": "With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Aggressive Block",
    "level": 2,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=363",
    "prerequisites": "",
    "benefits": "You push back as you block the attack, knocking your foe away or off balance.",
    "text": "You push back as you block the attack, knocking your foe away or off balance. You use your shield to push the triggering creature, either automatically Shoving it 5 feet or causing it to become flat-footed until the start of your next turn. The triggering creature chooses whether to be moved or become flat-footed. If it chooses to be moved, you choose the direction. If the Shove would cause it to hit a solid object, enter a square of difficult terrain, or enter another creature\u2019s space, it must become flat-footed instead of being moved."
}, {
    "name": "Assisting Shot",
    "level": 2,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=364",
    "prerequisites": "",
    "benefits": "With a quick shot, you interfere with a foe in combat.",
    "text": "With a quick shot, you interfere with a foe in combat. You can use the Aid action with a ranged weapon you wield. Instead of being within reach of the target, you must be within maximum range of the target. An Assisting Shot uses ammunition and incurs penalties just like any other attack."
}, {
    "name": "Brutish Shove",
    "level": 2,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=365",
    "prerequisites": "",
    "benefits": "Throwing your weight behind your attack, you hit you opponent hard enough to make it stumble back.",
    "text": "Throwing your weight behind your attack, you hit your opponent hard enough to make it stumble back. Make a Strike with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is flat-footed until the end of your current turn, and you can automatically Shove it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn\u2019t trigger reactions.  This Strike has the following failure effect.   The target becomes flat-footed until the end of your current turn."
}, {
    "name": "Combat Grab",
    "level": 2,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=366",
    "prerequisites": "",
    "benefits": "You swipe at your opponent and grab at them.",
    "text": "You swipe at your opponent and grab at them. Make a melee Strike while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains grabbed until the end of your next turn or until it Escapes, whichever comes first."
}, {
    "name": "Dueling Parry",
    "level": 2,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=367",
    "prerequisites": "",
    "benefits": "You can parry attacks against you with your one-handed weapon.",
    "text": "You can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to AC until the start of your next turn as long as you continue to meet the requirements."
}, {
    "name": "Intimidating Strike",
    "level": 2,
    "traits": ["Fighter", " Emotion", " Fear", " Mental"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=368",
    "prerequisites": "",
    "benefits": "Your blow not only wounds creatures but also shatters their confidence.",
    "text": "Your blow not only wounds creatures but also shatters their confidence. Make a melee Strike. If you hit and deal damage, the target is frightened 1, or frightened 2 on a critical hit."
}, {
    "name": "Lunge",
    "level": 2,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=369",
    "prerequisites": "",
    "benefits": "Extending your body to its limits, you attack an enemy that would normally be beyond your reach.",
    "text": "Extending your body to its limits, you attack an enemy that would normally be beyond your reach. Make a Strike with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike."
}, {
    "name": "Double Shot",
    "level": 4,
    "traits": ["Fighter", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=370",
    "prerequisites": "",
    "benefits": "You shoot twice in blindingly fast succession.",
    "text": "You shoot twice in blindingly fast succession. Make two Strikes, each against a separate target and with a \u20132 penalty. Both attacks count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you\u2019ve made both of them."
}, {
    "name": "Dual-Handed Assault",
    "level": 4,
    "traits": ["Fighter", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=371",
    "prerequisites": "",
    "benefits": "You snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. ",
    "text": "You snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. Make a Strike with the required weapon. You quickly switch your grip during the Strike in order to make the attack with two hands. If the weapon doesn\u2019t normally have the two-hand trait, increase its weapon damage die by one step for this attack. (Rules on increasing die size appear on page 279.) If the weapon has the two-hand trait, you gain the benefit of that trait and a circumstance bonus to damage equal to the weapon\u2019s number of damage dice. When the Strike is complete, you resume gripping the weapon with only one hand. This action doesn\u2019t end any stance or fighter feat effect that requires you to have one hand free."
}, {
    "name": "Everstand Strike",
    "level": 4,
    "traits": ["Fighter", " Champion", " Press", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1088",
    "prerequisites": "Everstand Stance ",
    "benefits": "Your follow-up blow leaves you an opening to set your shield",
    "text": "Your follow-up blow leaves you an opening to set your shield. Make a Strike with the wielded shield. If the Strike hits and deals damage, you also  ."
}, {
    "name": "Knockdown",
    "level": 4,
    "traits": ["Fighter", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=372",
    "prerequisites": "trained in Athletics",
    "benefits": "You make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. ",
    "text": "You make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. Make a melee Strike. If it hits and deals damage, you can attempt an Athletics check to Trip the creature you hit. If you\u2019re wielding a two-handed melee weapon, you can ignore Trip\u2019s requirement that you have a hand free. Both attacks count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you\u2019ve made both of them."
}, {
    "name": "Powerful Shove",
    "level": 4,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=373",
    "prerequisites": "Aggressive Block or Brutish Shove",
    "benefits": "You can push larger foes around with your attack.",
    "text": "You can push larger foes around with your attack. You can use Aggressive Block or Brutish Shove against a creature up to two sizes larger than you.  When a creature you Shove has to stop moving because it would hit an object, it takes damage equal to your Strength modifier (minimum 1). This happens regardless of how you Shoved the creature."
}, {
    "name": "Quick Reversal",
    "level": 4,
    "traits": ["Fighter", " Flourish", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=374",
    "prerequisites": "",
    "benefits": "You turn your foes\u2019 flanking against them with a quick reverse.",
    "text": "You turn your foes\u2019 flanking against them with a quick reverse. Make a melee Strike against one of the flanking enemies and make a second Strike with the same weapon or unarmed attack against a different enemy that is flanking you. This second Strike has the same multiple attack penalty of the initial attack and doesn\u2019t count toward your multiple attack penalty."
}, {
    "name": "Shielded Stride",
    "level": 4,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=375",
    "prerequisites": "",
    "benefits": "When your shield is up, your enemies\u2019 blows can\u2019t touch\u00a0you.",
    "text": "When your shield is up, your enemies\u2019 blows can\u2019t touch you. hen you have your shield raised, you can Stride to move half your Speed without triggering reactions that are triggered by your movement (such as Attacks of Opportunity). You can use Shielded Stride while Flying or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Swipe",
    "level": 4,
    "traits": ["Fighter", " Barbarian", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=142",
    "prerequisites": "",
    "benefits": "You make a wide, arcing swing. ",
    "text": "You make a wide, arcing swing. Make a single melee Strike and compare the attack roll result to the ACs of up to two foes, each of whom must be within your melee reach and adjacent to the other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty. If you\u2019re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks."
}, {
    "name": "Twin Parry",
    "level": 4,
    "traits": ["Fighter", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=377",
    "prerequisites": "",
    "benefits": "You use your two weapons to parry attacks.",
    "text": "You use your two weapons to parry attacks. You gain a +1 circumstance bonus to AC until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat\u2019s requirement."
}, {
    "name": "Advanced Weapon Training",
    "level": 6,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=378",
    "prerequisites": "",
    "benefits": "You\u2019ve studied the art of wielding an advanced weapon.",
    "text": "You\u2019ve studied the art of wielding an advanced weapon. Choose a weapon group. You gain proficiency with all advanced weapons in that group as if they were martial weapons of their weapon group."
}, {
    "name": "Advantageous Assault",
    "level": 6,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=379",
    "prerequisites": "",
    "benefits": "When an enemy\u2019s movement is compromised, you deliver a more deadly blow.",
    "text": "When an enemy\u2019s movement is compromised, you deliver a more deadly blow. Make a Strike against a creature that is grabbed, prone, or restrained. You gain a circumstance bonus to damage on this Strike equal to the number of weapon damage dice, or that number + 2 if you\u2019re wielding the weapon in two hands. The Strike gains the following failure effect.   You deal damage to the target equal to the number of weapon damage dice, or that number + 2 if you\u2019re wielding the weapon in two hands. This damage has the same damage type as the weapon."
}, {
    "name": "Disarming Stance",
    "level": 6,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=380",
    "prerequisites": "trained in Athletics",
    "benefits": "You adopt a fencing stance that improves your control over your weapon.",
    "text": "You adopt a fencing stance that improves your control over your weapon. While you are in this stance, you gain a +1 circumstance bonus to Athletics checks to Disarm and a +2 circumstance bonus to your Reflex DC when defending against checks to Disarm you. In addition, you can attempt to Disarm creatures up to two sizes larger than you."
}, {
    "name": "Furious Focus",
    "level": 6,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=381",
    "prerequisites": "Power Attack",
    "benefits": "You\u2019ve learned to maintain your balance even when swinging furiously. ",
    "text": "You\u2019ve learned to maintain your balance even when swinging furiously. When you make a Power Attack with a melee weapon you\u2019re wielding in two hands, it counts as one attack toward your multiple attack penalty instead of two."
}, {
    "name": "Guardian's Deflection",
    "level": 6,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=382",
    "prerequisites": "",
    "benefits": "You use your weapon to deflect the attack against your ally.",
    "text": "You use your weapon to deflect the attack against your ally, granting a +2 circumstance bonus to their Armor Class against the triggering attack. This turns the triggering critical hit into a hit, or the triggering hit into a miss."
}, {
    "name": "Reflexive Shield",
    "level": 6,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=383",
    "prerequisites": "",
    "benefits": "You can use your shield to fend off the worst of area effects and other damage.",
    "text": "You can use your shield to fend off the worst of area effects and other damage. When you Raise your Shield, you gain your shield\u2019s circumstance bonus to Reflex saves. If you have the Shield Block reaction, damage you take as a result of a Reflex save can trigger that reaction, even if the damage isn\u2019t physical damage."
}, {
    "name": "Revealing Stab",
    "level": 6,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=384",
    "prerequisites": "",
    "benefits": "You drive your piercing weapon into an imperceptible foe, revealing its location to your allies.",
    "text": "You drive your piercing weapon into an imperceptible foe, revealing its location to your allies. Make a Strike with the required melee weapon. You don\u2019t have to attempt a flat check to hit a concealed creature, and you have to succeed at only a DC 5 flat check to target a hidden creature. If you hit and deal damage, you can drive the required weapon into a corporeal target, revealing its current position. You Release the weapon, and it becomes lodged in the target. If the target is concealed, other creatures don\u2019t need to succeed at a flat check to hit it. If the target is hidden, other creatures have to succeed at only a DC 5 flat check to target it. The creatures need to be able to see your weapon to gain any of these benefits, and the target can\u2019t become undetected to anyone who sees your weapon. If the target is invisible, the weapon remains visible while lodged in it.  This benefit lasts until the weapon is removed from the creature. An adjacent creature or the target can remove the weapon with 2 Interact actions."
}, {
    "name": "Shatter Defenses",
    "level": 6,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=385",
    "prerequisites": "",
    "benefits": "Your offense exploits your enemy\u2019s fear. Make a melee Strike against a frightened creature. ",
    "text": "Your offense exploits your enemy\u2019s fear. Make a melee Strike against a frightened creature. If you hit and deal damage, the target becomes flat-footed until its frightened condition ends. If the target was already flat-footed to you when you damaged it with this Strike, it can\u2019t reduce its frightened value below 1 until the start of your next turn."
}, {
    "name": "Shield Warden",
    "level": 6,
    "traits": ["Fighter", " Champion"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=229",
    "prerequisites": "[Champion] divine ally (shield), tenets of good; [Fighter] shield block",
    "benefits": "You use your shield to protect your allies as well as yourself.",
    "text": "You use your shield to protect your allies. When you have a shield raised, you can use your Shield Block reaction when an attack is made against an ally adjacent to you. If you do, the shield prevents that ally from taking damage instead of preventing you from taking damage, following the normal rules for Shield Block."
}, {
    "name": "Triple Shot",
    "level": 6,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=387",
    "prerequisites": "Double Shot",
    "benefits": "You can quickly fire multiple shots with greater control.",
    "text": "You can quickly fire multiple shots with greater control. When you use Double Shot, you can make the attacks against the same target. You can add an additional action to Double Shot to make three ranged Strikes instead of two. If you do, the penalty is \u20134. All attacks count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you\u2019ve made all of them."
}, {
    "name": "Blind-Fight",
    "level": 8,
    "traits": ["Fighter", " Ranger", " Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=388",
    "prerequisites": "master in Perception",
    "benefits": "Your battle instincts make you more aware of concealed and invisible opponents.",
    "text": "Your battle instincts make you more aware of concealed and invisible opponents. You don\u2019t need to succeed at a flat check to target concealed creatures. You\u2019re not flat-footed to creatures that are hidden from you (unless you\u2019re flat-footed to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.  While you\u2019re adjacent to an undetected creature of your level or lower, it is instead only hidden from you."
}, {
    "name": "Dueling Riposte",
    "level": 8,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=389",
    "prerequisites": "Dueling Parry",
    "benefits": "You riposte against your flailing enemy. ",
    "text": "You riposte against your flailing enemy. Make a melee Strike against or attempt to Disarm the triggering creature."
}, {
    "name": "Felling Strike",
    "level": 8,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=390",
    "prerequisites": "",
    "benefits": "Your attack can ground an airborne foe.",
    "text": "Your attack can ground an airborne foe. Make a Strike. If it hits and deals damage to a flying target, the target falls up to 120 feet. The fall is gradual enough that if it causes the target to hit the ground, the target takes no damage from the fall. If the attack is a critical hit, the target can\u2019t Fly, Leap, levitate, or otherwise leave the ground until the end of your next turn."
}, {
    "name": "Impassable Wall Stance",
    "level": 8,
    "traits": ["Fighter", " Champion", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=1091",
    "prerequisites": "Attack of Opportunity",
    "benefits": "You refuse to let foes past your guard",
    "text": "You refuse to let foes past your guard. As long as you are in this stance, when you critically hit with an Attack of Opportunity triggered by a move action, you disrupt that move action."
}, {
    "name": "Incredible Aim",
    "level": 8,
    "traits": ["Fighter", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=391",
    "prerequisites": "",
    "benefits": "By spending a moment to focus, you can ensure your attack strikes true. ",
    "text": "By spending a moment to focus, you can ensure your attack strikes true. Make a ranged weapon Strike. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore the target\u2019s concealed condition."
}, {
    "name": "Mobile Shot Stance",
    "level": 8,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=392",
    "prerequisites": "",
    "benefits": "Your shots become nimble and deadly.",
    "text": "Your shots become nimble and deadly. While you\u2019re in this stance, your ranged Strikes don\u2019t trigger Attacks of Opportunity or other reactions that are triggered by a ranged attack. If you have Attack of Opportunity, you can use it with a loaded ranged weapon you\u2019re wielding. The triggering creature must be within 5 feet of you for you to do so."
}, {
    "name": "Positioning Assault",
    "level": 8,
    "traits": ["Fighter", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=393",
    "prerequisites": "",
    "benefits": "With punishing blows, you force your opponent into position.",
    "text": "With punishing blows, you force your opponent into position. Make a Strike with the required weapon. If you hit, you move the target 5 feet into a space in your reach. This follows the forced movement rules found on page 475."
}, {
    "name": "Quick Shield Block",
    "level": 8,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=394",
    "prerequisites": "shield block, Reactive Shield",
    "benefits": "You can bring your shield into place with hardly a thought.",
    "text": "You can bring your shield into place with hardly a thought. At the start of each of your turns, you gain an additional reaction that you can use only to Shield Block."
}, {
    "name": "Sudden Leap",
    "level": 8,
    "traits": ["Fighter", " Barbarian"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=155",
    "prerequisites": "",
    "benefits": "You swing at a foe while mid-leap.",
    "text": "You make an impressive leap and swing while you soar. Make a Leap, High Jump, or Long Jump and attempt one melee Strike at any point during your jump. Immediately after the Strike, you fall to the ground if you\u2019re in the air, even if you haven\u2019t reached the maximum distance of your jump. If the distance you fall is no more than the height of your jump, you take no damage and land upright.  When attempting a High Jump or Long Jump during a Sudden Leap, determine the DC using the Long Jump DCs, and increase your maximum distance to double your Speed.  If you have  , you can spend 3 actions to make a Sudden Leap and use Felling Strike instead of a normal Strike."
}, {
    "name": "Agile Grace",
    "level": 10,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=396",
    "prerequisites": "",
    "benefits": "Your graceful moves with agile weapons are beyond compare.",
    "text": "Your graceful moves with agile weapons are beyond compare. Your multiple attack penalty with agile weapons and agile unarmed attacks becomes \u20133 for your second attack and \u20136 for subsequent attacks (rather than \u20134 and \u20138)."
}, {
    "name": "Certain Strike",
    "level": 10,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=397",
    "prerequisites": "",
    "benefits": "Even when you don\u2019t hit squarely, you can still score a glancing blow.",
    "text": "Even when you don\u2019t hit squarely, you can still score a glancing blow. Make a melee Strike. It gains the following failure effect. Failure Your attack deals any damage it would have dealt on a hit, excluding all damage dice. (This removes damage dice from weapon runes, spells, and special abilities, in addition to weapon damage dice.)  Your attack deals any damage it would have dealt on a hit, excluding all damage dice. (This removes damage dice from weapon runes, spells, and special abilities, in addition to weapon damage dice.)"
}, {
    "name": "Combat Reflexes",
    "level": 10,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=398",
    "prerequisites": "",
    "benefits": "You are particularly swift at punishing foes who leave you openings. ",
    "text": "You are particularly swift at punishing foes who leave you openings. At the start of each of your turns when you regain your actions, you gain an additional reaction that can be used only to make an Attack of Opportunity."
}, {
    "name": "Debilitating Shot",
    "level": 10,
    "traits": ["Fighter", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=399",
    "prerequisites": "",
    "benefits": "Aiming for a weak point, you impede your foe with a precise shot.",
    "text": "Aiming for a weak point, you impede your foe with a precise shot. Make a ranged weapon Strike. If it hits and deals damage, the target is slowed 1 until the end of its next turn."
}, {
    "name": "Disarming Twist",
    "level": 10,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=400",
    "prerequisites": "trained in Athletics",
    "benefits": "After your initial attack redirects your foe\u2019s defenses, your follow-up wrests their weapon from their grasp.",
    "text": "After your initial attack redirects your foe\u2019s defenses, your follow-up wrests their weapon from their grasp. Make a melee Strike with the required weapon. In addition to its other effects, this Strike gains the success and critical success effects of the Disarm action. The Strike also has the following failure effect.  The target is flat-footed until the end of your current turn."
}, {
    "name": "Disruptive Stance",
    "level": 10,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=401",
    "prerequisites": "",
    "benefits": "The slightest distraction can provoke your wrath, and you\u2019re prepared to foil enemies\u2019 actions. ",
    "text": "The slightest distraction can provoke your wrath, and you\u2019re prepared to foil enemies\u2019 actions. As long as you are in this stance, you can use Attack of Opportunity when a creature within your reach uses a concentrate action, in addition to manipulate and move actions. Furthermore, you disrupt a triggering concentrate or manipulate action if your Strike hits (not only if it\u2019s a critical hit)."
}, {
    "name": "Fearsome Brute",
    "level": 10,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=402",
    "prerequisites": "",
    "benefits": "Fear makes your foes weak and more vulnerable to your attacks.",
    "text": "Fear makes your foes weak and more vulnerable to your attacks. You gain a circumstance bonus to damage rolls for Strikes against frightened creatures. The bonus is equal to double the target\u2019s frightened value.  If you have master proficiency in Intimidation, increase the bonus to triple the target\u2019s frightened value."
}, {
    "name": "Improved Knockdown",
    "level": 10,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=403",
    "prerequisites": "Knockdown",
    "benefits": "You can dash your foe to the ground with a single blow.",
    "text": "You can dash your foe to the ground with a single blow. When you use Knockdown, instead of making a Strike followed by a Trip, you can attempt a single Strike. If you do and your Strike hits, you also apply the critical success effect of a Trip. If you used a two-handed melee weapon for the Strike, you can use the weapon\u2019s damage die size instead of the regular die size for the damage from a critical Trip."
}, {
    "name": "Mirror Shield",
    "level": 10,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=404",
    "prerequisites": "",
    "benefits": "You reflect the spell back against the triggering opponent.",
    "text": "You reflect the spell back against the triggering opponent. Make a ranged attack against the triggering creature using your highest proficiency with a ranged weapon. If you can cast spells, you can make a spell attack roll instead. If you succeed, your opponent takes the effects of a successful spell attack roll for their own spell (or the effects of a critical success if your attack roll was a critical success)."
}, {
    "name": "Twin Riposte",
    "level": 10,
    "traits": ["Fighter", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=523",
    "prerequisites": "",
    "benefits": "A clever parry with one weapon leaves your opponent open to an attack with the other weapon. ",
    "text": "A clever parry with one weapon leaves your opponent open to an attack with the other weapon. Make a melee Strike or use a Disarm action against the triggering opponent."
}, {
    "name": "Brutal Finish",
    "level": 12,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=406",
    "prerequisites": "",
    "benefits": "Your final blow can make an impact even if it rebounds off a foe\u2019s defenses. ",
    "text": "Your final blow can make an impact even if it rebounds off a foe\u2019s defenses. Make a Strike with the required weapon. After the Strike, your turn ends. The Strike deals one extra weapon damage die, or two extra weapon damage dice if you\u2019re at least 18th level. The Strike also gains the following failure effect.  You deal damage equal to one weapon damage die of the required weapon. Increase this to two dice if you\u2019re at least 18th level."
}, {
    "name": "Dueling Dance",
    "level": 12,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=407",
    "prerequisites": "Dueling Parry",
    "benefits": "Using your free hand as pivot and balance, you both attack and defend with your weapon.",
    "text": "Using your free hand as pivot and balance, you both attack and defend with your weapon. While you are in this stance, you constantly have the benefits of Dueling Parry."
}, {
    "name": "Flinging Shove",
    "level": 12,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=408",
    "prerequisites": "Aggressive Block or Brutish Shove",
    "benefits": "Your opponets go even farther when push them around.",
    "text": "Increase the distance you Shove your opponent with Aggressive Block or Brutish Shove to 10 feet on a success or 20 feet on a critical success. When you use Aggressive Block, you can choose whether the target is flat-footed or Shoved. When you make a Brutish Shove, you also Shove the target 5 feet on a failure."
}, {
    "name": "Improved Dueling Riposte",
    "level": 12,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=409",
    "prerequisites": "Dueling Riposte",
    "benefits": "Your weapon whirls and darts, striking foes whenever the opportunity presents itself.",
    "text": "Your weapon whirls and darts, striking foes whenever the opportunity presents itself. At the start of each of your turns, you gain an additional reaction that you can use only to make a Dueling Riposte. You can use this extra reaction even if you are not benefiting from Dueling Parry."
}, {
    "name": "Incredible Ricochet",
    "level": 12,
    "traits": ["Fighter", " Concentrate", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=410",
    "prerequisites": "Incredible Aim",
    "benefits": "After your first shot singles out your opponent\u2019s position, you direct another that ricochets around obstacles and strikes unerringly.",
    "text": "After your first shot singles out your opponent\u2019s position, you direct another that ricochets around obstacles and strikes unerringly. Make a ranged weapon Strike. You ignore the target\u2019s concealed condition and all cover."
}, {
    "name": "Lunging Stance",
    "level": 12,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=411",
    "prerequisites": "attack of opportunity, Lunge",
    "benefits": "Your body coiled to strike, you can lash out at distant enemies.",
    "text": "Your body coiled to strike, you can lash out at distant enemies. While you are in this stance, you can use Attack of Opportunity against a creature that is outside your reach but within the reach you would have with a Lunge. If you do, you increase your range with the Strike by 5 feet."
}, {
    "name": "Paragon's Guard",
    "level": 12,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=412",
    "prerequisites": "",
    "benefits": "Once you\u2019ve had a moment to set your stance, you always have your shield ready without a thought.",
    "text": "Once you\u2019ve had a moment to set your stance, you always have your shield ready without a thought. While you are in this stance, you constantly have your shield raised as if you\u2019d used the Raise a Shield action, as long as you meet that action\u2019s requirements."
}, {
    "name": "Spring Attack",
    "level": 12,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=413",
    "prerequisites": "",
    "benefits": "Springing away from one foe, you Strike at another.",
    "text": "Springing away from one foe, you Strike at another. Stride up to your Speed, but you must end that movement within melee reach of a different enemy. At the end of your movement, make a melee Strike against an enemy now within reach. You can use Spring Attack while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Desperate Finisher",
    "level": 14,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=414",
    "prerequisites": "",
    "benefits": "You throw everything into one last press.",
    "text": "You throw everything into one last press. Use a single action that you know with the press trait as part of Desperate Finisher. You forgo the ability to use reactions until the start of your next turn."
}, {
    "name": "Determination",
    "level": 14,
    "traits": ["Fighter", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=415",
    "prerequisites": "",
    "benefits": "Your training allows you to shrug off your foes\u2019 spells and conditions when the need is dire.",
    "text": "Your training allows you to shrug off your foes\u2019 spells and conditions when the need is dire. Choose a single nonpermanent spell or condition that is affecting you. If you chose a condition, its effect on you ends. If you chose a spell, attempt to counteract the spell (your level is your counteract level, and you attempt a Will save as your counteract check).  This doesn\u2019t remove any Hit Point damage normally dealt by the spell or condition, and it doesn\u2019t prevent the spell or debilitating effect from affecting other allies or the environment around you. It can\u2019t remove an ongoing affliction or prevent such an affliction from inflicting conditions on you later. It can\u2019t remove conditions from the situation (such as prone or flanked). If the effect comes from a creature, hazard, or item of 20th level or higher, Determination can\u2019t remove its effect on you."
}, {
    "name": "Guiding Finish",
    "level": 14,
    "traits": ["Fighter", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=416",
    "prerequisites": "",
    "benefits": "Using your weapon as a lever, you force your opponent to end up right where you want them.",
    "text": "Using your weapon as a lever, you force your opponent to end up right where you want them. Make a Strike with the required weapon. If the Strike hits, you can move the target up to 10 feet into a space in your reach. You can move the target through your space during this movement. This follows the forced movement rules found on page 475. Your Strike gains the following failure effect.  You can force the creature to move as you would on a success, but you can move the target only 5 feet."
}, {
    "name": "Guiding Riposte",
    "level": 14,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=417",
    "prerequisites": "Dueling Riposte",
    "benefits": "By shifting your weight and angling your weapon, you guide your opponent to a more favorable position.",
    "text": "By shifting your weight and angling your weapon, you guide your opponent to a more favorable position. When you use Dueling Riposte to Strike and you hit, you can move the target up to 10 feet into a space in your reach. This follows the forced movement rules found on page 475."
}, {
    "name": "Improved Twin Riposte (Fighter)",
    "level": 14,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=418",
    "prerequisites": "Twin Riposte",
    "benefits": "Your weapons are a blur, blocking and biting at your foes.",
    "text": "Your weapons are a blur, blocking and biting at your foes. At the start of each of your turns, you gain an additional reaction that you can use only to perform a Twin Riposte. You can use this extra reaction even if you are not benefiting from Twin Parry."
}, {
    "name": "Stance Savant (Fighter)",
    "level": 14,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=419",
    "prerequisites": "",
    "benefits": "When there\u2019s imminent danger, you drop into a stance with a mere thought.",
    "text": "When there\u2019s imminent danger, you drop into a stance with a mere thought. Use an action that has the stance trait."
}, {
    "name": "Two-Weapon Flurry",
    "level": 14,
    "traits": ["Fighter", " Flourish", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=420",
    "prerequisites": "",
    "benefits": "You lash out with both your weapons in a sudden frenzy.",
    "text": "You lash out with both your weapons in a sudden frenzy. Strike twice, once with each weapon."
}, {
    "name": "Whirlwind Strike",
    "level": 14,
    "traits": ["Fighter", " Barbarian", " Flourish", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=170",
    "prerequisites": "",
    "benefits": "You attack all nearby adversaries.",
    "text": "You attack all nearby adversaries. Make a melee Strike against each enemy within your melee reach. Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks."
}, {
    "name": "Graceful Poise",
    "level": 16,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=422",
    "prerequisites": "Double Slice",
    "benefits": "With the right positioning, your off-hand weapon can strike like a scorpion\u2019s stinger.",
    "text": "With the right positioning, your off-hand weapon can strike like a scorpion\u2019s stinger. While you are in this stance, if you make your second Strike from Double Slice with an agile weapon, Double Slice counts as one attack when calculating your multiple attack penalty."
}, {
    "name": "Improved Reflexive Shield",
    "level": 16,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=423",
    "prerequisites": "Reflexive Shield",
    "benefits": "Your shield can help save nearby allies.",
    "text": "Your shield can help save nearby allies. When you use Shield Block against damage resulting from a Reflex save, adjacent allies who would take damage due to Reflex saves against the same effect also benefit from the damage reduction."
}, {
    "name": "Multishot Stance",
    "level": 16,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=424",
    "prerequisites": "Triple Shot",
    "benefits": "You lock yourself in a stable position so you can fire swiftly and accurately.",
    "text": "You lock yourself in a stable position so you can fire swiftly and accurately. While you are in this stance, your penalty for Double Shot is reduced to \u20131, or \u20132 if you add the extra action to make three Strikes. If you move from your position, this stance ends."
}, {
    "name": "Twinned Defense",
    "level": 16,
    "traits": ["Fighter", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=425",
    "prerequisites": "Twin Parry",
    "benefits": "You\u2019re always ready to use your off-hand weapon to interfere with attacks against you. ",
    "text": "You\u2019re always ready to use your off-hand weapon to interfere with attacks against you. While you are in this stance, you constantly gain the benefits of the Twin Parry action."
}, {
    "name": "Impossible Volley",
    "level": 18,
    "traits": ["Fighter", " Flourish", " Open", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=426",
    "prerequisites": "",
    "benefits": "You fire a volley at all foes in an area.",
    "text": "You fire a volley at all foes in an area. Make one Strike with a \u20132 penalty against each enemy within a 10-foot-radius burst centered at or beyond your weapon\u2019s volley range. Roll the damage only once for all targets.  Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks.  When taken as a Fighter feat, this feat has the   and   traits."
}, {
    "name": "Savage Critical",
    "level": 18,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=427",
    "prerequisites": "",
    "benefits": "The wounds you inflict are grievous.",
    "text": "The wounds you inflict are grievous. When you Strike with a weapon or unarmed attack for which you have legendary proficiency, you critically succeed if you roll a 19 on the die as long as that result is a success. This has no effect on a 19 if the result would be a failure."
}, {
    "name": "Boundless Reprisals",
    "level": 20,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=428",
    "prerequisites": "",
    "benefits": "With a sixth sense for the flow of combat, you can quickly react to any situation as required.",
    "text": "With a sixth sense for the flow of combat, you can quickly react to any situation as required. At the start of each enemy\u2019s turn, you gain a reaction you can use only during that turn."
}, {
    "name": "Weapon Supremacy",
    "level": 20,
    "traits": ["Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=429",
    "prerequisites": "",
    "benefits": "Your skill with weapons lets you attack swiftly at all times.",
    "text": "Your skill with weapons lets you attack swiftly at all times. You\u2019re permanently quickened. You can use your extra action only to Strike."
}, {
    "name": "Crane Stance",
    "level": 1,
    "traits": ["Monk", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=430",
    "prerequisites": "",
    "benefits": "You enter the stance of a crane, holding your arms in an imitation of a crane\u2019s wings.",
    "text": "You enter the stance of a crane, holding your arms in an imitation of a crane\u2019s wings and using flowing, defensive motions. You gain a +1 circumstance bonus to AC, but the only Strikes you can make are crane wing attacks. These deal 1d6 bludgeoning damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.  While in Crane Stance, reduce the DC for High Jump and Long Jump by 5, and when you Leap, you can move an additional 5 feet horizontally or 2 feet vertically."
}, {
    "name": "Dragon Stance",
    "level": 1,
    "traits": ["Monk", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=431",
    "prerequisites": "",
    "benefits": "You enter the stance of a dragon and make powerful leg strikes like a lashing dragon\u2019s tail.",
    "text": "You enter the stance of a dragon and make powerful leg strikes like a lashing dragon\u2019s tail. You can make dragon tail attacks that deal 1d10 bludgeoning damage. They are in the brawling group and have the backswing, nonlethal, and unarmed traits.  While in Dragon Stance, you can ignore the first square of difficult terrain while Striding."
}, {
    "name": "Ki Rush",
    "level": 1,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=432",
    "prerequisites": "",
    "benefits": "You can use ki to move with extraordinary speed and make yourself harder to hit.",
    "text": "You can use ki to move with extraordinary speed and make yourself harder to hit. You gain the   ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar on page 157, and the full rules for focus spells appear on page 300."
}, {
    "name": "Ki Strike",
    "level": 1,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=433",
    "prerequisites": "",
    "benefits": "Your study of the flow of mystical energy allows you to harness it into your physical strikes.",
    "text": "Your study of the flow of mystical energy allows you to harness it into your physical strikes. You gain the   ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar on page 157, and the full rules for focus spells appear on page 300."
}, {
    "name": "Monastic Weaponry",
    "level": 1,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=434",
    "prerequisites": "",
    "benefits": "You have trained with the traditional weaponry of your monastery or school.",
    "text": "You have trained with the traditional weaponry of your monastery or school. You gain access to uncommon weapons that have the monk trait and become trained in simple and martial monk weapons. When your proficiency rank for unarmed attacks increases to expert or master, your proficiency rank for these weapons increases to expert or master as well.  You can use melee monk weapons with any of your monk feats or monk abilities that normally require unarmed attacks, though not if the feat or ability requires you to use a single specific type of attack, such as Crane Stance."
}, {
    "name": "Mountain Stance",
    "level": 1,
    "traits": ["Monk", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=435",
    "prerequisites": "",
    "benefits": "You enter the stance of an implacable mountain allowing you to strike with the weight of an avalanche.",
    "text": "You enter the stance of an implacable mountain\u2014a technique first discovered by dwarven monks\u2014allowing you to strike with the weight of an avalanche. The only Strikes you can make are falling stone unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the forceful, nonlethal, and unarmed traits.  While in Mountain Stance, you gain a +4 status bonus to AC and a +2 circumstance bonus to any defenses against being Shoved or Tripped. However, you have a Dexterity modifier cap to your AC of +0, meaning you don\u2019t add your Dexterity to your AC, and your Speeds are all reduced by 5 feet."
}, {
    "name": "Rain of Embers Stance",
    "level": 1,
    "traits": ["Monk", " Rare", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=936",
    "prerequisites": "",
    "benefits": "You enter the stance of an enraged phoenix.",
    "text": "You enter the stance of an enraged phoenix, holding your fingers as rigid as deadly talons while moving with quick, flickering gestures that flicker with dancing flames. The only Strikes you can make are fire talon Strikes. These deal 1d4 fire damage; are in the brawling group; and have the agile, finesse, fire, nonlethal, and unarmed traits.  While in Rain of Embers Stance, you gain a +1 status bonus to AC and fire resistance equal to half your level (minimum 1)."
}, {
    "name": "Tiger Stance",
    "level": 1,
    "traits": ["Monk", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=436",
    "prerequisites": "",
    "benefits": "You enter the stance of a tiger and can make tiger claw attacks.",
    "text": "You enter the stance of a tiger and can make tiger claw attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits. On a critical success with your tiger claws, if you deal damage, the target takes 1d4 persistent bleed damage.  As long as your Speed is at least 20 feet while in Tiger Stance, you can Step 10 feet."
}, {
    "name": "Wolf Stance",
    "level": 1,
    "traits": ["Monk", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=437",
    "prerequisites": "",
    "benefits": "You enter the stance of a wolf, low to the ground with your hands held like fanged teeth.",
    "text": "You enter the stance of a wolf, low to the ground with your hands held like fanged teeth. You can make wolf jaw unarmed attacks. These deal 1d8 piercing damage; are in the brawling group; and have the agile, backstabber, finesse, nonlethal, and unarmed traits.  If you\u2019re flanking a target while in Wolf Stance, your wolf jaw unarmed attacks also gain the trip trait."
}, {
    "name": "Brawling Focus",
    "level": 2,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=438",
    "prerequisites": "",
    "benefits": "You know how to make the most of your attacks when fighting hand-to-hand.",
    "text": "You know how to make the most of your attacks when fighting hand-to-hand. You gain access to the critical specialization effects of unarmed strikes in the brawling group and weapons in the brawling group. If you have  , you also gain the critical specialization effects of all monk weapons in which you are trained."
}, {
    "name": "Crushing Grab",
    "level": 2,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=439",
    "prerequisites": "",
    "benefits": "Like a powerful constrictor, you crush targets in your unyielding grasp.",
    "text": "Like a powerful constrictor, you crush targets in your unyielding grasp. When you successfully Grapple a creature, you can deal bludgeoning damage to that creature equal to your Strength modifier. You can make this attack nonlethal with no penalty."
}, {
    "name": "Dancing Leaf",
    "level": 2,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=440",
    "prerequisites": "",
    "benefits": "You are as light as a leaf whirling in the breeze. ",
    "text": "You are as light as a leaf whirling in the breeze. When you Leap or succeed at a High Jump or Long Jump, increase the distance you jump by 5 feet. When calculating the damage you take from falling, don\u2019t count any distance fallen while you are adjacent to a wall."
}, {
    "name": "Elemental Fist",
    "level": 2,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=441",
    "prerequisites": "Ki Strike",
    "benefits": "You call upon the power of the elements, infusing your ki with elemental energy and allowing your attacks to deal energy damage. ",
    "text": "You call upon the power of the elements, infusing your ki with elemental energy and allowing your attacks to deal energy damage. When you cast  , in addition to the damage types normally available, you can deliver the extra damage in the form of a gust of storm-tossed wind (dealing electricity damage and gaining the air trait), a chunk of stone (dealing bludgeoning damage and gaining the earth trait), a flickering flame (dealing fire damage), or a crashing wave of frigid water (dealing cold damage and gaining the water trait)."
}, {
    "name": "Stunning Fist",
    "level": 2,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=442",
    "prerequisites": "Flurry of Blows",
    "benefits": "The focused power of your flurry threatens to overwhelm your opponent. ",
    "text": "The focused power of your flurry threatens to overwhelm your opponent. When you target the same creature with two Strikes from your Flurry of Blows, you can try to stun the creature. If either Strike hits and deals damage, the target must succeed at a Fortitude save against your class DC or be stunned 1 (or stunned 3 on a critical failure). This is an incapacitation effect."
}, {
    "name": "Deflect Arrows",
    "level": 4,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=443",
    "prerequisites": "",
    "benefits": "Your reflexes allow you to deflect ranged attacks.",
    "text": "You gain a +4 circumstance bonus to AC against the triggering attack. If the attack misses, you have deflected it. You cannot use this feat to deflect unusually massive ranged projectiles (such as boulders or ballista bolts)."
}, {
    "name": "Flurry of Maneuvers",
    "level": 4,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=444",
    "prerequisites": "expert in Athletics",
    "benefits": "You flurry is a combination of maneuvers.",
    "text": "You flurry is a combination of maneuvers. You can replace one or both of your attacks during a Flurry of Blows with Grapples, Shoves, or Trips."
}, {
    "name": "Flying Kick",
    "level": 4,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=445",
    "prerequisites": "",
    "benefits": "You launch yourself at a foe.",
    "text": "You launch yourself at a foe. Make a Leap or attempt a High Jump or Long Jump. At the end of the jump, if you\u2019re adjacent to a foe, you can immediately Strike that foe with an unarmed attack, even if the foe is in mid-air. You fall to the ground after the Strike. If the distance you fall is no more than the height of your jump, you land upright and take no damage."
}, {
    "name": "Guarded Movement",
    "level": 4,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=446",
    "prerequisites": "",
    "benefits": "Your guard is up, even while moving.",
    "text": "Your guard is up, even while moving. You gain a +4 circumstance bonus to AC against reactions triggered by your movement."
}, {
    "name": "Stand Still",
    "level": 4,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=447",
    "prerequisites": "",
    "benefits": "You strike out when your foe tries to flee. ",
    "text": "You strike out when your foe tries to flee. Make a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a move action, you disrupt that action."
}, {
    "name": "Wholeness of Body",
    "level": 4,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=448",
    "prerequisites": "ki spells",
    "benefits": "You can restore your health by tapping into your ki.",
    "text": "You can restore your health by tapping into your ki. You gain the   ki spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Abundant Step",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=449",
    "prerequisites": "incredible movement, ki spells",
    "benefits": "You can teleport yourself a short distance.",
    "text": "You can teleport yourself a short distance. You gain the   ki spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Crane Flutter",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=450",
    "prerequisites": "Crane Stance",
    "benefits": "You interpose your arm between yourself and your opponent.",
    "text": "You interpose your arm between yourself and your opponent. Your circumstance bonus to AC from Crane Stance increases to +3 against the triggering attack. If the attack misses you, you can immediately make a crane wing Strike against the attacker at a \u20132 penalty, even if the attacker isn\u2019t within your reach."
}, {
    "name": "Dragon Roar",
    "level": 6,
    "traits": ["Monk", " Auditory", " Emotion", " Fear", " Mental"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=451",
    "prerequisites": "Dragon Stance",
    "benefits": "You bellow, instilling fear in your enemies. ",
    "text": "You bellow, instilling fear in your enemies. Enemies within a 15-foot emanation must succeed at a Will save against your Intimidation DC or be frightened 1 (frightened 2 on a critical failure). When a creature frightened by the roar begins its turn adjacent to you, it can\u2019t reduce its frightened value below 1 on that turn. Your first attack that hits a frightened creature after you roar and before the end of your next turn gains a +4 circumstance bonus to damage.  After you use Dragon Roar, you can\u2019t use it again for 1d4 rounds. Its effects end immediately if you leave Dragon Stance. Creatures in the area of your roar are then temporarily immune for 1 minute."
}, {
    "name": "Ki Blast",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=452",
    "prerequisites": "ki spells",
    "benefits": "You can unleash an impactful cone of force by channeling your ki.",
    "text": "You can unleash an impactful cone of force by channeling your ki. You gain the   ki spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Mountain Stronghold",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=453",
    "prerequisites": "Mountain Stance",
    "benefits": "You focus on your connection to the earth and call upon the mountain to block attacks against you. ",
    "text": "You focus on your connection to the earth and call upon the mountain to block attacks against you. You gain a +2 circumstance bonus to AC until the beginning of your next turn.  If you have this feat, the Dexterity modifier cap to your AC while you\u2019re in Mountain Stance increases from +0 to +1."
}, {
    "name": "Tiger Slash",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=454",
    "prerequisites": "Tiger Stance",
    "benefits": "You make a fierce swipe with both hands.",
    "text": "You make a fierce swipe with both hands. Make a tiger claw Strike. It deals two extra weapon damage dice (three extra dice if you\u2019re 14th level or higher), and you can push the target 5 feet away as if you had successfully Shoved them. If the attack is a critical success and deals damage, add your Strength modifier to the persistent bleed damage from your tiger claw."
}, {
    "name": "Water Step",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=455",
    "prerequisites": "",
    "benefits": "You can Stride across liquid and surfaces that don\u2019t support your weight.",
    "text": "You can Stride across liquid and surfaces that don\u2019t support your weight. This benefit lasts only during your movement. If you end your movement on a surface that can\u2019t support you, you fall in or it collapses as normal."
}, {
    "name": "Whirling Throw",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=456",
    "prerequisites": "",
    "benefits": "You propel your grabbed or restrained foe a great distance.",
    "text": "You propel your grabbed or restrained foe a great distance. You can throw the creature any distance up to 10 feet, plus 5 feet \u00d7 your Strength modifier. If you successfully throw the creature, it takes bludgeoning damage equal to your Strength modifier plus 1d6 per 10 feet you threw it.  Attempt an Athletics check against the foe\u2019s Fortitude DC. You take a \u20132 circumstance penalty to your check if the target is one size larger than you and a \u20134 circumstance penalty if it\u2019s larger than that. You gain a +2 circumstance bonus to your check if the target is one size smaller than you and a +4 circumstance bonus if it\u2019s smaller than that.   You throw the creature the desired distance and it lands prone.  You throw the creature the desired distance.  You don\u2019t throw the creature.  You don\u2019t throw the creature, and it\u2019s no longer grabbed or restrained by you."
}, {
    "name": "Wolf Drag",
    "level": 6,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=457",
    "prerequisites": "Wolf Stance",
    "benefits": "You rip your enemy off their feet.",
    "text": "You rip your enemy off their feet. Make a wolf jaw Strike. Your wolf jaw gains the fatal d12 trait for this Strike, and if the attack succeeds, you knock the target prone."
}, {
    "name": "Arrow Snatching ",
    "level": 8,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=458",
    "prerequisites": "Deflect Arrow",
    "benefits": "You pluck missiles from the air and hurl them back at their source.",
    "text": "You pluck missiles from the air and hurl them back at their source. When you successfully deflect an attack with Deflect Arrow, as part of that reaction, you can immediately make a ranged Strike against the attacker using the projectile you deflected. This is a thrown weapon with the same range increment and effect on a hit as the triggering attack."
}, {
    "name": "Ironblood Stance",
    "level": 8,
    "traits": ["Monk", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=459",
    "prerequisites": "You are unarmored.",
    "benefits": "You enter the stance of impenetrable iron, refusing to yield to any blow.",
    "text": "You enter the stance of impenetrable iron, refusing to yield to any blow. You can make iron sweep unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the nonlethal, parry, sweep, and unarmed traits. While in Ironblood Stance, you gain resistance 2 to all damage. The resistance increases to 3 at 12th level, to 4 at 16th level, and to 5 at 20th level."
}, {
    "name": "Mixed Maneuver",
    "level": 8,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=460",
    "prerequisites": "master in Athletics",
    "benefits": "You combine two different maneuvers together into a single flowing whole.",
    "text": "You combine two different maneuvers together into a single flowing whole. Choose any two of Grapple, Shove, and Trip. Attempt both of the attacks you chose against the same or different creatures, but don\u2019t apply the multiple attack penalty until after resolving both attacks."
}, {
    "name": "Tangled Forest Stance",
    "level": 8,
    "traits": ["Monk", " Stance"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=461",
    "prerequisites": "You are unarmored.",
    "benefits": "You extend your arms like gnarled branches to interfere with your foes\u2019 movements.",
    "text": "You extend your arms like gnarled branches to interfere with your foes\u2019 movements. You can make lashing branch unarmed attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.  While you\u2019re in Tangled Forest Stance and can act, every enemy in your reach that tries to move away from you must succeed at a Reflex save, Acrobatics check, or Athletics check against your class DC or be immobilized for that action. If you prefer, you can allow the enemy to move."
}, {
    "name": "Wall Run",
    "level": 8,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=462",
    "prerequisites": "",
    "benefits": "You defy gravity, traversing vertical planes as easily as the ground.",
    "text": "You defy gravity, traversing vertical planes as easily as the ground. Stride up to your Speed. You must start your movement on a horizontal surface. During this movement, you can run up vertical surfaces, like walls, at your full Speed. If you end the Stride off the ground, you fall after taking your next action or when your turn ends, whichever comes first (though you can Grab an Edge, if applicable). If you have Water Step or a similar ability, Wall Run lets you run along flimsy vertical surfaces, as well as vertical liquids, such as a waterfall."
}, {
    "name": "Wild Winds Initiate",
    "level": 8,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=463",
    "prerequisites": "ki spells",
    "benefits": "You learn a mystical stance that lets you attack from a distance. ",
    "text": "You learn a mystical stance that lets you attack from a distance. You gain the   ki spell. Increase the number of Focus Points in your focus pool by 1. While entering the stance is a ki spell, the wind crash Strikes the stance grants are not, so you can use them as often as you like while in the stance."
}, {
    "name": "Knockback Strike",
    "level": 10,
    "traits": ["Monk", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=464",
    "prerequisites": "",
    "benefits": "You focus your strength into a blow powerful enough to push an enemy away from you.",
    "text": "You focus your strength into a blow powerful enough to push an enemy away from you. Make an unarmed Strike. If you hit, attempt an Athletics check to Shove the target. This attack uses the same multiple attack penalty as your Strike, and doesn\u2019t count toward your multiple attack penalty."
}, {
    "name": "Sleeper Hold",
    "level": 10,
    "traits": ["Monk", " Attack", " Incapacitation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=465",
    "prerequisites": "",
    "benefits": "You pinch crucial points of your target\u2019s nervous system, impeding its ability to function.",
    "text": "You pinch crucial points of your target\u2019s nervous system, impeding its ability to function. Attempt an Athletics check to Grapple the creature, with the following success and critical success effects instead of the usual effects.   The target falls unconscious for 1 minute, though it remains standing and doesn\u2019t drop what it holds.   The target is clumsy 1 until the end of its next turn."
}, {
    "name": "Wind Jump",
    "level": 10,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=466",
    "prerequisites": "ki spells",
    "benefits": "You gather the wind beneath you, allowing you to soar as you jump.",
    "text": "You gather the wind beneath you, allowing you to soar as you jump. You gain the   ki spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Winding Flow",
    "level": 10,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=467",
    "prerequisites": "once per round",
    "benefits": "Any journey consists of more than simply reaching your destination. ",
    "text": "Any journey consists of more than simply reaching your destination. You use two of the following actions in any order: Stand, Step, and Stride. You can\u2019t use the same action twice."
}, {
    "name": "Diamond Soul",
    "level": 12,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=468",
    "prerequisites": "",
    "benefits": "You have fortified your body and mind against eldritch effects.",
    "text": "You have fortified your body and mind against eldritch effects. You gain a +1 status bonus to saving throws against magic."
}, {
    "name": "Disrupt Ki",
    "level": 12,
    "traits": ["Monk", " Negative"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=469",
    "prerequisites": "",
    "benefits": "Your strike can block a creature's inner life force.",
    "text": "Make an unarmed Strike. If it deals damage to a living creature, you block that creature\u2019s inner life force. The creature takes 2d6 persistent negative damage and is enfeebled 1 until the persistent damage ends. If you\u2019re 18th level or higher, this deals 3d6 persistent negative damage instead."
}, {
    "name": "Improved Knockback",
    "level": 12,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=470",
    "prerequisites": "master in Athletics",
    "benefits": "Your shoves cause the target to go farther.",
    "text": "When you successfully Shove a creature, increase both the distance you can push the creature and the distance you can move to follow along with the target by 5 feet on a success or 10 feet on a critical success. If you push the target into an obstacle, it takes bludgeoning damage equal to 6 plus your Strength modifier, or 8 plus your Strength modifier if you have legendary proficiency in Athletics."
}, {
    "name": "Meditative Focus",
    "level": 12,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=471",
    "prerequisites": "ki spells",
    "benefits": "Your meditation is so effective that you can achieve a deep focus.",
    "text": "Your meditation is so effective that you can achieve a deep focus. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."
}, {
    "name": "Stance Savant (Monk)",
    "level": 12,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=472",
    "prerequisites": "",
    "benefits": "You enter a stance without a thought. ",
    "text": "You enter a stance without a thought. Use an action that has the stance trait."
}, {
    "name": "Ironblood Surge",
    "level": 14,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=473",
    "prerequisites": "Ironblood Stance",
    "benefits": "You steel yourself, preparing to resist oncoming attacks and using your muscles to absorb the impact.",
    "text": "You steel yourself, preparing to resist oncoming attacks and using your muscles to absorb the impact. You gain the benefits of your iron sweep\u2019s parry trait (a +1 circumstance bonus to AC until the start of your next turn) and your resistance from Ironblood Stance increases to your Strength modifier (if it\u2019s higher) for the same duration."
}, {
    "name": "Moutain Quake",
    "level": 14,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=474",
    "prerequisites": "Mountain Stronghold",
    "benefits": "You stomp, shaking the earth beneath you and causing quakes.",
    "text": "You stomp, shaking the earth beneath you. Creatures on the ground within a 20-foot emanation take damage equal to your Strength modifier (minimum 0), which they can resist with a basic Fortitude save. On a failure, they also fall prone. After you use this action, you can\u2019t use it again for 1d4 rounds.  If you have this feat, the Dexterity modifier cap to your AC while using Mountain Stance increases from +1 to +2."
}, {
    "name": "Tangled Forest Rake",
    "level": 14,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=475",
    "prerequisites": "Tangled Forest Stance",
    "benefits": "You reposition foes with raking attacks.",
    "text": "You reposition foes with raking attacks. Make a lashing branch Strike. If you hit and deal damage, you force the target to move 5 feet into a space within your reach. This follows the forced movement rules found on page 475."
}, {
    "name": "Timeless Body",
    "level": 14,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=476",
    "prerequisites": "",
    "benefits": "You cease aging",
    "text": "You cease aging. In addition, you gain a +2 status bonus to saving throws against poisons and diseases, and you gain resistance to poison damage equal to half your level."
}, {
    "name": "Tongue of the Sun and Moon",
    "level": 14,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=477",
    "prerequisites": "",
    "benefits": "You have transcended the barriers between words and meaning.",
    "text": "You have transcended the barriers between words and meaning. You can speak and understand all spoken languages."
}, {
    "name": "Enlightened Presence",
    "level": 16,
    "traits": ["Monk", " Emotion", " Mental"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=479",
    "prerequisites": "",
    "benefits": "You exude an aura of resolve.",
    "text": "You exude an aura of resolve. You and allies within 15 feet of you gain a +2 status bonus to Will saving throws against mental effects."
}, {
    "name": "Master of Many Styles",
    "level": 16,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=480",
    "prerequisites": "Stance Savant",
    "benefits": "You move between stances in an unceasing dance.",
    "text": "You move between stances in an unceasing dance. You use an action with the stance trait."
}, {
    "name": "Quivering Palm",
    "level": 16,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=481",
    "prerequisites": "ki spells",
    "benefits": "Your strikes can kill foes.",
    "text": "Your strikes can kill foes. You gain the   ki spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Shattering Strike",
    "level": 16,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=482",
    "prerequisites": "",
    "benefits": "The force of your considered blow shatters objects and defenses alike.",
    "text": "The force of your considered blow shatters objects and defenses alike. Make an unarmed Strike. It bypasses the target\u2019s resistances. If the target has Hardness, the Strike treats the Hardness as if it were half its value."
}, {
    "name": "Wild Winds Gust",
    "level": 16,
    "traits": ["Monk", " Air", " Concentrate", " Evocation", " Manipulate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=478",
    "prerequisites": "Wild Winds Initiate",
    "benefits": "You store up energy and release it in an enormous gust of rushing wind",
    "text": "You store up energy and release it in an enormous gust of rushing wind. Make a wind crash Strike against each creature in your choice of a 30-foot cone or a 60 foot line. These attacks all count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you make all the attacks."
}, {
    "name": "Diamond Fists",
    "level": 18,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=483",
    "prerequisites": "",
    "benefits": "Your body hardens as you combine your attacks, making your finishing blows more damaging.",
    "text": "Your body hardens as you combine your attacks, making your finishing blows more damaging. Your unarmed attacks gain the forceful trait. Any that already had this trait instead increase their weapon damage dice by one step."
}, {
    "name": "Empty Body",
    "level": 18,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=484",
    "prerequisites": "ki spells",
    "benefits": "You transmute your body into an ethereal form.",
    "text": "You transmute your body into an ethereal form. You gain the   ki spell. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Meditative Wellspring",
    "level": 18,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=485",
    "prerequisites": "Meditative Focus",
    "benefits": "When you clear your mind, your focus comes flowing back in a powerful rush.",
    "text": "When you clear your mind, your focus comes flowing back in a powerful rush. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."
}, {
    "name": "Swift River",
    "level": 18,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=486",
    "prerequisites": "",
    "benefits": "You flow like water, avoiding all restraints.",
    "text": "You flow like water, avoiding all restraints. End one status penalty to your speed, or end one immobilized or slowed condition affecting you."
}, {
    "name": "Enduring Quickness",
    "level": 20,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=487",
    "prerequisites": "",
    "benefits": "You move as fast and as high as the wind itself. ",
    "text": "You move as fast and as high as the wind itself. You\u2019re permanently quickened. You can use your extra action to Stride or Leap, or to provide one of the actions needed for a High Jump or Long Jump."
}, {
    "name": "Fuse Stance",
    "level": 20,
    "traits": ["Monk"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=488",
    "prerequisites": "at least two stances",
    "benefits": "You have combined two stances into a single stance all your own.",
    "text": "You have combined two stances into a single stance all your own. When you take this feat, choose two stances you know and combine them into a single fused stance. Give your new fused stance a unique name. When you enter your fused stance, you gain all the effects of both stances, including the requirements and restrictions.  You can\u2019t fuse stances with fundamentally incompatible requirements or restrictions (such as Ironblood Stance and Crane Stance, which both require using only one type of Strike)."
}, {
    "name": "Impossible Technique",
    "level": 20,
    "traits": ["Monk", " Fortune"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=489",
    "prerequisites": "",
    "benefits": "You execute a maneuver that defies possibility.",
    "text": "You execute a maneuver that defies possibility. If the triggering effect was an enemy\u2019s attack hitting you, the enemy rerolls the attack roll and uses the lower result. If the triggering effect was you failing a saving throw, you reroll the saving throw and use the higher result."
}, {
    "name": "Animal Companion",
    "level": 1,
    "traits": ["Ranger", " Druid"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=311",
    "prerequisites": "[Druid] animal order",
    "benefits": "You gain the service of a young animal companion that travels with you.",
    "text": "You gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See Animal Companions on page 214 for more information. : When you Hunt Prey, your animal companion gains the action\u2019s benefits and your hunter\u2019s edge benefit if you have one."
}, {
    "name": "Crossbow Ace",
    "level": 1,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=491",
    "prerequisites": "",
    "benefits": "You have a deep understanding of the crossbow.",
    "text": "You have a deep understanding of the crossbow. When you\u2019re wielding a crossbow and use Hunt Prey or use Interact to reload your crossbow, you gain a +2 circumstance bonus to the damage roll on your next Strike with that crossbow. If the crossbow is a simple crossbow, also increase the damage die size for that attack by one step (page 279). You must make the attack before the end of your next turn or these benefits are lost."
}, {
    "name": "Hunted Shot",
    "level": 1,
    "traits": ["Ranger", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=492",
    "prerequisites": "",
    "benefits": "You take two quick shots against the one you hunt.",
    "text": "You take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each Strike normally."
}, {
    "name": "Monster Hunter",
    "level": 1,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=493",
    "prerequisites": "",
    "benefits": "You swiftly assess your prey and apply what you know.",
    "text": "You swiftly assess your prey and apply what you know. As part of the action used to Hunt your Prey, you can attempt a check to Recall Knowledge about your prey. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in the creature\u2019s defenses. You and allies you tell gain a +1 circumstance bonus to your next attack roll against that prey. You can give bonuses from Monster Hunter only once per day against a particular creature."
}, {
    "name": "Twin Takedown",
    "level": 1,
    "traits": ["Ranger", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=494",
    "prerequisites": "",
    "benefits": "You swiftly attack your hunted prey with both weapons.",
    "text": "You swiftly attack your hunted prey with both weapons. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each Strike normally."
}, {
    "name": "Favored Terrain",
    "level": 2,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=495",
    "prerequisites": "",
    "benefits": "You have studied a specific terrain to overcome its\u00a0challenges.",
    "text": "You have studied a specific terrain to overcome its challenges. Choose aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground as your favored terrain. When in that terrain, you can ignore the effects of non-magical diffcult terrain. If you have the wild stride class feature, you gain a second benefit while in your favored terrain, depending on your choice. "
}, {
    "name": "Hunter's Aim",
    "level": 2,
    "traits": ["Ranger", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=496",
    "prerequisites": "",
    "benefits": "When you focus on aiming, your attack becomes particularly accurate.",
    "text": "When you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon Strike against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey\u2019s concealed condition."
}, {
    "name": "Monster Warden",
    "level": 2,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=497",
    "prerequisites": "Monster Hunter",
    "benefits": "You understand how to defend yourself and others against your prey.",
    "text": "You understand how to defend yourself and others against your prey. When you grant bonuses from Monster Hunter, you and your allies also each gain a +1 circumstance bonus to your next saving throw against that particular creature and to your AC against that creature\u2019s next attack against you."
}, {
    "name": "Quick Draw",
    "level": 2,
    "traits": ["Ranger", " Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=498",
    "prerequisites": "",
    "benefits": "You draw your weapon and attack with the same motion. ",
    "text": "You draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon."
}, {
    "name": "Relentless Stalker",
    "level": 2,
    "traits": ["Ranger", " Move", " Uncommon"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=867",
    "prerequisites": "",
    "benefits": "Stay adjacent to your prey when they attempt to move away",
    "text": "Your hunted prey cannot escape your relentless pursuit.   up to your Speed in tandem with the triggering creature, remaining adjacent to the foe throughout its movement until it stops moving or you run out of movement. You can ignore difficult terrain during this movement unless the difficult terrain is caused by a magical effect."
}, {
    "name": "Wild Empathy",
    "level": 2,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=499",
    "prerequisites": "",
    "benefits": "You have a connection to the creatures of the natural world.",
    "text": "You have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case."
}, {
    "name": "Companion's Cry",
    "level": 4,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=500",
    "prerequisites": "an animal companion",
    "benefits": "You can urge your companion to do its utmost.",
    "text": "You can urge your companion to do its utmost. You can spend 2 actions to Command an Animal instead of 1 when commanding your animal companion. If you do, your animal companion uses an additional action."
}, {
    "name": "Disrupt Prey",
    "level": 4,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=501",
    "prerequisites": "",
    "benefits": "Make a melee Strike against your prey.",
    "text": "Make a melee Strike against your prey. If the attack is a critical hit, you disrupt the triggering action."
}, {
    "name": "Far Shot",
    "level": 4,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=502",
    "prerequisites": "",
    "benefits": "Your experience in the field has taught you how to focus your aim at a distance.",
    "text": "Your experience in the field has taught you how to focus your aim at a distance, increasing your accuracy. Double your weapons\u2019 range increments."
}, {
    "name": "Favored Enemy",
    "level": 4,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=503",
    "prerequisites": "",
    "benefits": "You have studied a specific type of wild creature and can hunt it more easily. ",
    "text": "You have studied a specific type of wild creature and can hunt it more easily. When you gain this feat, choose animals, beasts, dragons, or both fungi and plants as your favored enemy. When you roll initiative and can see an enemy that belongs to the chosen category, you can Hunt Prey as a free action, designating that enemy.  You can use this free action even if you haven\u2019t identified the creature yet with Recall Knowledge. The benefit doesn\u2019t apply against favored enemies disguised as other creatures, and the GM determines whether it applies against a creature disguised as a favored enemy."
}, {
    "name": "Running Reload",
    "level": 4,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=504",
    "prerequisites": "",
    "benefits": "You can reload your weapon on the move. ",
    "text": "You can reload your weapon on the move. You Stride, Step, or Sneak, then Interact to reload."
}, {
    "name": "Scout's Warning",
    "level": 4,
    "traits": ["Ranger", " Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=505",
    "prerequisites": "",
    "benefits": "You visually or audibly warn your allies of danger.",
    "text": "You visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls. Depending on whether you use gestures or call out, this action gains either the visual or auditory trait, respectively."
}, {
    "name": "Snare Specialist",
    "level": 4,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=506",
    "prerequisites": "expert in Crafting, Snare Crafting",
    "benefits": "You specialize in creating quick traps to obstruct your enemies on the battlefield",
    "text": "You specialize in creating quick traps to obstruct your enemies on the battlefield. If your proficiency rank in Crafting is expert, you gain the formulas for three common or uncommon snares (page 589). If your rank is master, you gain 6. If your rank is legendary, you gain 9.  Each day during your daily preparations, you can prepare four snares from your formula book for quick deployment; if they normally take 1 minute to Craft, you can Craft them with 3 Interact actions. The number of snares increases to six if you have master proficiency in Crafting and eight if you have legendary proficiency in Crafting. Snares prepared in this way don\u2019t cost you any resources to Craft."
}, {
    "name": "Twin Parry",
    "level": 4,
    "traits": ["Ranger", " Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=377",
    "prerequisites": "",
    "benefits": "You use your two weapons to parry attacks.",
    "text": "You use your two weapons to parry attacks. You gain a +1 circumstance bonus to AC until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat\u2019s requirement."
}, {
    "name": "Mature Animal Companion (Ranger)",
    "level": 6,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=508",
    "prerequisites": "Animal Companion",
    "benefits": "Your animal companion grows up, gaining additional capabilities.",
    "text": "Your animal companion grows up, becoming a mature animal companion and gaining additional capabilities (page 214). If you have the Hunt Prey action, your animal companion assaults the prey even without your orders. During an encounter, even if you don\u2019t use the Command an Animal action, your animal companion can still use 1 action that round on your turn to Stride toward or Strike your prey."
}, {
    "name": "Quick Snares",
    "level": 6,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=509",
    "prerequisites": "expert in Crafting, Snare Specialist",
    "benefits": "You can rig a snare in only moments.",
    "text": "You can rig a snare in only moments. You can Craft snares that normally take 1 minute to Craft with 3 Interact actions, even if you haven\u2019t prepared them."
}, {
    "name": "Skirmish Strike",
    "level": 6,
    "traits": ["Ranger", " Flourish", " Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=510",
    "prerequisites": "",
    "benefits": "Your feet and weapon move in tandem.",
    "text": "Your feet and weapon move in tandem. Either Step and then Strike, or Strike and then Step."
}, {
    "name": "Snap Shot",
    "level": 6,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=511",
    "prerequisites": "",
    "benefits": "You\u2019ve learned to react with ranged weapons when a creature is in close quarters.",
    "text": "You\u2019ve learned to react with ranged weapons when a creature\r\nis in close quarters. You can use a reaction that normally allows\r\nyou to make a melee weapon Strike to instead make a ranged\r\nweapon Strike. You must be Striking an adjacent target. If\r\nnecessary for the reaction\u2019s trigger, you treat your ranged\r\nweapon as if it had a reach of 5 feet. If the reaction has other\r\nrequirements, such as wielding a specific kind of weapon, Snap\r\nShot doesn\u2019t allow you to ignore them; it allows you only to\r\nreplace a melee weapon Strike with a ranged weapon Strike."
}, {
    "name": "Swift Tracker",
    "level": 6,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=512",
    "prerequisites": "expert in Survival, Experienced Tracker",
    "benefits": "Your keen eyes catch signs of passage even when you\u2019re moving.",
    "text": "Your keen eyes catch signs of passage even when you\u2019re moving. You can move at your full Speed while you Track. If you have master proficiency in Survival, you don\u2019t need to attempt a new Survival check every hour while Tracking. If you have legendary proficiency in Survival, you can use another exploration activity while Tracking.  If you roll Survival for initiative while tracking your hunted prey, when you start your first turn of the encounter, you can Stride toward your hunted prey as a free action."
}, {
    "name": "Blind-Fight",
    "level": 8,
    "traits": ["Ranger", " Fighter", " Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=388",
    "prerequisites": "master in Perception",
    "benefits": "Your battle instincts make you more aware of concealed and invisible opponents.",
    "text": "Your battle instincts make you more aware of concealed and invisible opponents. You don\u2019t need to succeed at a flat check to target concealed creatures. You\u2019re not flat-footed to creatures that are hidden from you (unless you\u2019re flat-footed to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.  While you\u2019re adjacent to an undetected creature of your level or lower, it is instead only hidden from you."
}, {
    "name": "Deadly Aim",
    "level": 8,
    "traits": ["Ranger", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=514",
    "prerequisites": "weapon specialization",
    "benefits": "You aim for your prey\u2019s weak spots, making your shot more challenging but dealing more damage if you hit. ",
    "text": "You aim for your prey\u2019s weak spots, making your shot more challenging but dealing more damage if you hit. Make a ranged Strike against your hunted prey at a \u20132 penalty. You gain a +4 circumstance bonus to damage on that Strike. This bonus increases to +6 at 11th level and +8 at 15th level."
}, {
    "name": "Hazard Finder",
    "level": 8,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=515",
    "prerequisites": "",
    "benefits": "You have an intuitive ability to sense hazards.",
    "text": "You have an intuitive ability to sense hazards. You gain a +1 circumstance bonus to Perception checks to find traps and hazards, to AC against their attacks, and to saves against their effects. You can find hazards that would normally require you to Search even if you aren\u2019t Searching."
}, {
    "name": "Powerful Snares",
    "level": 8,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=516",
    "prerequisites": "master in Crafting, Snare Specialist",
    "benefits": "Your snares are particularly dif cult for enemies to avoid.",
    "text": "Your snares are particularly difficult for enemies to avoid. When you set a snare, the saving throw DC for that snare is equal to its normal DC or your class DC, whichever is higher."
}, {
    "name": "Terrain Master",
    "level": 8,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=517",
    "prerequisites": "wild stride, master in Survival, Favored Terrain",
    "benefits": "You adapt to your surroundings in any natural terrain. ",
    "text": "You adapt to your surroundings in any natural terrain. You can spend 1 hour practicing in your current terrain in order to make it your favored terrain, replacing your current favored terrain temporarily. If you spend a full day out of the new favored terrain, your favored terrain reverts back to your original choice when you took the Favored Terrain feat."
}, {
    "name": "Warden's Boon",
    "level": 8,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=518",
    "prerequisites": "",
    "benefits": "By pointing out vulnerabilities, you grant an ally benefits from your hunting abilities",
    "text": "By pointing out vulnerabilities, you grant the benefits listed in Hunt Prey and your hunter\u2019s edge benefit to an ally until the end of their next turn. Depending on whether you call out or use gestures, this action gains either the auditory or visual trait."
}, {
    "name": "Camouflage",
    "level": 10,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=519",
    "prerequisites": "master in Stealth",
    "benefits": "You alter your appearance to blend in to the wilderness. ",
    "text": "You alter your appearance to blend in to the wilderness. In natural terrain, you can Sneak even if you\u2019re observed."
}, {
    "name": "Incredible Companion (Ranger)",
    "level": 10,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=520",
    "prerequisites": "Mature Animal Companion",
    "benefits": "Your animal companion continues to grow and develop.",
    "text": "Your animal companion continues to grow and develop. It becomes a nimble or savage animal companion (your choice), gaining additional capabilities determined by the type of companion (page 214)."
}, {
    "name": "Master Monster Hunter",
    "level": 10,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=521",
    "prerequisites": "master in Nature, Monster Hunter",
    "benefits": "You have a nearly encyclopedic knowledge of all creatures of the world.",
    "text": "You have a nearly encyclopedic knowledge of all creatures of the world. You can use Nature to Recall Knowledge to identify any creature. In addition, you gain the benefits of Monster Hunter (and Monster Warden, if you have it) on a success as well as a critical success."
}, {
    "name": "Penetrating Shot",
    "level": 10,
    "traits": ["Ranger", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=522",
    "prerequisites": "",
    "benefits": "You shoot clear through an intervening creature to hit your prey.",
    "text": "You shoot clear through an intervening creature to hit your prey. Choose a target that is giving lesser cover to your hunted prey. Make a single ranged Strike with the required weapon against the chosen target and your hunted prey. This attack ignores any lesser cover the chosen target provides your hunted prey. Roll damage only once, and apply it to each creature you hit. A Penetrating Shot counts as two attacks for your multiple attack penalty."
}, {
    "name": "Twin Riposte",
    "level": 10,
    "traits": ["Ranger", " Fighter"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=523",
    "prerequisites": "",
    "benefits": "A clever parry with one weapon leaves your opponent open to an attack with the other weapon. ",
    "text": "A clever parry with one weapon leaves your opponent open to an attack with the other weapon. Make a melee Strike or use a Disarm action against the triggering opponent."
}, {
    "name": "Warden's Step",
    "level": 10,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=524",
    "prerequisites": "master in Stealth",
    "benefits": "You can guide your allies to move quietly through the wilderness.",
    "text": "You can guide your allies to move quietly through the wilderness. When you Sneak during exploration in natural terrain, you can designate any number of your allies to gain the benefits as if they were using that activity during that exploration. This requires no action on their part."
}, {
    "name": "Distracting Shot",
    "level": 12,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=525",
    "prerequisites": "",
    "benefits": "The sheer power of your attacks, or the overwhelming number of them, leaves an enemy flustered.",
    "text": "The sheer power of your attacks, or the overwhelming number of them, leaves an enemy flustered. If you critically hit your hunted prey with a ranged weapon, or hit it at least twice on the same turn with a ranged weapon, it\u2019s flat-footed until the start of your next turn."
}, {
    "name": "Double Prey",
    "level": 12,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=526",
    "prerequisites": "",
    "benefits": "You can focus on two foes at once, hunting both of them down.",
    "text": "You can focus on two foes at once, hunting both of them down. When you use the Hunt Prey action, you can pick two creatures as your prey."
}, {
    "name": "Lightning Snares",
    "level": 12,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=527",
    "prerequisites": "master in Crafting, Snare Specialist",
    "benefits": "You can rig a trap with incredible speed.",
    "text": "You can rig a trap with incredible speed. When you create a snare that normally takes 1 minute to Craft, you can Craft it using a single Interact action instead."
}, {
    "name": "Second Sting",
    "level": 12,
    "traits": ["Ranger", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=528",
    "prerequisites": "",
    "benefits": "You read your prey\u2019s movements and transform them into openings, so failures with one weapon set up glancing blows with the other. ",
    "text": "You read your prey\u2019s movements and transform them into openings, so failures with one weapon set up glancing blows with the other. Make a melee Strike with one of the required weapons against your hunted prey. The Strike gains the following failure effect.   You deal the damage the other required weapon would have dealt on a hit, excluding all damage dice. (This removes dice from weapon runes, spells, and special abilities, not just weapon damage dice.)"
}, {
    "name": "Side by Side (Ranger)",
    "level": 12,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=529",
    "prerequisites": "an animal companion",
    "benefits": "You and your animal companion fight in tandem, distracting your foes and keeping them of balance. ",
    "text": "You and your animal companion fight in tandem, distracting your foes and keeping them off balance. Whenever you and your animal companion are adjacent to the same foe, you are both flanking that foe with each other, regardless of your actual positions."
}, {
    "name": "Sense the Unseen",
    "level": 14,
    "traits": ["Ranger", " Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=530",
    "prerequisites": "",
    "benefits": "When you look for foes, you can catch even the slightest cues.",
    "text": "When you look for foes, you can catch even the slightest cues, such as their minute movements or the shifting of air currents on your skin. Even though you failed at the triggering check, you automatically sense any undetected creatures in the area where you\u2019re Seeking, making them merely hidden to you."
}, {
    "name": "Shared Prey",
    "level": 14,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=531",
    "prerequisites": "Double Prey, Warden\u2019s Boon",
    "benefits": "Hunting as a duo, you and your ally both single out your prey.",
    "text": "Hunting as a duo, you and your ally both single out your prey. When you use Hunt Prey and select only one prey, you can grant your Hunt Prey benefits and hunter\u2019s edge to an ally in addition to gaining them yourself. The ally retains these benefits until you use Hunt Prey again."
}, {
    "name": "Stealthy Companion",
    "level": 14,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=532",
    "prerequisites": "Camouflage",
    "benefits": "You\u2019ve trained your animal companion to blend in to its surroundings.",
    "text": "You\u2019ve trained your animal companion to blend in to its surroundings. Your animal companion gains the benefit of the   feat. If your companion is a specialized ambusher, its proficiency rank for Stealth increases to master (or legendary if it was already master)."
}, {
    "name": "Targeting Shot",
    "level": 14,
    "traits": ["Ranger", " Concentrate", " Press"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=533",
    "prerequisites": "Hunter\u2019s Aim",
    "benefits": "You carefully track your prey\u2019s position and defenses.",
    "text": "You carefully track your prey\u2019s position and defenses, allowing you to follow up around obstacles that block your shot. Make a ranged weapon Strike against your hunted prey. You ignore the target\u2019s concealed condition and all cover."
}, {
    "name": "Warden's Guidance",
    "level": 14,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=534",
    "prerequisites": "",
    "benefits": "You can convey your prey\u2019s location to your allies, no matter how well hidden it is.",
    "text": "You can convey your prey\u2019s location to your allies, no matter how well hidden it is. As long as your hunted prey is observed by you, all your allies who roll failures and critical failures when Seeking it get a success instead. Your allies need to be able to see or hear you to gain this benefit. You have to be able to call out or use gestures for your allies to get this benefit."
}, {
    "name": "Greater Distracting Shot",
    "level": 16,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=535",
    "prerequisites": "Distracting Shot",
    "benefits": "Even a single missile can throw of your enemy\u2019s balance, and more powerful attacks leave it flustered for longer. ",
    "text": "Even a single missile can throw off your enemy\u2019s balance, and more powerful attacks leave it flustered for longer. If you hit your hunted prey with a ranged weapon, it\u2019s flat-footed until the start of your next turn. If you critically hit your prey or hit it twice on the same turn with a ranged weapon, it\u2019s flat-footed until the end of your next turn instead."
}, {
    "name": "Improved Twin Riposte (Ranger)",
    "level": 16,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=536",
    "prerequisites": "Twin Riposte",
    "benefits": "You are able to riposte an additional time per turn.",
    "text": "At the start of each of your turns, you gain an additional reaction that you can use only to perform a   against your hunted prey. You can use this extra reaction even if you are not benefiting from  ."
}, {
    "name": "Legendary Monster Hunter",
    "level": 16,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=537",
    "prerequisites": "legendary in Nature, Master Monster Hunter",
    "benefits": "Your knowledge of monsters is so incredible that it reveals glaring flaws in your prey. ",
    "text": "Your knowledge of monsters is so incredible that it reveals glaring flaws in your prey. Your bonus from   (and the bonus from   if you have it) increases from +1 to +2 for you and any allies who benefit."
}, {
    "name": "Specialized Companion (Ranger)",
    "level": 16,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=538",
    "prerequisites": "Incredible Companion",
    "benefits": "Your animal companion has become cunning enough to become specialized.",
    "text": "Your animal companion has become cunning enough to become specialized. Your animal companion gains one specialization of your choice. (See the Animal Companion section on page 214.)"
}, {
    "name": "Ubiquitous Snares",
    "level": 16,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=539",
    "prerequisites": "Snare Specialist",
    "benefits": "You can prepare a seemingly impossible number of snares in advance, and you\u2019re ready to spring them on unsuspecting foes.",
    "text": "You can prepare a seemingly impossible number of snares in advance, and you\u2019re ready to spring them on unsuspecting foes. Double the number of prepared snares from Snare Specialist."
}, {
    "name": "Impossible Flurry",
    "level": 18,
    "traits": ["Ranger", " Flourish", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=540",
    "prerequisites": "",
    "benefits": "You forgo precision to attack at an impossible speed.",
    "text": "You forgo precision to attack at an impossible speed. Make three melee Strikes with each of the required weapons. All of these Strikes take the maximum multiple attack penalty, as if you had already made two or more attacks this turn."
}, {
    "name": "Impossible Volley",
    "level": 18,
    "traits": ["Ranger", " Fighter", " Flourish", " Open"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=426",
    "prerequisites": "",
    "benefits": "You fire a volley at all foes in an area.",
    "text": "You fire a volley at all foes in an area. Make one Strike with a \u20132 penalty against each enemy within a 10-foot-radius burst centered at or beyond your weapon\u2019s volley range. Roll the damage only once for all targets.  Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks.  When taken as a Fighter feat, this feat has the   and   traits."
}, {
    "name": "Manifold Edge",
    "level": 18,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=542",
    "prerequisites": "hunter\u2019s edge, masterful hunter",
    "benefits": "You\u2019ve learned every possible edge to use against your foes.",
    "text": "You\u2019ve learned every possible edge to use against your foes. When you use Hunt Prey, you can gain a hunter\u2019s edge benefit other than the one you selected at 1st level. If you do, you don\u2019t gain the additional benefit from masterful hunter."
}, {
    "name": "Masterful Companion",
    "level": 18,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=543",
    "prerequisites": "masterful hunter, Animal Companion",
    "benefits": "Your animal companion shares your incredible hunting skills, allowing it to take down your shared prey with ease.",
    "text": "Your animal companion shares your incredible hunting skills, allowing it to take down your shared prey with ease. When you Hunt Prey, your animal companion gains the masterful hunter benefit associated with your hunter\u2019s edge, rather than just your original hunter\u2019s edge benefit."
}, {
    "name": "Perfect Shot",
    "level": 18,
    "traits": ["Ranger", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=544",
    "prerequisites": "",
    "benefits": "After watching the motions of combat with incredible intensity and precision, you fire at your prey at the perfect moment to deliver maximum pain.",
    "text": "After watching the motions of combat with incredible intensity and precision, you fire at your prey at the perfect moment to deliver maximum pain. Make a ranged Strike with the required weapon against your hunted prey. If you hit, the Strike deals maximum damage. After the Strike, your turn ends."
}, {
    "name": "Shadow Hunter",
    "level": 18,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=545",
    "prerequisites": "Camouflage",
    "benefits": "You blend in to your surroundings so well that others have trouble telling you apart from the terrain.",
    "text": "You blend in to your surroundings so well that others have trouble telling you apart from the terrain. While in natural terrain, you\u2019re always concealed from all foes if you choose to be, except for your hunted prey."
}, {
    "name": "Legendary Shot",
    "level": 20,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=546",
    "prerequisites": "masterful hunter, legendary in Perception, Far Shot",
    "benefits": "You focus on your hunted prey, perceiving angles, air resistance, and every variable that would af ect your ranged attack.",
    "text": "You focus on your hunted prey, perceiving angles, air resistance, and every variable that would affect your ranged attack. If you have master proficiency with your ranged weapon, you can ignore the penalty for attacking up to five range increments away when attacking your hunted prey."
}, {
    "name": "To the Ends of the Earth",
    "level": 20,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=547",
    "prerequisites": "legendary in Survival",
    "benefits": "Your ability to track your prey has surpassed explanation, allowing you to trace your prey\u2019s movements and predict its location with ease.",
    "text": "Your ability to track your prey has surpassed explanation, allowing you to trace your prey\u2019s movements and predict its location with ease. When you use Hunt Prey on a creature within 100 feet, you can follow that creature\u2019s movements, allowing you to know the creature\u2019s exact location no matter how far away it becomes, as long as it remains your prey. You must be legendary in Nature to track your prey\u2019s location across teleportation or planar travel. This feat gains the detection, divination, and primal traits if you\u2019re legendary in Nature."
}, {
    "name": "Triple Threat",
    "level": 20,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=548",
    "prerequisites": "Shared Prey",
    "benefits": "You can divide your attention three ways when hunting.",
    "text": "You can divide your attention three ways when hunting. When you use Hunt Prey, you can designate three creatures as prey, designate two creatures as prey and share the effect with one ally (as Shared Prey), or designate one creature as prey and share the effect with two allies."
}, {
    "name": "Ultimate Skirmisher",
    "level": 20,
    "traits": ["Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=549",
    "prerequisites": "wild stride",
    "benefits": "You are so skilled at navigating the wild, your movement is completely unaf ected by terrain. ",
    "text": "You are so skilled at navigating the wild, your movement is completely unaffected by terrain. You ignore the effects of all difficult terrain, greater difficult terrain, and hazardous terrain, and you don\u2019t trigger traps and hazards that are triggered by moving into an area (such as trip wires and pressure plates), unless you want to."
}, {
    "name": "Nimble Dodge",
    "level": 1,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=550",
    "prerequisites": "",
    "benefits": "You deftly dodge out of the way.",
    "text": "You deftly dodge out of the way, gaining a +2 circumstance bonus to AC against the triggering attack."
}, {
    "name": "Trap Finder",
    "level": 1,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=551",
    "prerequisites": "",
    "benefits": "You have an intuitive sense that alerts you to the dangers and presence of traps.",
    "text": "You have an intuitive sense that alerts you to the dangers and presence of traps. You gain a +1 circumstance bonus to Perception checks to find traps, to AC against attacks made by traps, and to saves against traps. Even if you aren\u2019t Searching, you get a check to find traps that normally require you to be Searching. You still need to meet any other requirements to find the trap.  You can disable traps that require a proficiency rank of master in Thievery. If you have master proficiency in Thievery, you can disable traps that require a proficiency rank of legendary instead, and your circumstance bonuses against traps increase to +2."
}, {
    "name": "Twin Feint",
    "level": 1,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=552",
    "prerequisites": "",
    "benefits": "You make a dazzling series of attacks with both weapons, using the first attack to throw your foe of guard against a second attack at a different angle.",
    "text": "You make a dazzling series of attacks with both weapons, using the first attack to throw your foe offguard against a second attack at a different angle. Make one Strike with each of your two melee weapons, both against the same target. The target is automatically flat-footed against the second attack. Apply your multiple attack penalty to the Strikes normally."
}, {
    "name": "You're Next",
    "level": 1,
    "traits": ["Rogue", " Emotion", " Fear", " Mental"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=553",
    "prerequisites": "trained in Intimidation",
    "benefits": "After downing a foe, you menacingly remind another foe that you\u2019re coming after them next. ",
    "text": "After downing a foe, you menacingly remind another foe that you\u2019re coming after them next. Attempt an Intimidation check with a +2 circumstance bonus to Demoralize a single creature that you can see and that can see you. If you have legendary proficiency in Intimidation, you can use this as a free action with the same trigger."
}, {
    "name": "Brutal Beating",
    "level": 2,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=554",
    "prerequisites": "ruffian racket",
    "benefits": "The brutality of your critical hits shakes your foes\u2019 confidence.",
    "text": "The brutality of your critical hits shakes your foes\u2019 confidence. Whenever your Strike is a critical hit and deals damage, the target is frightened 1."
}, {
    "name": "Distracting Feint",
    "level": 2,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=555",
    "prerequisites": "scoundrel racket",
    "benefits": "Your Feints are far more distracting than normal, drawing your foes\u2019 attention and allowing you and your allies to take greater advantage.",
    "text": "Your Feints are far more distracting than normal, drawing your foes\u2019 attention and allowing you and your allies to take greater advantage. While a creature is flat-footed by your Feint, it also takes a \u20132 circumstance penalty to Perception checks and Reflex saves."
}, {
    "name": "Minor Magic",
    "level": 2,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=556",
    "prerequisites": "",
    "benefits": "You\u2019ve dabbled in a variety of tricks, gaining minor magical abilities from a particular tradition.",
    "text": "You\u2019ve dabbled in a variety of tricks, gaining minor magical abilities from a particular tradition. Choose arcane, divine, occult, or primal magic, and gain two cantrips from the common cantrips available to that tradition."
}, {
    "name": "Mobility",
    "level": 2,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=557",
    "prerequisites": "",
    "benefits": "You move in a way that denies your enemies the opportunity to retaliate.",
    "text": "You move in a way that denies your enemies the opportunity to retaliate. When you take a Stride action to move half your Speed or less, that movement does not trigger reactions. You can use Mobility when Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Quick Draw",
    "level": 2,
    "traits": ["Rogue", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=498",
    "prerequisites": "",
    "benefits": "You draw your weapon and attack with the same motion. ",
    "text": "You draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon."
}, {
    "name": "Unbalancing Blow",
    "level": 2,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=559",
    "prerequisites": "thief racket",
    "benefits": "Interweaving your most powerful attacks in a graceful fiow, you temporarily unbalance your foes. Whenever your Strike is a critical hit and deals damage, the target is flat-footed against your attacks until the end of your next turn.",
    "text": "Interweaving your most powerful attacks in a graceful fiow, you temporarily unbalance your foes. Whenever your Strike is a critical hit and deals damage, the target is flat-footed against your attacks until the end of your next turn."
}, {
    "name": "Battle Assessment",
    "level": 4,
    "traits": ["Rogue", " Secret"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=560",
    "prerequisites": "",
    "benefits": "With careful observation during battle, you identify an enemy\u2019s strengths and weaknesses. ",
    "text": "With careful observation during battle, you identify an enemy\u2019s strengths and weaknesses. The GM rolls a secret Perception check for you against the Deception or Stealth DC (whichever is higher) of an enemy of your choice who is not concealed from you, hidden from you, or undetected by you, and who is engaged in combat. The GM might apply a penalty for the distance between you and the enemy. The enemy is then temporarily immune to your Battle Assessment for 1 day.   The GM chooses two of the following pieces of information about the enemy to tell you: which of the enemy\u2019s weaknesses is highest, which of the enemy\u2019s saving throws has the lowest modifier, one immunity the enemy has, or which of the enemy\u2019s resistances is highest. If the event of a tie, the GM should pick one at random.   The GM chooses one piece of information from the above list to tell you about the enemy.   The GM gives you false information (the GM makes up the information)."
}, {
    "name": "Dread Striker",
    "level": 4,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=561",
    "prerequisites": "",
    "benefits": "You capitalize on your enemies\u2019 fear to slip past their defenses.",
    "text": "You capitalize on your enemies\u2019 fear to slip past their defenses. Any creature that has the frightened condition is also flat-footed against your attacks."
}, {
    "name": "Magical Trickster",
    "level": 4,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=562",
    "prerequisites": "",
    "benefits": "You can sneak spells past your foes\u2019 defenses as easily as any blade",
    "text": "Whether you\u2019re using magic items, wielding innate magic, or dabbling in spellcasting, you can sneak spells past your foes\u2019 defenses as easily as any blade. When you succeed at a spell attack roll against a flat-footed foe\u2019s AC and the spell deals damage, you can add your sneak attack damage to the damage roll. If your single spell leads to multiple separate damage rolls, apply your sneak attack damage only once per target."
}, {
    "name": "Poison Weapon",
    "level": 4,
    "traits": ["Rogue", " Manipulate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=563",
    "prerequisites": "",
    "benefits": "You apply poison to a weapon.",
    "text": "You apply a poison to the required weapon. If your next attack with that weapon before the end of your next turn hits and deals damage, it applies the effects of the poison, provided that poison can be delivered by contact or injury. If you critically fail the attack roll, the poison is wasted as normal.   During your daily preparations, you can prepare a number of simple injury poisons equal to your rogue level. These poisons deal 1d4 poison damage. Only you can apply these poisons properly, and they expire the next time you prepare."
}, {
    "name": "Reactive Pursuit",
    "level": 4,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=564",
    "prerequisites": "",
    "benefits": "You keep pace with a retreating foe.",
    "text": "You keep pace with a retreating foe. You Stride, but you must end your movement adjacent to the triggering enemy. Your move does not trigger reactions from the triggering enemy. You can use Reactive Pursuit to Burrow, Climb, Fly, or Swim instead of Stride if you have the corresponding movement type."
}, {
    "name": "Sabotage",
    "level": 4,
    "traits": ["Rogue", " Incapacitation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=565",
    "prerequisites": "",
    "benefits": "You subtly damage others\u2019 equipment.",
    "text": "You subtly damage others\u2019 equipment. Choose one item that a creature within your reach wields or carries. The item must have moving parts that you could possibly sabotage (a shortbow could be sabotaged, but a longsword could not). Attempt a Thievery check against the Reflex DC of the creature. Damage dealt by Sabotage can\u2019t take the item below its Break Threshold.   You deal damage equal to four times your Thievery proficiency bonus.   You deal damage equal to double your Thievery proficiency bonus.   Temporarily immune to your Sabotage for 1 day."
}, {
    "name": "Scout's Warning",
    "level": 4,
    "traits": ["Rogue", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=505",
    "prerequisites": "",
    "benefits": "You visually or audibly warn your allies of danger.",
    "text": "You visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls. Depending on whether you use gestures or call out, this action gains either the visual or auditory trait, respectively."
}, {
    "name": "Gang Up",
    "level": 6,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=567",
    "prerequisites": "",
    "benefits": "You and your allies harry an opponent in concert. ",
    "text": "You and your allies harry an opponent in concert. Any enemy is flat-footed against your melee attacks due to flanking as long as the enemy is within both your reach and your ally\u2019s. Your allies must still flank an enemy for it to be flat-footed to them."
}, {
    "name": "Light Step",
    "level": 6,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=568",
    "prerequisites": "",
    "benefits": "You aren\u2019t bothered by tricky footing. ",
    "text": "You aren\u2019t bothered by tricky footing. When you Stride or Step, you can ignore difficult terrain."
}, {
    "name": "Skirmish Strike",
    "level": 6,
    "traits": ["Rogue", " Flourish", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=510",
    "prerequisites": "",
    "benefits": "Your feet and weapon move in tandem.",
    "text": "Your feet and weapon move in tandem. Either Step and then Strike, or Strike and then Step."
}, {
    "name": "Twist the Knife",
    "level": 6,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=570",
    "prerequisites": "",
    "benefits": "After stabbing your opponent in a weak spot, you tear the wound open.",
    "text": "After stabbing your opponent in a weak spot, you tear the wound open. You deal persistent bleed damage to the target equal to your number of sneak attack damage dice."
}, {
    "name": "Blind-Fight",
    "level": 8,
    "traits": ["Rogue", " Fighter", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=388",
    "prerequisites": "master in Perception",
    "benefits": "Your battle instincts make you more aware of concealed and invisible opponents.",
    "text": "Your battle instincts make you more aware of concealed and invisible opponents. You don\u2019t need to succeed at a flat check to target concealed creatures. You\u2019re not flat-footed to creatures that are hidden from you (unless you\u2019re flat-footed to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.  While you\u2019re adjacent to an undetected creature of your level or lower, it is instead only hidden from you."
}, {
    "name": "Delay Trap",
    "level": 8,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=572",
    "prerequisites": "",
    "benefits": "You can jam the workings of a trap to delay its effects.",
    "text": "You can jam the workings of a trap to delay its effects. Attempt a Thievery check to Disable a Device on the trap; the DC to do so is increased by 5, and the effects are as follows.   You prevent the trap from being triggered, or you delay the activation until the start or end of your next turn (your choice).   You prevent the trap from being triggered, or you delay the activation until the end of your next turn (whichever is worse for you; GM\u2019s choice).   No effect.  You\u2019re flat-footed until the start of your next turn."
}, {
    "name": "Improved Poison Weapon",
    "level": 8,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=573",
    "prerequisites": "Poison Weapon",
    "benefits": "You deliver poisons in ways that maximize their harmful effects.",
    "text": "You deliver poisons in ways that maximize their harmful effects. When you apply a simple poison with Poison Weapon, the poison deals 2d4 poison damage instead of 1d4 poison damage. You don\u2019t waste a poison you apply with Poison Weapon on a critically failed attack roll."
}, {
    "name": "Nimble Roll",
    "level": 8,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=574",
    "prerequisites": "Nimble Dodge",
    "benefits": "You throw yourself into a roll to escape imminent danger.",
    "text": "You throw yourself into a roll to escape imminent danger. You can use Nimble Dodge before attempting a Reflex save in addition to its original trigger. If you do, the circumstance bonus applies to your Reflex save against the triggering effect. When you use Nimble Dodge and the triggering attack fails or critically fails, or when you succeed or critically succeed at the saving throw, you can also Stride up to 10 feet as part of the reaction. If you do, the reaction gains the move trait. You can use Nimble Roll while Flying or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Opportune Backstab",
    "level": 8,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=575",
    "prerequisites": "",
    "benefits": "When your enemy is hit by your ally, you capitalize upon the distraction.",
    "text": "When your enemy is hit by your ally, you capitalize upon the distraction. Make a Strike against the triggering creature."
}, {
    "name": "Sidestep",
    "level": 8,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=576",
    "prerequisites": "",
    "benefits": "You deftly step out of the way of an attack, letting the blow continue to the creature next to you.",
    "text": "You deftly step out of the way of an attack, letting the blow continue to the creature next to you. You redirect the attack to a creature of your choice that is adjacent to you and within the reach of the triggering attack. The attacker rerolls the Strike\u2019s attack roll against the new target."
}, {
    "name": "Slystriker",
    "level": 8,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=577",
    "prerequisites": "sneak attack",
    "benefits": "Your attacks deal more damage, even against creatures that aren\u2019t flat-footed. ",
    "text": "Your attacks deal more damage, even against creatures that aren\u2019t flat-footed. When you succeed or critically succeed at a Strike against a creature that isn\u2019t flat-footed, you also deal 1d6 precision damage. This applies only if you\u2019re using a weapon or unarmed attack you could deal sneak attack damage with. At 14th level, if you would normally deal 3d6 or more sneak attack damage to flat-footed creatures, you deal 2d6 precision damage to creatures that aren\u2019t flat-footed."
}, {
    "name": "Precise Debilitation",
    "level": 10,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=578",
    "prerequisites": "thief racket, Debilitating Strike",
    "benefits": "You carefully aim and gracefully deliver your debilitations.",
    "text": "You carefully aim and gracefully deliver your debilitations. Add the following debilitations to the list you can choose from when you use Debilitating Strike. "
}, {
    "name": "Sneak Savant",
    "level": 10,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=579",
    "prerequisites": "master in Stealth",
    "benefits": "It is almost impossible to spot you without taking effort to look.",
    "text": "It is almost impossible to spot you without taking effort to look. When you roll a failure on a Sneak action, you get a success instead. You can still critically fail."
}, {
    "name": "Tactical Debilitations",
    "level": 10,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=580",
    "prerequisites": "scoundrel racket, Debilitating Strike",
    "benefits": "You learn new debilitations that grant you tactical advantages against your foes.",
    "text": "You learn new debilitations that grant you tactical advantages against your foes. Add the following debilitations to the list you can choose from when you use Debilitating Strike. "
}, {
    "name": "Vicious Debilitations",
    "level": 10,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=581",
    "prerequisites": "ruffian an racket, Debilitating Strike",
    "benefits": "The debilitations you dish out seriously impair your foes.",
    "text": "The debilitations you dish out seriously impair your foes. Add the following debilitations to the list you can choose from when you use Debilitating Strike. "
}, {
    "name": "Critical Debilitations",
    "level": 12,
    "traits": ["Rogue", " Incapacitation"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=582",
    "prerequisites": "Debilitating Strike",
    "benefits": "Your debilitations are especially effective on your most powerful attacks.",
    "text": "Your debilitations are especially effective on your most powerful attacks. Whenever you critically succeed at an attack roll against an enemy and use Debilitating Strike, add the following debilitation to the list you can choose from.     The target is unaffected.   The target is slowed 1 until the end of your next turn.   The target is slowed 2 until the end of your next turn.   The target is paralyzed until the end of your next turn."
}, {
    "name": "Fantastic Leap",
    "level": 12,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=583",
    "prerequisites": "",
    "benefits": "You launch yourself through the air at a foe.",
    "text": "You launch yourself through the air at a foe. Attempt a High Jump or Long Jump. If you attempt a High Jump, determine the distance you can travel using the scale of a Long Jump. At the end of your jump, you can make a melee Strike.  After your Strike, you fall to the ground if you\u2019re in the air. If the distance of your fall is no more than the height of your jump, you take no damage and land upright."
}, {
    "name": "Felling Shot",
    "level": 12,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=584",
    "prerequisites": "",
    "benefits": "Your ranged attacks can shoot an unprepared foe right out of the air.",
    "text": "Your ranged attacks can shoot an unprepared foe right out of the air. Make a Strike with a ranged weapon or a thrown weapon against a flat-footed creature. If the Strike is a success and deals damage, the target must attempt a Reflex save against your class DC with the following effects.   The target is unaffected.  The target falls up to 120 feet. If it hits the ground, it takes no damage from the fall.  As failure, and the target can\u2019t fiy, jump, levitate, or otherwise leave the ground until the end of your next turn."
}, {
    "name": "Reactive Interference",
    "level": 12,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=585",
    "prerequisites": "",
    "benefits": "You reflexively foil an enemy\u2019s response. ",
    "text": "Grabbing a sleeve, swiping with your weapon, or creating another obstruction, you reflexively foil an enemy\u2019s response. If the triggering creature\u2019s level is equal to or lower than yours, you disrupt the triggering reaction. If the triggering creature\u2019s level is higher than yours, you must make an attack roll against its AC. On a success, you disrupt the reaction."
}, {
    "name": "Spring from the Shadows",
    "level": 12,
    "traits": ["Rogue", " Flourish"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=586",
    "prerequisites": "",
    "benefits": "Leaping out from hiding, you assail your target when they least expect it. ",
    "text": "Leaping out from hiding, you assail your target when they least expect it. You Stride up to your Speed, but you must end your movement next to an enemy you\u2019re hidden from or undetected by. You then Strike that enemy; you remain hidden from or undetected by that creature until after you Strike. You can use Spring from the Shadows while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."
}, {
    "name": "Defensive Roll",
    "level": 14,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=587",
    "prerequisites": "",
    "benefits": "Dropping into a roll to disperse the force of the blow, you can partially evade a lethal attack and stay conscious.",
    "text": "Dropping into a roll to disperse the force of the blow, you can partially evade a lethal attack and stay conscious. You take half damage from the triggering attack."
}, {
    "name": "Instant Opening",
    "level": 14,
    "traits": ["Rogue", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=588",
    "prerequisites": "",
    "benefits": "You distract your opponent with a few choice words or a rude gesture.",
    "text": "You distract your opponent with a few choice words or a rude gesture. Choose a target within 30 feet. It\u2019s flat-footed against your attacks until the end of your next turn. Depending on the way you describe your distraction, this action gains either the auditory or visual trait."
}, {
    "name": "Leave an Opening",
    "level": 14,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=589",
    "prerequisites": "",
    "benefits": "When you hit hard enough, you leave an opening so your ally can jump in on the action. ",
    "text": "When you hit hard enough, you leave an opening so your ally can jump in on the action. Whenever you critically hit a flat-footed opponent with a melee attack and deal damage, the target triggers an Attack of Opportunity reaction from one ally of your choice who has that reaction, as if the enemy had used a manipulate action."
}, {
    "name": "Sense the Unseen",
    "level": 14,
    "traits": ["Rogue", " Ranger"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=530",
    "prerequisites": "",
    "benefits": "When you look for foes, you can catch even the slightest cues.",
    "text": "When you look for foes, you can catch even the slightest cues, such as their minute movements or the shifting of air currents on your skin. Even though you failed at the triggering check, you automatically sense any undetected creatures in the area where you\u2019re Seeking, making them merely hidden to you."
}, {
    "name": "Blank Slate",
    "level": 16,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=591",
    "prerequisites": "legendary in Deception",
    "benefits": "Your deceptions confound even the most powerful mortal divinations. ",
    "text": "Your deceptions confound even the most powerful mortal divinations. Detection, revelation, and scrying effects pass right over you, your possessions, and your auras, detecting nothing unless the detecting effect has a counteract level of 20 or higher. For example,   would still detect other magic in the area but not any magic on you,   wouldn\u2019t reveal you,   or   wouldn\u2019t find you, and so on."
}, {
    "name": "Cloud Step",
    "level": 16,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=592",
    "prerequisites": "legendary in Acrobatics",
    "benefits": "Using fantastic acrobatic skill, you can walk for brief stretches across insubstantial surfaces.",
    "text": "Using fantastic acrobatic skill, you can walk for brief stretches across insubstantial surfaces. When you Stride, you can move across water, air, and solid surfaces that can hold only limited weight as if they were normal ground. If you Stride over a trap with a weight-sensitive pressure plate, you don\u2019t trigger it. At the end of your turn, you sink, fall, break fragile surfaces, or trigger traps as normal for your current location."
}, {
    "name": "Cognitive Loophole",
    "level": 16,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=593",
    "prerequisites": "",
    "benefits": "You can find a loophole in a mental effect to temporarily overcome it.",
    "text": "You can find a loophole in a mental effect to temporarily overcome it. Until the end of your next turn, you ignore a single mental effect that meets the requirement. You can suppress a particular effect using Cognitive Loophole only once.   You can use this reaction even if the mental effect is preventing you from using reactions."
}, {
    "name": "Dispelling Slice",
    "level": 16,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=594",
    "prerequisites": "",
    "benefits": "Your sneak attack slices through the threads binding magic to a target.",
    "text": "Your sneak attack slices through the threads binding magic to a target. Make a Strike against a flat-footed creature (your choice). If your Strike deals sneak attack damage, you attempt to counteract a single spell active on the target. Your counteract level is equal to your rogue level, and your counteract check modifier is equal to your class DC \u2013 10."
}, {
    "name": "Perfect Distraction",
    "level": 16,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=595",
    "prerequisites": "legendary in Deception",
    "benefits": "You use clever tactics to mislead your foes as you sneak away. You Sneak while leaving a decoy behind.",
    "text": "You use clever tactics to mislead your foes as you sneak away. You Sneak while leaving a decoy behind. The decoy acts as the spell  , though you aren\u2019t invisible, just undetected. You can continue to concentrate to move your decoy, as with the spell, whether or not you remain hidden throughout the duration. Once you use Perfect Distraction, you need to spend 10 minutes to set up another decoy before you can use it again."
}, {
    "name": "Implausible Infiltration",
    "level": 18,
    "traits": ["Rogue", " Magical", " Move"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=596",
    "prerequisites": "legendary in Acrobatics, Quick Squeeze",
    "benefits": "You find tiny holes or imperfections that no one else could see and try to somehow fit yourself through them.",
    "text": "You find tiny holes or imperfections that no one else could see and try to somehow fit yourself through them, possibly moving directly through the wall or floor from one side to the other. Your movement attempt fails if the wall or floor is made of something other than wood, plaster, or stone; is thicker than 10 feet; or contains even a thin layer of metal. If you have a climb Speed, you can use this ability to attempt to move through a ceiling."
}, {
    "name": "Powerful Sneak",
    "level": 18,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=597",
    "prerequisites": "",
    "benefits": "You have learned to exploit your enemies\u2019 lowered defenses.",
    "text": "You have learned to exploit your enemies\u2019 lowered defenses. When you succeed or critically succeed at a Strike using your Strength modifier on the attack roll and you would deal sneak attack damage, you can change the additional damage from sneak attack into ordinary damage of the same type as your Strike, rather than precision damage."
}, {
    "name": "Trickster's Ace",
    "level": 18,
    "traits": ["Rogue", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=598",
    "prerequisites": "",
    "benefits": "You have a contingency in your back pocket for desperate situations.",
    "text": "Whether from jury-rigged magic items, stolen magical essence, or other means, you have a contingency in your back pocket for desperate situations. When the trigger occurs, you cause the spell to come into effect. The spell targets only you, no matter how many creatures it would affect normally. If you define particularly complicated conditions, as determined by the GM, the trigger might fail. Once the contingency is triggered, the spell is expended until your next daily preparations."
}, {
    "name": "Hidden Paragon",
    "level": 20,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=599",
    "prerequisites": "legendary in Stealth",
    "benefits": "When you put your mind to slipping out of sight, you disappear completely. ",
    "text": "When you put your mind to slipping out of sight, you disappear completely. You become invisible for 1 minute, even if you use a hostile action. Not even  ,  , or similar effects can reveal you, though creatures can still use the Seek action to locate you as normal."
}, {
    "name": "Impossible Striker",
    "level": 20,
    "traits": ["Rogue"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=600",
    "prerequisites": "Sly Striker",
    "benefits": "Your attacks are swift and deadly beyond explanation.",
    "text": "Your attacks are swift and deadly beyond explanation. Nothing can prevent you from making a sneak attack, even if your opponent can see every blow coming. Instead of dealing the damage from Sly Striker, you can deal your full sneak attack damage to a target even if the target isn\u2019t flat-footed."
}, {
    "name": "Reactive Distraction",
    "level": 20,
    "traits": ["Rogue", " Concentrate", " Manipulate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=601",
    "prerequisites": "legendary in Deception, Perfect Distraction",
    "benefits": "You reactively switch with your decoy to foil your foe.",
    "text": "You reactively switch with your decoy to foil your foe. You use Perfection Distraction, even if you were observed, as long as you end the movement of your Sneak while concealed or in a location with cover or greater cover. Your decoy is targeted by the attack or effect instead of you. In the case of an area effect, if your Sneak doesn\u2019t move you out of the area, both you and the decoy are targeted by the effect."
}, {
    "name": "Counterspell (Spontaneous)",
    "level": 1,
    "traits": ["Sorcerer", " Abjuration"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=602",
    "prerequisites": "",
    "benefits": "When a foe casts a spell, you can try to use your own magic to disrupt it.",
    "text": "When a foe Casts a Spell you know and you can see its manifestations, you can use your own magic to disrupt it. You expend one of your spell slots to counter the triggering creature\u2019s casting of a spell that you have in your repertoire. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell (page 458).   This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, natural, or occult)."
}, {
    "name": "Dangerous Sorcery",
    "level": 1,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=603",
    "prerequisites": "",
    "benefits": "Your legacy grants you great destructive power",
    "text": "Your legacy grants you great destructive power. When you Cast a Spell from your spell slots, if the spell deals damage and doesn\u2019t have a duration, you gain a status bonus to that spell\u2019s damage equal to the spell\u2019s level."
}, {
    "name": "Familiar",
    "level": 1,
    "traits": ["Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=604",
    "prerequisites": "",
    "benefits": "An animal serves you and assists your spellcasting.",
    "text": "You make a pact with creature that serves you and assists your spellcasting. You gain a familiar (page 217)."
}, {
    "name": "Reach Spell",
    "level": 1,
    "traits": ["Sorcerer", " Bard", " Cleric", " Concentrate", " Druid", " Metamagic", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
    "prerequisites": "",
    "benefits": "You can extend your spells\u2019 range",
    "text": "You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."
}, {
    "name": "Widen Spell",
    "level": 1,
    "traits": ["Sorcerer", " Druid", " Manipulate", " Metamagic", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=315",
    "prerequisites": "",
    "benefits": "You manipulate the energy of your spell, causing it to spread out and affect a wider area.",
    "text": "You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."
}, {
    "name": "Cantrip Expansion",
    "level": 2,
    "traits": ["Sorcerer", " Bard", " Cleric", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
    "prerequisites": "",
    "benefits": "Study broadens your range of simple spells",
    "text": "A greater understanding of your magic broadens your range of simple spells. : You can prepare two additional cantrips each day. : Add two additional cantrips from your spell list to your repertoire. "
}, {
    "name": "Enhanced Familiar",
    "level": 2,
    "traits": ["Sorcerer", " Druid", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=318",
    "prerequisites": "a familiar",
    "benefits": "You infuse your familiar with additional primal energy, increasing its abilities.",
    "text": "You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.  (Wizard) If your arcane thesis is improved familiar attunement, your familiar\u2019s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four."
}, {
    "name": "Arcane Evolution",
    "level": 4,
    "traits": ["Sorcerer", " Arcane"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=609",
    "prerequisites": "bloodline that grants arcane spells",
    "benefits": "Your arcane legacy grants you an exceptional aptitude for intellectual and academic pursuits.",
    "text": "Your arcane legacy grants you an exceptional aptitude for intellectual and academic pursuits. You become trained in one skill of your choice. Additionally, you keep a book of arcane spells similar to a wizard\u2019s spellbook. You add all the spells in your spell repertoire to this book for free, and you can add additional arcane spells to the book by paying the appropriate cost and using your Arcana skill, similarly to how a wizard can Learn Spells to add those spells to his spellbook.  During your daily preparations, choose any one spell from your book of arcane spells. If it isn\u2019t in your spell repertoire, add it to your spell repertoire until the next time you prepare. If it\u2019s already in your spell repertoire, add it as an additional signature spell for that day."
}, {
    "name": "Bespell Weapon",
    "level": 4,
    "traits": ["Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=610",
    "prerequisites": "",
    "benefits": "You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding.",
    "text": "You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding. Until the end of your turn, the weapon deals an extra 1d6 damage of a type depending on the school of the spell you just cast. "
}, {
    "name": "Divine Evolution",
    "level": 4,
    "traits": ["Sorcerer", " Divine"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=611",
    "prerequisites": "bloodline that grants divine spells",
    "benefits": "The divine might provided by your bloodline f ows through you. ",
    "text": "The divine might provided by your bloodline fiows through you. You gain an additional spell slot of your highest level, which you can use only to cast your choice of heal or harm. You can cast either of these spells using that spell slot, even if they aren\u2019t in your spell repertoire."
}, {
    "name": "Occult Evolution",
    "level": 4,
    "traits": ["Sorcerer", " Occult"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=612",
    "prerequisites": "bloodline that grants occult spells",
    "benefits": "Glimpses of the obscure secrets of the universe loan you power.",
    "text": "Glimpses of the obscure secrets of the universe loan you power. You become trained in one skill of your choice. Additionally, once per day, you can spend 1 minute to choose one mental occult spell you don\u2019t know and add it to your spell repertoire. You lose this temporary spell the next time you make your daily preparations (though you can use this ability to add it again later)."
}, {
    "name": "Primal Evolution",
    "level": 4,
    "traits": ["Sorcerer", " Primal"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=613",
    "prerequisites": "bloodline that grants primal spells",
    "benefits": "You can call upon the creatures of the wild for aid.",
    "text": "You can call upon the creatures of the wild for aid. You gain an additional spell slot of your highest level, which you can use only to cast   or  . You can cast either of these spells using that spell slot, even if it they aren\u2019t in your spell repertoire."
}, {
    "name": "Advanced Bloodline",
    "level": 6,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=614",
    "prerequisites": "bloodline spell",
    "benefits": "You have studied your bloodline to learn the secrets of its magic.",
    "text": "You have studied your bloodline to learn the secrets of its magic. You gain the advanced bloodline spell associated with your bloodline. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Steady Spellcasting",
    "level": 6,
    "traits": ["Sorcerer", " Bard", " Cleric", " Druid", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
    "prerequisites": "",
    "benefits": "You don\u2019t lose spells easily",
    "text": "Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\u2019t disrupted."
}, {
    "name": "Bloodline Resistance",
    "level": 8,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=616",
    "prerequisites": "",
    "benefits": "Your magical blood makes you more resistant to magic.",
    "text": "Your magical blood makes you more resistant to magic. You gain a +1 status bonus to saving throws against spells and magical effects."
}, {
    "name": "Crossblooded Evolution",
    "level": 8,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=617",
    "prerequisites": "",
    "benefits": "Odd interactions in your bloodline provide you with unexpected spells.",
    "text": "Odd interactions in your bloodline provide you with unexpected spells. You can have one spell in your spell repertoire from a tradition other than the one that matches your bloodline. You cast that spell as a spell from your bloodline\u2019s tradition. You can swap which spell you add and from which tradition as you could any other sorcerer spell, but you can\u2019t have more than one spell from another tradition in your spell repertoire at the same time using this feat."
}, {
    "name": "Greater Bloodline",
    "level": 10,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=618",
    "prerequisites": "bloodline spell",
    "benefits": "Further communion with the legacy of your bloodline has uncovered greater secrets.",
    "text": "Further communion with the legacy of your bloodline has uncovered greater secrets. You gain the greater bloodline spell associated with your bloodline. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Overwhelming Energy",
    "level": 10,
    "traits": ["Sorcerer", " Druid", " Manipulate", " Metamagic", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=337",
    "prerequisites": "",
    "benefits": "You alter your spells to overcome resistances.",
    "text": "You alter your spells to overcome resistances. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\u2019s resistance to acid, cold, electricity, fire, or sonic damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell, such as the wall created by  . A creature\u2019s immunities are unaffected."
}, {
    "name": "Quickened Casting",
    "level": 10,
    "traits": ["Sorcerer", " Bard", " Concentrate", " Metamagic", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=199",
    "prerequisites": "",
    "benefits": "You are able to quickly cast a spell",
    "text": "If your next action is to cast a cantrip or a spell that is at least 2 levels lower than the highest level spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action).   This can only be used on a cantrip or spell from the class matching the one you gained this feat from."
}, {
    "name": "Bloodline Focus",
    "level": 12,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=621",
    "prerequisites": "bloodline spell",
    "benefits": "Your bloodline cause you to recover focus faster.",
    "text": "Your focus recovers faster. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."
}, {
    "name": "Magic Sense",
    "level": 12,
    "traits": ["Sorcerer", " Detection", " Divination", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=622",
    "prerequisites": "",
    "benefits": "You have a literal sixth sense for magic",
    "text": "You have a literal sixth sense for ambient magic in your vicinity. You can sense the presence of magic auras as though you were always using a 1st-level   spell. This detects magic in your field of vision only. When you Seek, you gain the benefits of a 3rd-level   spell on things you see (in addition to the normal benefits of Seeking). You can turn this sense off and on with a free action at the start or the end of your turn.  (Wizard) This feat has the   trait."
}, {
    "name": "Interweave Dispel",
    "level": 14,
    "traits": ["Sorcerer", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=623",
    "prerequisites": "dispel magic in your spell repertoire",
    "benefits": "You weave dispelling energy into a spell, sending both effects at a foe.",
    "text": "You weave dispelling energy into a spell, sending both effects at a foe. If your next action is to cast a single-target spell against a creature, and you either hit the foe with the spell attack roll or the foe fails its saving throw, you can cast   on the foe as a free action, expending a spell slot as normal and targeting one spell effect affecting the foe."
}, {
    "name": "Reflect Spell",
    "level": 14,
    "traits": ["Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=624",
    "prerequisites": "Counterspell",
    "benefits": "You cause a spell to fire back at its caster.",
    "text": "When you successfully use Counterspell to counteract a spell that affects targeted creatures or an area, you can turn that spell\u2019s effect back on its caster. When reflected, the spell affects only the original caster, even if it\u2019s an area spell or it would normally affect more than one creature. The original caster can attempt a save and use other defenses against the reflected spell as normal."
}, {
    "name": "Effortless Concentration",
    "level": 16,
    "traits": ["Sorcerer", " Bard", " Druid", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
    "prerequisites": "",
    "benefits": "You can maintain a spell with hardly a thought.",
    "text": "You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "
}, {
    "name": "Greater Mental Evolution",
    "level": 16,
    "traits": ["Sorcerer", " Arcane"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=626",
    "prerequisites": "Arcane Evolution or Occult Evolution",
    "benefits": "Your bloodline\u2019s deep connection to mental essence greatly enhances your spell repertoire. ",
    "text": "Your bloodline\u2019s deep connection to mental essence greatly enhances your spell repertoire. Add one spell to your spell repertoire for each spell level you can cast."
}, {
    "name": "Greater Vital Evolution",
    "level": 16,
    "traits": ["Sorcerer", " Divine"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=627",
    "prerequisites": "Divine Evolution or Primal Evolution",
    "benefits": "Vital power surges through you like a font of energy.",
    "text": "Vital power surges through you like a font of energy. Twice per day, you can cast a spell after you\u2019ve run out of spell slots of the appropriate spell level; the two spells you cast with this feat must be of different spell levels."
}, {
    "name": "Bloodline Wellspring",
    "level": 18,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=628",
    "prerequisites": "Bloodline Focus",
    "benefits": "Your blood\u2019s power replenishes your focus.",
    "text": "Your blood\u2019s power replenishes your focus. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."
}, {
    "name": "Greater Crossblooded Evolution",
    "level": 18,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=629",
    "prerequisites": "Crossblooded Evolution",
    "benefits": "Your bloodline is extraordinarily complex. ",
    "text": "Your bloodline is extraordinarily complex. You can have up to three spells from other traditions in your spell repertoire, rather than just one. These spells must each be of a different spell level, but they don\u2019t need to be from the same tradition."
}, {
    "name": "Bloodline Conduit",
    "level": 20,
    "traits": ["Sorcerer", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=630",
    "prerequisites": "",
    "benefits": "Your inborn magical nature lets you redirect ambient energies to fuel your spells.",
    "text": "Your inborn magical nature lets you redirect ambient energies to fuel your spells. If your next action is to Cast a Spell of 5th level or lower that has no duration, you don\u2019t expend the spell\u2019s slot when you cast it."
}, {
    "name": "Bloodline Perfection",
    "level": 20,
    "traits": ["Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=631",
    "prerequisites": "bloodline paragon",
    "benefits": "You command the ultimate powers of your bloodline and tradition.",
    "text": "You command the ultimate powers of your bloodline and tradition. You gain an additional 10th-level spell slot."
}, {
    "name": "Metamagic Mastery",
    "level": 20,
    "traits": ["Sorcerer", " Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=632",
    "prerequisites": "",
    "benefits": "Altering your spells doesn\u2019t take any longer than casting them normally. ",
    "text": "Altering your spells doesn\u2019t take any longer than casting them normally. You can use metamagic single actions as free actions."
}, {
    "name": "Counterspell (Prepared)",
    "level": 1,
    "traits": ["Wizard", " Abjuration", " Arcane"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=633",
    "prerequisites": "",
    "benefits": "When a foe Casts a Spell and you can see its manifestations, you can use your own magic to disrupt it. ",
    "text": "When a foe Casts a Spell and you can see its manifestations, you can use your own magic to disrupt it. You expend a prepared spell to counter the triggering creature\u2019s casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell (page 458)."
}, {
    "name": "Eschew Materials",
    "level": 1,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=634",
    "prerequisites": "",
    "benefits": "You can use clever workarounds to replicate the arcane essence of certain materials.",
    "text": "You can use clever workarounds to replicate the arcane essence of certain materials. When Casting a Spell that requires material components, you can provide these material components without a spell component pouch by drawing intricate replacement sigils in the air. Unlike when providing somatic components, you still must have a hand completely free. This doesn\u2019t remove the need for any materials listed in the spell\u2019s cost entry."
}, {
    "name": "Familiar",
    "level": 1,
    "traits": ["Wizard", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=604",
    "prerequisites": "",
    "benefits": "An animal serves you and assists your spellcasting.",
    "text": "You make a pact with creature that serves you and assists your spellcasting. You gain a familiar (page 217)."
}, {
    "name": "Hand of the Apprentice",
    "level": 1,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=636",
    "prerequisites": "universalist wizard",
    "benefits": "You can magically hurl your weapon at your foe.",
    "text": "You can magically hurl your weapon at your foe. You gain the   universalist spell. Universalist spells are a type of focus spell, much like school spells. You start with a focus pool of 1 Focus Point. See Arcane Schools on page 207 for more information about focus spells."
}, {
    "name": "Reach Spell",
    "level": 1,
    "traits": ["Wizard", " Bard", " Cleric", " Concentrate", " Druid", " Metamagic", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
    "prerequisites": "",
    "benefits": "You can extend your spells\u2019 range",
    "text": "You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."
}, {
    "name": "Widen Spell",
    "level": 1,
    "traits": ["Wizard", " Druid", " Manipulate", " Metamagic", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=315",
    "prerequisites": "",
    "benefits": "You manipulate the energy of your spell, causing it to spread out and affect a wider area.",
    "text": "You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."
}, {
    "name": "Cantrip Expansion",
    "level": 2,
    "traits": ["Wizard", " Bard", " Cleric", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
    "prerequisites": "",
    "benefits": "Study broadens your range of simple spells",
    "text": "A greater understanding of your magic broadens your range of simple spells. : You can prepare two additional cantrips each day. : Add two additional cantrips from your spell list to your repertoire. "
}, {
    "name": "Conceal Spell",
    "level": 2,
    "traits": ["Wizard", " Concentrate", " Manipulate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=640",
    "prerequisites": "",
    "benefits": "Hiding your gestures and incantations within other speech and movement, you attempt to conceal the fact that you are casting a spell.",
    "text": "Hiding your gestures and incantations within other speech and movement, you attempt to conceal the fact that you are Casting a Spell. If the next action you use is to Cast a Spell, attempt a Stealth check against one or more observers\u2019 Perception DCs; if the spell has verbal components, you must also attempt a Deception check against the observers\u2019 Perception DC. If you succeed at your check (or checks) against an observer\u2019s DC, that observer doesn\u2019t notice you\u2019re casting a spell, even though material, somatic, and verbal components are usually noticeable and spells normally have sensory manifestations that would make spellcasting obvious to those nearby.  This ability hides only the spell\u2019s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air."
}, {
    "name": "Enhanced Familiar",
    "level": 2,
    "traits": ["Wizard", " Druid", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=318",
    "prerequisites": "a familiar",
    "benefits": "You infuse your familiar with additional primal energy, increasing its abilities.",
    "text": "You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.  (Wizard) If your arcane thesis is improved familiar attunement, your familiar\u2019s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four."
}, {
    "name": "Bespell Weapon",
    "level": 4,
    "traits": ["Wizard", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=610",
    "prerequisites": "",
    "benefits": "You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding.",
    "text": "You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding. Until the end of your turn, the weapon deals an extra 1d6 damage of a type depending on the school of the spell you just cast. "
}, {
    "name": "Linked Focus",
    "level": 4,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=643",
    "prerequisites": "arcane bond, arcane school",
    "benefits": "You have linked your bonded item to the well of energy that powers your school spells. ",
    "text": "You have linked your bonded item to the well of energy that powers your school spells. When you Drain your Bonded Item to cast a spell of your arcane school, you also regain 1 Focus Point."
}, {
    "name": "Silent Spell",
    "level": 4,
    "traits": ["Wizard", " Concentrate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=644",
    "prerequisites": "Conceal Spell",
    "benefits": "You\u2019ve learned how to cast many of your spells without speaking the words of power you would normally need to provide. ",
    "text": "You\u2019ve learned how to cast many of your spells without speaking the words of power you would normally need to provide. If the next action you use is Casting a Spell that has a verbal component and at least one other component, you can remove the verbal component. This makes the spell quieter and allows you to cast it in areas where sound can\u2019t carry. However, the spell still has visual manifestations, so this doesn\u2019t make the spell any less obvious to someone who sees you casting it. When you use Silent Spell, you can choose to gain the benefits of Conceal Spell, and you don\u2019t need to attempt a Deception check because the spell has no verbal components."
}, {
    "name": "Spell Penetration",
    "level": 6,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=645",
    "prerequisites": "",
    "benefits": "You\u2019ve studied ways of overcoming the innate magical resistance that certain powerful creatures have.",
    "text": "You\u2019ve studied ways of overcoming the innate magical resistance that dragons, otherworldly beings, and certain other powerful creatures have. Any creature that has a status bonus to saving throws against magic reduces that bonus by 1 against your spells."
}, {
    "name": "Steady Spellcasting",
    "level": 6,
    "traits": ["Wizard", " Bard", " Cleric", " Druid", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
    "prerequisites": "",
    "benefits": "You don\u2019t lose spells easily",
    "text": "Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\u2019t disrupted."
}, {
    "name": "Advanced School Spell",
    "level": 8,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=647",
    "prerequisites": "arcane school",
    "benefits": "You gain access to a powerful new school spell depending on your arcane school.",
    "text": "You gain access to a powerful new school spell depending on your arcane school. If you\u2019re an abjurer, you gain  ; if you\u2019re a conjurer, you gain  ; if you\u2019re a diviner, you gain  ; if you\u2019re an enchanter, you gain  ; if you\u2019re an evoker, you gain  ; if you\u2019re an illusionist, you gain  ; if you\u2019re a necromancer, you gain  ; and if you\u2019re a transmuter, you gain  . Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Bond Conservation",
    "level": 8,
    "traits": ["Wizard", " Manipulate", " Metamagic"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=648",
    "prerequisites": "arcane bond",
    "benefits": "By carefully manipulating the arcane energies stored in your bonded item as you drain it, you can conserve just enough power to cast another, slightly weaker spell.",
    "text": "By carefully manipulating the arcane energies stored in your bonded item as you drain it, you can conserve just enough power to cast another, slightly weaker spell. If the next action you use is to Cast a Spell using the energy from Drain Bonded Item, you gain an extra use of Drain Bonded Item. You must use this extra use of Drain Bonded Item before the end of your next turn or you lose it, and you can use this additional use only to cast a spell 2 or more levels lower than the first spell cast with Drain Bonded Item."
}, {
    "name": "Universal Versatility",
    "level": 8,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=649",
    "prerequisites": "universalist wizard, Hand of the Apprentice",
    "benefits": "You can access the fundamental abilities of any school of magic.",
    "text": "You can access the fundamental abilities of any school of magic. During your daily preparations, choose one of the eight school spells gained by 1st-level specialist wizards. You can use that school spell until your next daily preparations. When you Refocus, you can choose a different school spell from among those eight school spells, replacing the previous one. Increase the number of Focus Points in your focus pool by 1."
}, {
    "name": "Overwhelming Energy",
    "level": 10,
    "traits": ["Wizard", " Druid", " Manipulate", " Metamagic", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=337",
    "prerequisites": "",
    "benefits": "You alter your spells to overcome resistances.",
    "text": "You alter your spells to overcome resistances. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\u2019s resistance to acid, cold, electricity, fire, or sonic damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell, such as the wall created by  . A creature\u2019s immunities are unaffected."
}, {
    "name": "Quickened Casting",
    "level": 10,
    "traits": ["Wizard", " Bard", " Concentrate", " Metamagic", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=199",
    "prerequisites": "",
    "benefits": "You are able to quickly cast a spell",
    "text": "If your next action is to cast a cantrip or a spell that is at least 2 levels lower than the highest level spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action).   This can only be used on a cantrip or spell from the class matching the one you gained this feat from."
}, {
    "name": "Scroll Savant",
    "level": 10,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=652",
    "prerequisites": "expert in Crafting",
    "benefits": "During your daily preparations, you can create two temporary scrolls containing arcane spells from your spellbook. ",
    "text": "During your daily preparations, you can create two temporary scrolls containing arcane spells from your spellbook. These scrolls follow the normal rules for scrolls (page 564), with some additional restrictions. Each scroll must be of a different spell level, and both spell levels must be 2 or more levels lower than your highest-level spell. Any scrolls you create this way become non-magical the next time you make your daily preparations. A temporary scroll has no value.  If you have master proficiency in arcane spell DCs, you can create three temporary scrolls during your daily preparations, and if you have legendary proficiency, you can create four temporary scrolls."
}, {
    "name": "Clever Counterspell",
    "level": 12,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=653",
    "prerequisites": "Counterspell, Quick Recognize",
    "benefits": "You creatively apply your prepared spells to counterspell a much wider variety of your opponents\u2019 magic.",
    "text": "You creatively apply your prepared spells to Counterspell a much wider variety of your opponents\u2019 magic. Instead of being able to counter a foe\u2019s spell with Counterspell only if you have that same spell prepared, you can use Counterspell as long as you have the spell the foe is casting in your spellbook. When you use Counterspell in this way, the prepared spell you expend must share a trait other than its tradition with the triggering spell. At the GM\u2019s discretion, you can instead use a spell that has an opposing trait or that otherwise logically would counter the triggering spell (such as using a cold or water spell to counter   or using   to counter a fear spell). Regardless of what spell you expend, you take a \u20132 penalty to your counteract check, though the GM can waive this penalty if the expended spell is especially appropriate."
}, {
    "name": "Magic Sense",
    "level": 12,
    "traits": ["Wizard", " Detection", " Divination", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=622",
    "prerequisites": "",
    "benefits": "You have a literal sixth sense for magic",
    "text": "You have a literal sixth sense for ambient magic in your vicinity. You can sense the presence of magic auras as though you were always using a 1st-level   spell. This detects magic in your field of vision only. When you Seek, you gain the benefits of a 3rd-level   spell on things you see (in addition to the normal benefits of Seeking). You can turn this sense off and on with a free action at the start or the end of your turn.  (Wizard) This feat has the   trait."
}, {
    "name": "Bonded Focus",
    "level": 14,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=655",
    "prerequisites": "arcane bond",
    "benefits": "Your connection to your bonded item increases your focus pool.",
    "text": "Your connection to your bonded item increases your focus pool. If you have spent at least 2 Focus Points since the last time you Refocused and your bonded item is in your possession, you recover 2 Focus Points when you Refocus instead of 1."
}, {
    "name": "Reflect Spell",
    "level": 14,
    "traits": ["Wizard", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=624",
    "prerequisites": "Counterspell",
    "benefits": "You cause a spell to fire back at its caster.",
    "text": "When you successfully use Counterspell to counteract a spell that affects targeted creatures or an area, you can turn that spell\u2019s effect back on its caster. When reflected, the spell affects only the original caster, even if it\u2019s an area spell or it would normally affect more than one creature. The original caster can attempt a save and use other defenses against the reflected spell as normal."
}, {
    "name": "Superior Bond",
    "level": 14,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=657",
    "prerequisites": "arcane bond",
    "benefits": "When you draw upon your bonded item, you can leave a bit of energy within it for later use. ",
    "text": "When you draw upon your bonded item, you can leave a bit of energy within it for later use. You can use Drain Bonded Item one additional time per day, but only to cast a spell 2 or more levels lower than your highest-level spell."
}, {
    "name": "Effortless Concentration",
    "level": 16,
    "traits": ["Wizard", " Bard", " Druid", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
    "prerequisites": "",
    "benefits": "You can maintain a spell with hardly a thought.",
    "text": "You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "
}, {
    "name": "Spell Tinker",
    "level": 16,
    "traits": ["Wizard", " Concentrate"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=659",
    "prerequisites": "",
    "benefits": "You\u2019ve learned to alter choices you make when casting spells on yourself.",
    "text": "You\u2019ve learned to alter choices you make when casting spells on yourself. After casting a spell on only yourself that offers several choices of effect (such as  ,  , or a polymorph spell that offers several potential forms), you can alter the choice you made when Casting the Spell (for instance, choosing a different type of damage for  ). However, your tinkering weakens the spell\u2019s integrity, reducing its remaining duration by half.  You can\u2019t use this feat if the benefits of the spell have already been used up or if the effects of the first choice would persist in any way after switching (for instance, if one of the choices was to create a consumable item you already used, or to heal you), or if the feat would create an effect more powerful than that offered by the base spell. The GM is the final arbiter of what Spell Tinker can be applied to."
}, {
    "name": "Infinite Possibilities",
    "level": 18,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=660",
    "prerequisites": "",
    "benefits": "You\u2019ve found a way to prepare a spell slot that exists in your mind as many different possibilities at once. ",
    "text": "You\u2019ve found a way to prepare a spell slot that exists in your mind as many different possibilities at once. Once during your daily preparations, you can use a spell slot to hold that infinite potential, rather than using it to prepare a spell. You can use this spell slot to cast any spell from your spellbook that\u2019s at least 2 levels lower than the slot you designate; the spell acts in all ways as a spell of 2 levels lower. You don\u2019t have any particular spell prepared in that slot until you cast it."
}, {
    "name": "Reprepare Spell",
    "level": 18,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=661",
    "prerequisites": "",
    "benefits": "You\u2019ve discovered how to reuse some of your spell slots over and over.",
    "text": "You\u2019ve discovered how to reuse some of your spell slots over and over. You can spend 10 minutes to prepare a spell that you already cast today, regaining access to that spell slot. The spell must be of 4th level or lower and one that does not have a duration. You can reprepare a spell in this way even if you\u2019ve already reprepared that spell previously in the same day. If you have the spell substitution arcane thesis, you can instead prepare a different spell in an expended slot, as long as the new spell doesn\u2019t have a duration. Once you\u2019ve reprepared a spell in that slot even once, you can use your arcane thesis to substitute only spells without durations into that spell slot."
}, {
    "name": "Archwizard's Might",
    "level": 20,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=662",
    "prerequisites": "archwizard\u2019s spellcraft",
    "benefits": "You have mastered the greatest secrets of arcane magic. ",
    "text": "You have mastered the greatest secrets of arcane magic. You gain an additional 10th-level spell slot."
}, {
    "name": "Metamagic Mastery",
    "level": 20,
    "traits": ["Wizard", " Sorcerer"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=632",
    "prerequisites": "",
    "benefits": "Altering your spells doesn\u2019t take any longer than casting them normally. ",
    "text": "Altering your spells doesn\u2019t take any longer than casting them normally. You can use metamagic single actions as free actions."
}, {
    "name": "Spell Combination",
    "level": 20,
    "traits": ["Wizard"],
    "link": "https://2e.aonprd.com/Feats.aspx?ID=664",
    "prerequisites": "",
    "benefits": "You can merge spells, producing multiple ef ects with a single casting.",
    "text": "You can merge spells, producing multiple effects with a single casting. One slot of each level of spell you can cast, except 2nd level and 1st level, becomes a spell combination slot (this doesn\u2019t apply to cantrips). When you prepare your spells, you can fill a combination slot with a combination of two spells. Each spell in the combination must be 2 or more spell levels below the slot\u2019s level, and both must target only one creature or object or have the option to target only one creature or object. Each spell in the combination must also have the same means of determining whether it has an effect\u2014both spells must require a ranged spell attack roll, require the same type of saving throw, or automatically affect the target.  When you cast a combined spell, it affects only one target, even if the component spells normally affect more than one. If any spell in the combination has further restrictions (such as targeting only living creatures), you must abide by all restrictions. The combined spell uses the shorter of the component spells\u2019 ranges. Resolve a combined spell as if were a single spell, but apply the effects of both component spells. For example, if the spell\u2019s target succeeded at the save against a combined spell, it would apply the success effect of each spell, and if it critically failed, it would apply the critical failure effect of both spells."
}]

const archFeats = [{
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=1",
    "name": "Alchemist Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 220",
    "archetype": "Alchemist",
    "prerequisites": "Intelligence 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the alchemist archetype.",
    "text": "You put your alchemical interest into practice. You become trained in alchemical bombs and Crafting; if you were already trained in Crafting, you instead become trained in a skill of your choice. You become trained in alchemist class DC. You gain the alchemist\u2019s infused reagents class feature, gaining a number of reagents each day equal to your level. You also gain the Alchemical Crafting feat and four additional formulas for 1st-level alchemical items, as well as the ability to create free items during your daily preparations. Your advanced alchemy level is 1 and doesn\u2019t increase on its own.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=1",
    "name": "Basic Concoction",
    "level": 4,
    "source": "Core Rulebook pg. 220",
    "archetype": "Alchemist",
    "prerequisites": "Alchemist Dedication",
    "text": "You gain a 1st- or 2nd-level alchemist feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=1",
    "name": "Quick Alchemy",
    "level": 4,
    "source": "Core Rulebook pg. 220",
    "archetype": "Alchemist",
    "prerequisites": "Alchemist Dedication",
    "text": "You gain the Quick Alchemy action.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=1",
    "name": "Advanced Concoction",
    "level": 6,
    "source": "Core Rulebook pg. 220",
    "archetype": "Alchemist",
    "prerequisites": "Basic Concoction",
    "special": "You can select this feat more than once. Each time you select it, you gain another alchemist feat.",
    "text": "You gain one alchemist feat. For the purpose of meeting its prerequisites, your alchemist level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=1",
    "name": "Expert Alchemy",
    "level": 6,
    "source": "Core Rulebook pg. 220",
    "archetype": "Alchemist",
    "prerequisites": "Alchemist Dedication, expert in Crafting",
    "text": "Your advanced alchemy level increases to 3. At 10th level, it increases to 5.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=1",
    "name": "Mastery Alchemy",
    "level": 12,
    "source": "Core Rulebook pg. 220",
    "archetype": "Alchemist",
    "prerequisites": "Expert Alchemy, master in Crafting",
    "traits": ["Archetype"],
    "text": "Your advanced alchemy level increases to 7. For every level you gain beyond 12th, your advanced alchemy level increases by 1."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=2",
    "name": "Barbarian Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 221",
    "archetype": "Barbarian",
    "prerequisites": "Strength 14, Constitution 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the barbarian archetype.",
    "text": "You become trained in Athletics; if you were already trained in Athletics, you instead become trained in a skill of your choice. You become trained in barbarian class DC. You can use the Rage action. Choose an instinct as you would if you were a barbarian. You have that instinct for all purposes and become bound by its anathema, but you don\u2019t gain any of the other abilities it grants.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=2",
    "name": "Barbarian Resiliency",
    "level": 4,
    "source": "Core Rulebook pg. 221",
    "archetype": "Barbarian",
    "prerequisites": "Barbarian Dedication, class granting no more Hit Points per level than 10 + your Constitution modifier",
    "text": "You gain 3 additional Hit Points for each barbarian archetype class feat you have. As you continue selecting barbarian archetype class feats, you continue to gain additional Hit Points in this way.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=2",
    "name": "Basic Fury",
    "level": 4,
    "source": "Core Rulebook pg. 221",
    "archetype": "Barbarian",
    "prerequisites": "Barbarian Dedication",
    "text": "You gain a 1st- or 2nd-level barbarian feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=2",
    "name": "Advanced Fury",
    "level": 6,
    "source": "Core Rulebook pg. 221",
    "archetype": "Barbarian",
    "prerequisites": "Basic Fury",
    "special": "You can select this feat more than once. Each time you select it, you gain another barbarian feat.",
    "text": "You gain one barbarian feat. For the purpose of meeting its prerequisites, your barbarian level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=2",
    "name": "Instinct Ability",
    "level": 6,
    "source": "Core Rulebook pg. 221",
    "archetype": "Barbarian",
    "prerequisites": "Barbarian Dedication",
    "text": "You gain the instinct ability for the instinct you chose for Barbarian Dedication.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=2",
    "name": "Juggernaut's Fortitude",
    "level": 12,
    "source": "Core Rulebook pg. 221",
    "archetype": "Barbarian",
    "prerequisites": "Barbarian Dedication, expert in Fortitude saves",
    "traits": ["Archetype"],
    "text": "Your proficiency rank in Fortitude saves increases to master."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Bard Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Charisma 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the bard archetype.",
    "text": "You cast spells like a bard and gain the Cast a Spell activity. You gain a spell repertoire with two common cantrips from the occult spell list, or any other cantrips you learn or discover. You\u2019re trained in spell attack rolls and spell DCs for occult spells. Your key spellcasting ability for bard archetype spells is Charisma, and they are occult bard spells. You become trained in Occultism and Performance; for each of these skills in which you were already trained, you instead become trained in a skill of your choice. Choose a muse as you would if you were a bard. You have that muse for all purposes, allowing you to take that muse\u2019s feats, but you don\u2019t gain any of the other abilities it grants.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Basic Bard Spellcasting",
    "level": 4,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Bard Dedication",
    "text": "You gain the basic spellcasting benefits (page 219). Each time you gain a spell slot of a new level from the bard archetype, add a common occult spell or another spell you learned or discovered to your repertoire, of the appropriate spell level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Basic Muse's Whispers",
    "level": 4,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Bard Dedication",
    "text": "You gain a 1st- or 2nd-level bard feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Advanced Muse's Whispers",
    "level": 6,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Basic Muse\u2019s Whispers",
    "special": "You can select this feat more than once. Each time you select it, you gain another bard feat.",
    "text": "You gain one bard feat. For the purpose of meeting its prerequisites, your bard level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Counter Perform",
    "level": 6,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Bard Dedication",
    "text": "You gain the composition spell. If you don\u2019t already have one, you gain a focus pool of 1 Focus Point, which you can Refocus by engaging your muse. (For more on composition spells, see page 97.)",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Inspirational Performance",
    "level": 8,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Bard Dedication",
    "text": "You gain the composition cantrip.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Occult Breadth",
    "level": 8,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Basic Bard Spellcasting",
    "text": "Your repertoire expands, and you can cast more occult spells each day. Increase the number of spells in your repertoire and the number of spell slots you gain from bard archetype feats by 1 for each spell level other than your two highest spell levels.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Expert Bard Spellcasting",
    "level": 12,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Basic Bard Spellcasting, master in Occultism",
    "text": "You gain the expert spellcasting benefits.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=3",
    "name": "Master Bard Spellcasting",
    "level": 18,
    "source": "Core Rulebook pg. 222",
    "archetype": "Bard",
    "prerequisites": "Expert Bard Spellcasting, legendary in Occultism",
    "traits": ["Archetype"],
    "text": "You gain the master spellcasting benefits."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Champion Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Strength 14, Charisma 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the champion archetype.",
    "text": "Choose a deity and cause as you would if you were a champion. You become trained in light, medium, and heavy armor. You become trained in Religion and your deity\u2019s associated skill; for each of these skills in which you were already trained, you instead become trained in a skill of your choice. You become trained in champion class DC. You are bound by your deity\u2019s anathema and must follow the champion\u2019s code and alignment requirements for your cause. You don\u2019t gain any other abilities from your choice of deity or cause",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Basic Devotion",
    "level": 4,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Champion Dedication",
    "text": "You gain a 1st- or 2nd-level champion feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Champion Resiliencey",
    "level": 4,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Champion Dedication, class granting no more Hit Points per level than 8 + your Constitution modifier",
    "text": "You gain 3 additional Hit Points for each champion archetype class feat you have. As you continue selecting champion archetype class feats, you continue to gain additional Hit Points in this way.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Healing Touch",
    "level": 4,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Champion Dedication",
    "text": "You gain the appropriate devotion spell for your cause ( for the paladin, redeemer, and liberator). If you don\u2019t already have one, you gain a focus pool of 1 Focus Point, which you can Refocus by praying or serving your deity. (For more on devotion spells, see page 107.)",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Advanced Devotion",
    "level": 6,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Basic Devotion",
    "special": "You can select this feat more than once. Each time you select it, you gain another champion feat.",
    "text": "You gain one champion feat. For the purpose of meeting its prerequisites, your champion level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Champion's Reaction",
    "level": 6,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Champion Dedication",
    "text": "You can use the champion\u2019s reaction associated with your cause.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Divine Ally",
    "level": 6,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Champion Dedication",
    "text": "You gain a of your choice.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=4",
    "name": "Diverse Armor Expert",
    "level": 14,
    "source": "Core Rulebook pg. 223",
    "archetype": "Champion",
    "prerequisites": "Champion Dedication, expert in unarmored defense or one or more types of armor",
    "traits": ["Archetype"],
    "text": "Your proficiency ranks for light armor, medium armor, heavy armor, and unarmored defense increase to expert."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=5",
    "name": "Cleric Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 224",
    "archetype": "Cleric",
    "prerequisites": "Wisdom 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the cleric archetype.",
    "text": "You cast spells like a cleric. You gain access to the Cast a Spell activity. You can prepare two common cantrips each day from the divine spell list in this book or any other cantrips you learn or discover. You\u2019re trained in spell attack rolls and spell DCs for divine spells. Your key spellcasting ability for cleric archetype spells is Wisdom, and they are divine cleric spells. Choose a deity as you would if you were a cleric. You become bound by that deity\u2019s anathema. You become trained in Religion and your deity\u2019s associated skill; for each of these skills in which you were already trained, you instead become trained in a skill of your choice. You don\u2019t gain any other abilities from your choice of deity.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=5",
    "name": "Basic Cleric Spellcasting",
    "level": 4,
    "source": "Core Rulebook pg. 224",
    "archetype": "Cleric",
    "prerequisites": "Cleric Dedication",
    "text": "You gain the basic spellcasting benefits. You can prepare your deity\u2019s spells in your spell slots of the appropriate level from the cleric archetype.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=5",
    "name": "Basic Dogma",
    "level": 4,
    "source": "Core Rulebook pg. 224",
    "archetype": "Cleric",
    "prerequisites": "Cleric Dedication",
    "text": "You gain a 1st- or 2nd-level cleric feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=5",
    "name": "Advanced Dogma",
    "level": 6,
    "source": "Core Rulebook pg. 224",
    "archetype": "Cleric",
    "prerequisites": "Basic Dogma",
    "special": "You can select this feat more than once. Each time you select it, you gain another cleric feat.",
    "text": "You gain one cleric feat. For the purpose of meeting its prerequisites, your cleric level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=5",
    "name": "Divine Breadth",
    "level": 8,
    "source": "Core Rulebook pg. 224",
    "archetype": "Cleric",
    "prerequisites": "Basic Cleric Spellcasting",
    "text": "You can cast more divine spells each day. Increase the spell slots you gain from cleric archetype feats by 1 for each spell level other than your two highest spell levels.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=5",
    "name": "Expert Cleric Spellcasting",
    "level": 12,
    "source": "Core Rulebook pg. 224",
    "archetype": "Cleric",
    "prerequisites": "Basic Cleric Spellcasting, master in Religion",
    "text": "You gain the expert spellcasting benefits.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=5",
    "name": "Master Cleric Spellcasting",
    "level": 18,
    "source": "Core Rulebook pg. 224",
    "archetype": "Cleric",
    "prerequisites": "Expert Cleric Spellcasting, legendary in Religion",
    "traits": ["Archetype"],
    "text": "You gain the master spellcasting benefits."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Druid Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Wisdom 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the druid archetype.",
    "text": "You cast spells like a druid. You gain access to the Cast a Spell activity. You can prepare two common cantrips each day from the primal spell list in this book or any other cantrips you learn or discover. You\u2019re trained in spell attack rolls and spell DCs for primal spells. Your key spellcasting ability for druid archetype spells is Wisdom, and they are primal druid spells. You learn the Druidic language. Choose an order as you would if you were a druid. You become a member of that order and are bound by its anathema, allowing you to take the order\u2019s feats. You become trained in Nature and your order\u2019s associated skill; for each of these skills in which you were already trained, you become trained in a skill of your choice. You don\u2019t gain any other abilities from your choice of order.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Basic Druid Spellcasting",
    "level": 4,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Druid Dedication",
    "text": "You gain the basic spellcasting benefits.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Basic Wilding",
    "level": 4,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Druid Dedication",
    "text": "You gain a 1st- or 2nd-level druid feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Order Spell",
    "level": 4,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Druid Dedication",
    "text": "You gain the initial order spell from your order. If you don\u2019t already have one, you gain a focus pool of 1 Focus Point, which you can Refocus by being one with nature. (For more on order spells, see page 131.)",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Advanced Wilding",
    "level": 6,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Basic Wilding",
    "special": "You can select this feat more than once. Each time you select it, you gain another druid feat.",
    "text": "You gain one druid feat. For the purpose of meeting its prerequisites, your druid level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Primal Breadth",
    "level": 8,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Basic Druid Spellcasting",
    "text": "Increase the spell slots you gain from druid archetype feats by 1 for each spell level other than your two highest spell levels.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Expert Druid Spellcasting",
    "level": 12,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Basic Druid Spellcasting, master in Nature",
    "text": "You gain the expert spellcasting benefits.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=6",
    "name": "Master Druid Spellcasting",
    "level": 18,
    "source": "Core Rulebook pg. 225",
    "archetype": "Druid",
    "prerequisites": "Expert Druid Spellcasting, legendary in Nature",
    "traits": ["Archetype"],
    "text": "You gain the master spellcasting benefits."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=7",
    "name": "Fighter Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 226",
    "archetype": "Fighter",
    "prerequisites": "Strength 14, Dexterity 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the fighter archetype.",
    "text": "You become trained in simple weapons and martial weapons. You become trained in your choice of or ; if you are already trained in both of these skills, you instead become trained in a skill of your choice. You become trained in fighter class DC.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=7",
    "name": "Basic Maneuver",
    "level": 4,
    "source": "Core Rulebook pg. 226",
    "archetype": "Fighter",
    "prerequisites": "Fighter Dedication",
    "text": "You gain a 1st- or 2nd-level fighter feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=7",
    "name": "Fighter Resiliency",
    "level": 4,
    "source": "Core Rulebook pg. 226",
    "archetype": "Fighter",
    "prerequisites": "Fighter Dedication, class granting no more Hit Points per level than 8 + your Constitution modifier",
    "text": "You gain 3 additional Hit Points for each fighter archetype class feat you have. As you continue selecting fighter archetype class feats, you continue to gain additional Hit Points in this way.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=7",
    "name": "Opportunist",
    "level": 4,
    "source": "Core Rulebook pg. 142",
    "archetype": "Fighter",
    "prerequisites": "Fighter Dedication",
    "trigger": "A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it\u2019s using.",
    "text": "You gain the Attack of Opportunity reaction. You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=7",
    "name": "Advanced Maneuver",
    "level": 6,
    "source": "Core Rulebook pg. 226",
    "archetype": "Fighter",
    "prerequisites": "Basic Maneuver",
    "special": "You can select this feat more than once. Each time you select it, you gain another fighter feat.",
    "text": "You gain a fighter feat. For the purpose of meeting its prerequisites, your fighter level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=7",
    "name": "Diverse Weapon Expert",
    "level": 12,
    "source": "Core Rulebook pg. 226",
    "archetype": "Fighter",
    "prerequisites": "Fighter Dedication, expert in any kind of weapon or unarmed attack",
    "traits": ["Archetype"],
    "text": "Your proficiency ranks for simple weapons and martial weapons increase to expert, and your proficiency rank for advanced weapons increases to trained."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=8",
    "name": "Monk Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 227",
    "archetype": "Monk",
    "prerequisites": "Strength 14, Dexterity 14",
    "special": "You can\u2019t select another dedication feat until you have gained two other feats from the monk archetype.",
    "text": "You become trained in unarmed attacks and gain the powerful fist class feature (page 156). You become trained in your choice of Acrobatics or Athletics; if you are already trained in both of these skills, you become trained in a skill of your choice. You become trained in monk class DC.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=8",
    "name": "Basic Kata",
    "level": 4,
    "source": "Core Rulebook pg. 227",
    "archetype": "Monk",
    "prerequisites": "Monk Dedication",
    "text": "You gain a 1st- or 2nd-level monk feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=8",
    "name": "Monk Resiliency",
    "level": 4,
    "source": "Core Rulebook pg. 227",
    "archetype": "Monk",
    "prerequisites": "Monk Dedication, class granting no more Hit Points per level than 8 + your Constitution modifier",
    "text": "You gain 3 additional Hit Points for each monk archetype class feat you have. As you continue selecting monk archetype class feats, you continue to gain additional Hit Points in this way.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=8",
    "name": "Advanced Kata",
    "level": 6,
    "source": "Core Rulebook pg. 227",
    "archetype": "Monk",
    "prerequisites": "Basic Kata",
    "special": "You can select this feat more than once. Each time you select it, you gain another monk feat.",
    "text": "You gain one monk feat. For the purpose of meeting its prerequisites, your monk level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=8",
    "name": "Monk Moves",
    "level": 8,
    "source": "Core Rulebook pg. 227",
    "archetype": "Monk",
    "prerequisites": "Monk Dedication",
    "text": "You gain a +10-foot status bonus to your Speed when you\u2019re not wearing armor.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=8",
    "name": "Monk's Flurry",
    "level": 10,
    "source": "Core Rulebook pg. 156",
    "archetype": "Monk",
    "prerequisites": "Monk Dedication",
    "text": "You gain the Flurry of Blows action. Make two unarmed Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to the Strikes normally. As it has the flourish trait, you can use Flurry of Blows only once per turn.",
    "traits": ["Archetype", "Flourish", "Monk"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=8",
    "name": "Perfection's Path",
    "level": 12,
    "source": "Core Rulebook pg. 227",
    "archetype": "Monk",
    "prerequisites": "Monk Dedication, expert in at least one saving throw",
    "traits": ["Archetype"],
    "text": "Choose one saving throw (Fortitude, Reflex, or Will) in which you are an expert. Your proficiency rank in the chosen saving throw increases to master."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=9",
    "name": "Ranger Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 168",
    "archetype": "Ranger",
    "prerequisites": "Dexterity 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the ranger archetype.",
    "text": "You become trained in Survival; if you were already trained in Survival, you instead become trained in another skill of your choice. You become trained in ranger class DC. You can use the Hunt Prey action. You designate a single creature as your prey and focus your attacks against that creature. You must be able to see or hear the prey, or you must be tracking the prey during exploration. You gain a +2 circumstance bonus to Perception checks when you Seek your prey and a +2 circumstance bonus to Survival checks when you Track your prey. You also ignore the penalty for making ranged attacks within your second range increment against the prey you\u2019re hunting. You can have only one creature designated as your prey at a time. If you use Hunt Prey against a creature when you already have a creature designated, the prior creature loses the designation and the new prey gains the designation. Your designation lasts until your next daily preparations.",
    "traits": ["Archetype", "Dedication", "Multiclass", "Concentrate", "Ranger"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=9",
    "name": "Basic Hunter's Trick",
    "level": 4,
    "source": "Core Rulebook pg. 228",
    "archetype": "Ranger",
    "prerequisites": "Ranger Dedication",
    "text": "You gain a 1st- or 2nd-level ranger feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=9",
    "name": "Ranger Resiliency",
    "level": 4,
    "source": "Core Rulebook pg. 228",
    "archetype": "Ranger",
    "prerequisites": "Ranger Dedication, class granting no more Hit Points per level than 8 + your Constitution modifier",
    "text": "You gain 3 additional Hit Points for each ranger archetype class feat you have. As you continue selecting ranger archetype class feats, you continue to gain additional Hit Points in this way.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=9",
    "name": "Advanced Hunter's Trick",
    "level": 6,
    "source": "Core Rulebook pg. 228",
    "archetype": "Ranger",
    "prerequisites": "Basic Hunter\u2019s Trick",
    "special": "You can select this feat more than once. Each time you select it, you gain another ranger feat.",
    "text": "You gain one ranger feat. For the purpose of meeting its prerequisites, your ranger level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=9",
    "name": "Master Spotter",
    "level": 12,
    "source": "Core Rulebook pg. 228",
    "archetype": "Ranger",
    "prerequisites": "Ranger Dedication, expert in Perception",
    "traits": ["Archetype"],
    "text": "Your proficiency rank in Perception increases to master."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=10",
    "name": "Rogue Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 229",
    "archetype": "Rogue",
    "prerequisites": "Dexterity 14",
    "special": "You cannot gain another dedication feat until you have gained two other feats from the rogue archetype.",
    "text": "You gain a skill feat and the rogue\u2019s surprise attack class feature (page 181). You become trained in light armor. In addition, you become trained in Stealth or Thievery plus one skill of your choice; if you are already trained in both Stealth and Thievery, you become trained in an additional skill of your choice. You become trained in rogue class DC.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=10",
    "name": "Basic Trickery",
    "level": 4,
    "source": "Core Rulebook pg. 229",
    "archetype": "Rogue",
    "prerequisites": "Rogue Dedication",
    "text": "You gain a 1st- or 2nd-level rogue feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=10",
    "name": "Sneak Attacker",
    "level": 4,
    "source": "Core Rulebook pg. 229",
    "archetype": "Rogue",
    "prerequisites": "Rogue Dedication",
    "text": "You gain the sneak attack class feature (page 181), except it deals 1d4 damage, increasing to 1d6 at 6th level. You don\u2019t increase the number of dice as you gain levels.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=10",
    "name": "Advanced Trickery",
    "level": 6,
    "source": "Core Rulebook pg. 229",
    "archetype": "Rogue",
    "prerequisites": "Basic Trickery",
    "special": "You can select this feat more than once. Each time you select it, you gain another rogue feat.",
    "text": "You gain one rogue feat. For the purpose of meeting its prerequisites, your rogue level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=10",
    "name": "Skill Mastery",
    "level": 8,
    "source": "Core Rulebook pg. 229",
    "archetype": "Rogue",
    "prerequisites": "Rogue Dedication, trained in at least one skill and expert in at least one skill",
    "special": "You can select this feat up to five times.",
    "text": "Increase your proficiency rank in one of your skills from expert to master and in another of your skills from trained to expert. You gain a skill feat associated with one of the skills you chose.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=10",
    "name": "Uncanny Dodge",
    "level": 10,
    "source": "Core Rulebook pg. 229",
    "archetype": "Rogue",
    "prerequisites": "Rogue Dedication",
    "text": "You gain the deny advantage class feature (page 181).",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=10",
    "name": "Evasiveness",
    "level": 12,
    "source": "Core Rulebook pg. 229",
    "archetype": "Rogue",
    "prerequisites": "Rogue Dedication, expert in Reflex saves",
    "traits": ["Archetype"],
    "text": "Your proficiency rank for Reflex saves increases to master."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Sorcerer Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Charisma 14",
    "special": "You cannot select another dedication feat until you have gained two other feats from the sorcerer archetype.",
    "text": "Choose a bloodline. You become trained in the bloodline\u2019s two skills; for each of these skills in which you were already trained, you become trained in a skill of your choice. You cast spells like a sorcerer. You gain access to the Cast a Spell activity. You gain a spell repertoire with two common cantrips from the spell list associated with your bloodline, or any other cantrips you learn or discover. You\u2019re trained in spell attack rolls and spell DCs for your tradition\u2019s spells. Your key spellcasting ability for sorcerer archetype spells is Charisma, and they are sorcerer spells of your bloodline\u2019s tradition. You don\u2019t gain any other abilities from your choice of bloodline.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Basic Blood Potency",
    "level": 4,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Sorcerer Dedication",
    "text": "You gain a 1st- or 2nd-level sorcerer feat.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Basic Bloodline Spell",
    "level": 4,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Sorcerer Dedication",
    "text": "You gain your bloodline\u2019s initial bloodline spell. If you don\u2019t already have one, you also gain a focus pool of 1 Focus Point, which you can Refocus without any special effort. (For more on bloodline spells, see page 194.)",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Basic Sorcerer Spellcasting",
    "level": 4,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Sorcerer Dedication",
    "text": "You gain the basic spellcasting benefits. Each time you gain a spell slot of a new level from the sorcerer archetype, add a spell of the appropriate spell level to your repertoire: a common spell of your bloodline\u2019s tradition, one of your bloodline\u2019s granted spells, or another spell you have learned or discovered.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Advanced Blood Potency",
    "level": 6,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Basic Blood Potency",
    "special": "You can select this feat more than once. Each time you do, you gain another sorcerer feat.",
    "text": "You gain one sorcerer feat. For the purpose of prerequisites, your sorcerer level is half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Bloodline Breadth",
    "level": 8,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Basic Sorcerer Spellcasting",
    "text": "Your repertoire expands, and you can cast more spells of your bloodline\u2019s tradition each day. Increase the number of spells in your repertoire and number of spell slots you gain from sorcerer archetype feats by 1 for each spell level other than your two highest spell levels.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Expert Sorcerer Spellcasting",
    "level": 12,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Basic Sorcerer Spellcasting; master in Arcana, Nature, Occultism, or Religion, depending on bloodline",
    "text": "You gain the expert spellcasting benefits.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=11",
    "name": "Master Sorcerer Spellcasting",
    "level": 18,
    "source": "Core Rulebook pg. 230",
    "archetype": "Sorcerer",
    "prerequisites": "Expert Sorcerer Spellcasting; legendary in Arcana, Nature, Occultism, or Religion, depending on bloodline",
    "traits": ["Archetype"],
    "text": "You gain the master spellcasting benefits."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Wizard Dedication",
    "level": 2,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Intelligence 14",
    "special": "You can\u2019t select another dedication feat until you have gained two other feats from the wizard archetype.",
    "text": "You cast spells like a wizard, gaining a spellbook with four common arcane cantrips of your choice. You gain the Cast a Spell activity. You can prepare two cantrips each day from your spellbook. You\u2019re trained in arcane spell attack rolls and spell DCs. Your key spellcasting ability for wizard archetype spells is Int, and they are arcane wizard spells. You become trained in Arcana; if you were already trained in Arcana, you instead become trained in a skill of your choice.",
    "traits": ["Archetype", "Dedication", "Multiclass"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Arcane School Spell",
    "level": 4,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Wizard Dedication",
    "text": "Select one arcane school of magic. You gain the school\u2019s initial school spell. If you don\u2019t already have one, you gain a focus pool of 1 Focus Point, which you can Refocus by studying. (For more on arcane schools, see page 204.)",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Basic Arcana",
    "level": 4,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Wizard Dedication",
    "text": "You gain a 1st- or 2nd-level wizard feat of your choice.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Basic Wizard Spellcasting",
    "level": 4,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Wizard Dedication",
    "text": "You gain the basic spellcasting benefits. Each time you gain a spell slot of a new level from the wizard archetype, add two common spells of that level to your spellbook.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Advanced Arcana",
    "level": 6,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Basic Arcana",
    "special": "You can select this feat more than once. Each time you select it, you gain another wizard feat.",
    "text": "You gain one wizard feat. For the purpose of meeting its prerequisites, your wizard level is equal to half your character level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Arcane Breadth",
    "level": 8,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Basic Wizard Spellcasting",
    "text": "You can cast more arcane spells each day. Increase the spell slots you gain from wizard archetype feats by 1 for each spell level other than your two highest spell levels.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Expert Wizard Spellcasting",
    "level": 12,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Basic Wizard Spellcasting, master in Arcana",
    "text": "You gain the expert spellcasting benefits.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=12",
    "name": "Master Wizard Spellcasting",
    "level": 18,
    "source": "Core Rulebook pg. 231",
    "archetype": "Wizard",
    "prerequisites": "Expert Wizard Spellcasting, legendary in Arcana",
    "traits": ["Archetype"],
    "text": "You gain the master spellcasting benefits."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=14",
    "name": "Aldori Duelist Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 35",
    "archetype": "Aldori Duelist",
    "prerequisites": "trained in Aldori dueling swords",
    "access": "You are from the Broken Lands region.",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Aldori Duelist archetype.",
    "text": "Your Aldori duelist training teaches you martial techniques and increases your dedication to the Aldori dueling sword. You become trained in your choice of or and in Dueling ; if you were already trained, you become an expert instead. Whenever your proficiency rank in any weapon increases to expert or beyond, you also gain that new proficiency rank with Aldori dueling swords. You gain access to .",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=14",
    "name": "Aldori Parry",
    "level": 4,
    "source": "Lost Omens World Guide pg. 35",
    "archetype": "Aldori Duelist",
    "prerequisites": "Aldori Duelist Dedication",
    "requirements": "You are wielding only an Aldori dueling sword and have your other hand or hands free.",
    "text": "You can parry attacks against you with your . You gain a +2 circumstance bonus to AC until the start of your next turn as long as you continue to meet the requirement.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=14",
    "name": "Duelist's Edge",
    "level": 4,
    "source": "Lost Omens World Guide pg. 35",
    "archetype": "Aldori Duelist",
    "prerequisites": "Aldori Duelist Dedication",
    "trigger": "You roll initiative, and you can observe at least one opponent.",
    "text": "You hone your reaction time through duels and learn to draw your weapon seamlessly as you begin a fight. You gain a +2 circumstance bonus to the triggering initiative roll, and you can immediately Interact to draw your .",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=14",
    "name": "Aldori Riposte",
    "level": 6,
    "source": "Lost Omens World Guide pg. 35",
    "archetype": "Aldori Duelist",
    "prerequisites": "Aldori Parry",
    "requirements": "You are benefiting from Aldori Parry.",
    "trigger": "An opponent within your reach critically fails a Strike against you.",
    "text": "You riposte with your when your enemy leaves an opening. Make a melee Strike or use a action against the triggering opponent using your Aldori dueling sword.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=14",
    "name": "Unnerving Prowess",
    "level": 6,
    "source": "Lost Omens World Guide pg. 35",
    "archetype": "Aldori Duelist",
    "prerequisites": "Aldori Duelist Dedication",
    "trigger": "You critically succeed at a Strike or Disarm with your Aldori dueling sword",
    "text": "Your incredible skill with your blade unnerves your foes. You attempt to the target of your Strike or . This Demoralize attempt does not have the auditory trait, nor do you take a penalty to the check if the target doesn\u2019t understand your language.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=14",
    "name": "Saving Slash",
    "level": 10,
    "source": "Lost Omens World Guide pg. 35",
    "archetype": "Aldori Duelist",
    "prerequisites": "Aldori Duelist Dedication",
    "trigger": "An opponent critically hits you with a melee attack.",
    "traits": ["Archetype"],
    "text": "You quickly whirl your blade, trying to deflect enough momentum to avoid the worst of the attack. Attempt a DC 16 flat check. If you succeed, the attack becomes a normal hit, instead of a critical hit."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=23",
    "name": "Bellflower Dedication",
    "level": 6,
    "source": "Pathfinder #147: Tomorrow Must Burn pg. 75",
    "archetype": "Bellflower Tiller",
    "prerequisites": "Charisma 14, expert in Stealth and Survival, member of the Bellflower Network",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Bellflower tiller archetype.",
    "text": "You dedicate yourself to freeing slaves and escorting them to freedom. You gain a +5-foot status bonus to your Speed. Choose up to six other people to be your \u201ccrop.\u201d Members of your crop can use your Speed for overland travel if it\u2019s higher than their own. Members more than 60 feet from you lose all benefits (from this or other Bellflower tiller feats) of being part of your crop, but they regain those benefits immediately when they return. You can add or remove someone from your crop by spending 10 minutes in conversation with them.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=23",
    "name": "Garden Path",
    "level": 8,
    "source": "Pathfinder #147: Tomorrow Must Burn pg. 75",
    "archetype": "Bellflower Tiller",
    "prerequisites": "Bellflower Dedication",
    "text": "You can guide your crop to move without notice. When you and any of your crop are , you can choose one member of your crop to temporarily gain the benefits of the skill feat until the group is no longer Avoiding Notice. The group rolls two checks instead of one, using the higher die roll. This is a effect.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=23",
    "name": "Practiced Guidance",
    "level": 8,
    "source": "Pathfinder #147: Tomorrow Must Burn pg. 75",
    "archetype": "Bellflower Tiller",
    "prerequisites": "Bellflower Dedication",
    "text": "Making one\u2019s way to safety can be harrowing, but you have extensive practice at helping others along that path. When you roll a success to a member of your crop, you get a critical success instead.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=23",
    "name": "Scarecrow",
    "level": 8,
    "source": "Pathfinder #147: Tomorrow Must Burn pg. 75",
    "archetype": "Bellflower Tiller",
    "prerequisites": "Bellflower Dedication",
    "text": "You fight fiercely to protect your crop. When you hit a creature that is adjacent to two or more members of your crop with a weapon or unarmed attack, you gain a circumstance bonus to your damage roll equal to the number of weapon damage dice. When you hit a creature who has a member of your crop grabbed, that member can attempt to using a reaction.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=23",
    "name": "Tiller's Aid",
    "level": 10,
    "source": "Pathfinder #147: Tomorrow Must Burn pg. 75",
    "archetype": "Bellflower Tiller",
    "prerequisites": "Bellflower Dedication",
    "text": "You can use the reaction to help a member of your crop even if you haven\u2019t prepared to do so.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=23",
    "name": "Tiller's Drive",
    "level": 10,
    "source": "Pathfinder #147: Tomorrow Must Burn pg. 75",
    "archetype": "Bellflower Tiller",
    "prerequisites": "Bellflower Dedication",
    "text": "Your Speed bonus from Bellflower Dedication increases to +10 feet. Members of your crop receive a +5-foot circumstance bonus to Speed.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=23",
    "name": "Cut the Bonds",
    "level": 12,
    "source": "Pathfinder #147: Tomorrow Must Burn pg. 75",
    "archetype": "Bellflower Tiller",
    "prerequisites": "Bellflower Dedication, expert in a melee weapon",
    "traits": ["Archetype", "Attack"],
    "text": "Select a magical effect that has made an adjacent member of your crop clumsy, grabbed, paralyzed, restrained, or slowed. Attempt a counteract check using your attack modifier (including your multiple attack penalty) with a melee weapon with which you have expert proficiency. Your counteract level is half your level rounded up. On a success, you free that member from the effect; on a failure, you can\u2019t attempt to use Cut the Bonds on that effect on that crop member until 24 hours have passed"
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=34",
    "name": "Crystal Keeper Dedication",
    "level": 4,
    "source": "Pathfinder #148: Fires of the Haunted City pg. 74",
    "archetype": "Crystal Keeper",
    "prerequisites": "trained in Elven Lore or Society",
    "special": "You can\u2019t select another dedication feat until you have gained two other feats from the crystal keeper archetype.",
    "text": "You can use Arcana, Occultism, Religion, or Society to Decipher Writing by meditating before a crystal, regardless of the type of writing. When you Decipher Writing and roll a critical failure, you get a failure instead, and when you Decipher Writing and roll a success, you get a critical success instead. Additionally, you gain resistance 10 to damage from hazards associated with crystals.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=34",
    "name": "Crystal Ward Spells",
    "level": 4,
    "source": "Pathfinder #148: Fires of the Haunted City pg. 74",
    "archetype": "Crystal Keeper",
    "prerequisites": "Crystal Keeper Dedication",
    "text": "Your study of crystals and the energies held within a gem\u2019s facets grants you special arcane crystal ward spells, which are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool when you make your next daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to research and memorize the properties of gems. Focus spells are automatically heightened to half your level rounded up. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points. You gain the focus spell, and you are trained in arcane spell attack rolls and spell DCs. Your spellcasting ability is Intelligence.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=34",
    "name": "Simple Crystal Magic",
    "level": 6,
    "source": "Pathfinder #148: Fires of the Haunted City pg. 74",
    "archetype": "Crystal Keeper",
    "prerequisites": "Crystal Keeper Dedication",
    "text": "As long as you meditate before a gemstone worth at least 10 gp as part of your daily preparations, you are capable of seeing magic as flowing runes that reveal information about magic objects, and you can scribe a personal rune that represents you. You gain the and cantrips. You cast these cantrips as arcane innate spells at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=34",
    "name": "Armor Rune Shifter",
    "level": 10,
    "source": "Pathfinder #148: Fires of the Haunted City pg. 75",
    "archetype": "Crystal Keeper",
    "prerequisites": "Crystal Keeper Dedication",
    "text": "You learn the secrets of armor runes by viewing them through gems and can alter them at your discretion. Once per day when you make your daily preparations, you can focus on a rune\u2019s magical energies through a crystal\u2019s facets to alter a single property rune on one suit of armor in your possession to suppress its normal effects and make it function as a different property rune. You can temporarily alter the rune to function as one of the following runes: , , , , , or . The property rune remains altered until you make your next daily preparations. The armor must meet the prerequisites for the temporary rune, and any other runes that required the suppressed rune are also suppressed while the rune is transformed. The rune is obviously altered, and thus the armor can\u2019t be sold as though it had the temporary rune.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=34",
    "name": "Weapon-Rune Shifter",
    "level": 10,
    "source": "Pathfinder #148: Fires of the Haunted City pg. 75",
    "archetype": "Crystal Keeper",
    "prerequisites": "Crystal Keeper Dedication",
    "traits": ["Archetype"],
    "text": "You learn how to alter the magic of weapon runes by using a crystal as a focusing component. Once per day during your daily preparations, you can focus on a rune\u2019s magical energies through a crystal\u2019s facets to alter a single property rune on one weapon in your possession to suppress its normal effects and make it function as a different property rune. You can temporarily alter the rune to function as one of the following runes: , , , , , , , , or . The property rune remains altered until you make your next daily preparations. The weapon must meet the prerequisites for the temporary rune, and any other runes that required the suppressed rune are also suppressed while the rune is transformed. The rune is obviously altered, and thus the weapon can\u2019t be sold as though it had the temporary rune."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Firebrand Braggart Dedication",
    "level": 4,
    "source": "Lost Omens Character Guide pg. 74",
    "archetype": "Firebrand Braggart",
    "prerequisites": "Charisma 14, second mark member of the Firebrands",
    "special": "You can\u2019t select another dedication feat until you have gained two other feats from the Firebrand Braggart archetype.",
    "text": "Your Firebrand training has taught you that achieving something is more satisfying if you boast about it first. You declare a boast about a particular skill action, such as , , or . The first time you attempt this action within the next minute in a context the GM deems both suitably challenging and meaningful, you must roll twice and use the lower result. If you succeed at this check, you gain a +1 circumstance bonus to checks to attempt the same action for 10 minutes. If you fail this check or don\u2019t attempt the action within 1 minute, you instead take a \u20131 circumstance penalty on checks to attempt the same action for 1 hour. If the chosen action can be used with multiple skills, such as or Recall Knowledge, you must specify which skill you are using for that particular action, such as using to Identify Magic, and your bonus or penalty after the boast applies only to checks using that skill for that action. Once you declare a boast about a particular action, you cannot declare a boast about the same action until the next time you make daily preparations, regardless of whether you succeed or fail at the check. Typically a challenging task is one with at least a standard DC for your level, though the difficulty may be higher depending on the situation. A meaningful context is one where the action\u2019s success or failure is relevant to the pursuit of your goals, rather than a boast you made simply to gain a bonus later.",
    "traits": ["Archetype", "Dedication", "Misfortune"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Boaster's Challenge",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 74",
    "archetype": "Firebrand Braggart",
    "prerequisites": "expert in Deception, Diplomacy, or Intimidation; Firebrand Braggart Dedication",
    "text": "You call out a foe, causing them to become flustered and easier to defeat. Select one creature you can see and declare a challenge. For your challenge, attempt a Deception, Diplomacy, or Intimidation check against that creature\u2019s Will DC. Your challenge must include a , , or component and gains the corresponding trait. If you succeed, you gain a +2 status bonus to damage rolls with your weapon or unarmed Strikes against that foe until the end of your next turn; if you have master proficiency in the skill you used, you gain a +4 status bonus instead, and if you\u2019re legendary, you gain a +6 status bonus. On a critical success, the status bonus lasts for 3 rounds instead. Whether you succeed or fail, creatures who witnessed your challenge gain a +4 circumstance bonus to their Will DCs against your attempts to challenge for 1 minute.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Daring Act",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 74",
    "archetype": "Firebrand Braggart",
    "prerequisites": "trained in Acrobatics or Athletics, Firebrand Braggart Dedication",
    "text": "You attempt a death-defying maneuver to distract your enemies. Select one foe within reach and attempt either an Acrobatics or Athletics check against your target\u2019s Reflex DC. If you succeed, you can Stride up to half your Speed (or up to your full Speed if you critically succeed) without triggering reactions from the target due to your movement, and the target is flat-footed against the next melee attack you attempt against it before the end of your turn.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Bravo's Determination",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 75",
    "archetype": "Firebrand Braggart",
    "prerequisites": "expert in Deception, Firebrand Braggart Dedication",
    "trigger": "A foe\u2019s Strike reduces you to 0 Hit Points; you were not at 1 Hit Point and you would not be killed.",
    "criticalsuccess": "You avoid being knocked out and remain at 1 Hit Point.",
    "success": "You avoid being knocked out and remain at 1 Hit Point, but you increase your woundedvalue by 1.",
    "text": "Your confidence borders on self-delusion, but it keeps you going against overwhelming odds. Attempt a Deception check against the attack DC of the triggering Strike. You take a penalty to this check equal to twice your wounded value, if any. If the triggering attack was a critical hit, use the result one degree of success worse than what you rolled.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Great Boaster",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 75",
    "archetype": "Firebrand Braggart",
    "prerequisites": "Charisma 16, Firebrand Braggart Dedication",
    "text": "Your bragging is particularly effective. If you succeed at a boast, you can attempt a great boast about that same skill by using your Firebrand Braggart Dedication action about the same action during the duration of your original boast\u2019s circumstance bonus; this is an exception to the rule that you can\u2019t make another boast about the same action until your next daily preparations. A great boast uses the Firebrand Braggart Dedication action, except that if you succeed, your circumstance bonus increases to +2 and remains for 1 hour. If you fail the great boast, you take a \u20132 circumstance penalty to attempt the same action for 4 hours. Once you declare a great boast about a particular action, you can\u2019t declare a great boast about the same action until the next time you make daily preparations, regardless of whether you succeed or fail at the check. The minimum challenging task for a great boast is one with at least a hard DC for your level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Daring Flourish",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 75",
    "archetype": "Firebrand Braggart",
    "prerequisites": "Daring Act",
    "text": "You make quick use of an opening from your daring stunts. At the end of a successful Daring Act, you can make a melee Strike against the target or attempt to the target. The target is against the Strike you make during Daring Act as well as the next melee attack you attempt against it before the end of your turn.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Demanding Challenge",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 75",
    "archetype": "Firebrand Braggart",
    "prerequisites": "Boaster\u2019s Challenge",
    "text": "If your skill check to challenge a foe is a success, the target of your challenge takes a \u20131 circumstance penalty to attack rolls (or \u20132 if you critically succeed) until the end of your next turn.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=24",
    "name": "Daredevil's Gambit",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 75",
    "archetype": "Firebrand Braggart",
    "prerequisites": "Daring Act",
    "traits": ["Archetype"],
    "text": "If you critically succeed at your Daring Act, you can enter the target\u2019s space and remain there until the beginning of your next turn or until the target moves, whichever comes first. You gain a +2 circumstance bonus to AC, and your target is against your attacks while you are sharing its space in this way. If any creature other than your target hits you with an attack roll while you are sharing your target\u2019s space, attempt a DC 15 flat check. On a success, resolve the attack against the target instead of you, using the same attack roll result that hit you."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Halcyon Speaker Dedication",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 104",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Magaambyan Attendant Dedication, member of the Magaambya of conversant rank",
    "special": "You cannot select another dedication feat until you have gained two other feats from the halcyon speaker archetype.",
    "text": "You devote much of your study to halcyon magic. You gain access to two common Halcyon cantrips and two common 1st-level halcyon spells. In addition to being able to cast your halcyon spells via your arcane or primal spell slots, you also gain a 1st-level halcyon spell slot. You can use your halcyon spell slots to spontaneously cast your halcyon spells.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Dualistic Synergy",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 104",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Halcyon Speaker Dedication",
    "text": "If your next action is to Cast a Spell from your spell slots, you gain a benefit. If the spell is arcane, you can attempt a skill check to with a +1 status bonus to the check after casting the spell, or a +2 status bonus if the spell is 7th level or higher. If the spell is primal, you gain a number of temporary Hit Points equal to the spell\u2019s level for 1 round. If the spell is a halcyon spell, you gain both benefits.",
    "traits": ["Archetype", "Metamagic"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Persistent Creation",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 104",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Halcyon Speaker Dedication",
    "text": "You can cast as an innate spell at will, choosing whether it is arcane or primal each time. The created object lasts until you spend 1 hour not within its immediate vicinity or until it is destroyed. Such objects are called persistent creations. If you cast creation again, any persistent creation you previously created with the spell immediately disintegrates.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Halcyon Spellcasting Initiated",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 104",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Halcyon Speaker Dedication",
    "text": "Your knowledge of halcyon magic increases. You gain two common 2nd-level halcyon spells and two 3rd-level halcyon spells. You also gain a 2nd-level halcyon spell slot and a 3rd-level halcyon spell slot. These and all future halcyon spell slots work like the 1st-level halcyon spell slot you gained from Halcyon Speaker Dedication.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Shared Synergy",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 104",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Dualistic Synergy",
    "text": "You can grant the benefit from Dualistic Synergy to an ally within 30 feet instead of yourself, either allowing that ally to Recall Knowledge, granting that ally temporary Hit Points, or both, depending on the spell\u2019s tradition.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Charged Creation",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 104",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Persistent Creation",
    "text": "Your magic is drawn to your persistent creations. While you are within 30 feet of and have line of effect to your persistent creation, you can use it as the origin point for your line or cone spells. For instance, a could originate from the persistent creation rather than from you.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Flexible Halcyon Spellcasting",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 105",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Halcyon Spellcasting Initiate",
    "text": "You broaden your ability to channel your power into halcyon magic. You gain one more common halcyon spell of each level of halcyon spell you can cast other than your highest (you do not gain an additional cantrip). You also gain one additional halcyon spell slot for each level of halcyon spell you can cast, other than the highest.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Halcyon Spellcasting Adept",
    "level": 14,
    "source": "Lost Omens Character Guide pg. 105",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Halcyon Spellcasting Initiate; master in either Arcana or Nature, expert in the other",
    "text": "You refine your halcyon magic. You gain two common 4th-level halcyon spells and two 5th-level halcyon spells. You also gain a 4th-level halcyon spell slot and a 5th-level halcyon spell slot. Your proficiency rank in either arcane or primal spell DCs and spell attack rolls advances from trained to expert.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Fulminating Synergy",
    "level": 16,
    "source": "Lost Omens Character Guide pg. 105",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Dualistic Synergy",
    "text": "When you draw upon your spells\u2019 synergy, you create a physical manifestation of their magical resonance and invoke it to harm a foe. When you use Dualistic Synergy, choose a damage type: acid, cold, electricity, or fire. In addition to Dualistic Synergy\u2019s normal effect, a foe within 30 feet of you takes an amount of damage of the chosen type equal to the spell\u2019s level. If the spell already deals damage of the chosen type, combine the damage before applying weaknesses and resistances.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Halcyon Spellcasting Sage",
    "level": 18,
    "source": "Lost Omens Character Guide pg. 105",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Halcyon Spellcasting Adept; legendary in either Arcana or Nature, master in the other",
    "text": "Your command over halcyon magic is nearly unmatched. You gain two common 6th-level and 7th-level halcyon spells. You also gain a 6th-level halcyon spell slot and a 7th-level halcyon spell slot. Your proficiency rank in either arcane or primal spell DCs and spell attack rolls advances from expert to master.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=30",
    "name": "Synergistic Spell",
    "level": 20,
    "source": "Lost Omens Character Guide pg. 105",
    "archetype": "Halcyon Speaker",
    "prerequisites": "Halcyon Spellcasting Initiate, Fulminating Synergy, legendary in Arcana and Nature",
    "traits": ["Archetype", "Metamagic"],
    "text": "You combine your synergy and spells into a fantastic web of magic, allowing you to cast two spells at once. If the next action you use is to Cast a Spell from one of your halcyon spell slots, after that spell resolves, you can Cast another Spell as a free action. This spell must be cast from one of your halcyon spell slots and be a spell that would normally take two actions to cast."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=25",
    "name": "Hellknight Dedication",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 84",
    "archetype": "Hellknight",
    "prerequisites": "Hellknight Armiger Dedication, lawful alignment, member of a Hellknight order, passed the Hellknight Test",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Hellknight or Hellknight armigerarchetypes.",
    "text": "You have forged your body to comply with the commands of your mind\u2014orders steeped in the Measure and the Chain. You gain expert proficiency in (or in another skill in which you\u2019re trained of your choice, if you were already an expert in Intimidation). You gain the armor specialization effects of Hellknight plate, and your resistance from that armor specialization is 1 higher than normal. In addition, you gain a +1 circumstance bonus to Intimidation checks while wearing your Hellknight plate.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=25",
    "name": "Sense Chaos",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 84",
    "archetype": "Hellknight",
    "prerequisites": "Hellknight Dedication",
    "text": "You sense chaos as an unsettling feeling of nervous energy. When in the presence of an aura of chaos that is powerful or overwhelming, you eventually detect the aura, though you might not do so instantly and you can\u2019t pinpoint the location. This is a vague sense, similar to humans\u2019 sense of smell. A chaotic creature using a disguise or otherwise trying to hide its presence attempts a check against your Perception DC to hide its aura from you. If the creature succeeds at its Deception check, it is temporarily immune to your Sense Chaos for 1 day.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=25",
    "name": "Blade of Law",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 84",
    "archetype": "Hellknight",
    "prerequisites": "Hellknight Dedication",
    "text": "You call upon the power of law and make a weapon or unarmed Strike against a foe you have witnessed breaking or disrespecting the law or otherwise acting disorderly. The Strike deals two extra weapon damage dice if the target of your Strike is chaotic. Whether or not the target is chaotic, you can convert the physical damage from the attack into lawful damage.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=25",
    "name": "Hell's Armaments",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 84",
    "archetype": "Hellknight",
    "prerequisites": "Hellknight Dedication",
    "traits": ["Archetype"],
    "text": "You\u2019ve trained with your order\u2019s weapon and your Hellknight plate long enough to apply your expertise from other weapons and armor. If you have expert proficiency in any weapon or unarmed attack, you gain expert proficiency in your order\u2019s weapon as well. If you have expert proficiency in any armor or unarmored defense, you gain expert proficiency in Hellknight plate as well."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Hellknight Armiger Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 107",
    "archetype": "Hellknight Armiger",
    "prerequisites": "member of a Hellknight order, trained in heavy armor as well as your order\u2019s favored weapon",
    "access": "You are from Old Cheliax.",
    "special": "You can\u2019t select another dedication feat except dedication feats for higher positions within the Hellknights until you have gained two other feats from the Hellknight armiger archetype.",
    "text": "Your Hellknight training teaches you to terrorize others into compliance, but you also study the structure and hierarchy of Hell. You must survive painful tests of your body and mind called reckonings, which steady your mind against all sorts of trauma. You gain resistance to mental damage equal to 1 + your number of class feats from the Hellknight Armiger archetype and other Hellknight archetypes. You become trained in and Hell ; if you were already trained, you become an expert instead.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Ardent Armiger",
    "level": 4,
    "source": "Lost Omens World Guide pg. 107",
    "archetype": "Hellknight Armiger",
    "prerequisites": "Hellknight Armiger Dedication",
    "text": "You have been trained to resist the manipulations of fiends, and your Hellknight discipline makes you difficult to influence. You gain a +1 circumstance bonus to saves against mental effects that specifically improve your attitude and to your Will DC against someone Coercing you, Demoralizing you, Making an Impression on you, or Making a Request of you. If a mental effect would compel you to act in a way that violates your Hellknight order\u2019s tenets (as determined by the GM), you can attempt to break free from the effect as a reaction triggered by receiving the violating order, and you gain a new Will save against the effect. You can attempt this new save only once for a given effect, even if you are compelled to violate your order\u2019s tenets multiple times.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Diabolic Certitude",
    "level": 4,
    "source": "Lost Omens World Guide pg. 107",
    "archetype": "Hellknight Armiger",
    "prerequisites": "Hellknight Armiger Dedication",
    "trigger": "Your turn begins and you can observe a devil.",
    "text": "Your Hellknight training drilled details of Hell\u2019s denizens deep into your mind. Make an attempt to Recall Knowledge about a you\u2019re observing. If you roll a critical failure on this check, you get a failure instead.",
    "traits": ["Archetype", "Skill"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Mortification",
    "level": 4,
    "source": "Lost Omens World Guide pg. 107",
    "archetype": "Hellknight Armiger",
    "prerequisites": "Hellknight Armiger Dedication",
    "text": "Your reckonings have prepared your body for physical punishment. Choose bludgeoning, piercing, or slashing damage, based on the nature of your physical reckonings. You gain resistance to the chosen damage type equal to your number of class feats from the Hellknight Armiger archetype and other Hellknight archetypes.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Armiger's Mobility",
    "level": 8,
    "source": "Lost Omens World Guide pg. 107",
    "archetype": "Hellknight Armiger",
    "prerequisites": "expert in heavy armor, Hellknight Armiger Dedication",
    "text": "You\u2019ve learned how best to move in heavy armor. When wearing heavy armor, if you meet the Strength requirement, instead of reducing the movement penalty by 5 feet, you reduce the penalty by 10 feet (typically reducing the penalty to 0). If you are a dwarf with the feat, increase your Speed by 5 feet.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Order Training",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 81",
    "archetype": "Hellknight Armiger",
    "prerequisites": "Hellknight Armiger Dedication",
    "text": "You gain the lesser order benefit for the Hellknight order to which you belong.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Advanced Order Training",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 82",
    "archetype": "Hellknight Armiger",
    "prerequisites": "Hellknight Armiger Dedication; Hellknight Dedication or Hellknight Signifer Dedication",
    "text": "You gain the greater order benefit for the Hellknight order to which you belong.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=20",
    "name": "Hellknight Order Cross-Training",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 83",
    "archetype": "Hellknight Armiger",
    "prerequisites": "Hellknight Armiger Dedication; Hellknight Dedication or Hellknight Signifer Dedication",
    "special": "You can select this feat multiple times, gaining the lesser order benefit from a different order each time by training with members of that order.",
    "traits": ["Archetype"],
    "text": "You gain the lesser order benefit of a Hellknight order other than the one to which you belong. This represents your time spent training with members of that order to learn their techniques and teachings. If you aren\u2019t in good standing with a given order, you can\u2019t receive their training."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=26",
    "name": "Hellknight Signifer Dedication",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 85",
    "archetype": "Hellknight Signifer",
    "prerequisites": "spellcasting class feature, Hellknight Armiger Dedication, lawful alignment, member of a Hellknight order, passed the Hellknight Test",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Hellknight signifer or Hellknight armigerarchetypes.",
    "text": "You have bolstered your force of will with the power of the Measure and the Chain. Upon initiation, you receive a signifer mask, often devoid of eyeholes or other decorative features. The mask doesn\u2019t obscure your vision, though it makes it impossible for others to see your eyes. While wearing your signifer\u2019s mask, you gain +1 circumstance bonus to checks to Lie, checks, and Deception DCs against . You gain expert proficiency in Intimidation (or in another skill in which you\u2019re trained of your choice, if you were already an expert in Intimidation) as well as in your choice of Arcana, , , or .",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=26",
    "name": "Masked Casting",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 85",
    "archetype": "Hellknight Signifer",
    "prerequisites": "Hellknight Signifer Dedication",
    "requirements": "You are wearing your signifer\u2019s mask.",
    "trigger": "You begin Casting a Spell.",
    "text": "You harness the magical energy flowing through your eyeless mask to effortlessly protect you from visual effects. You .",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=26",
    "name": "Gaze of Veracity",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 85",
    "archetype": "Hellknight Signifer",
    "prerequisites": "Hellknight Signifer Dedication, ability to cast focus spells",
    "text": "You can channel your mask\u2019s power to pierce through lies and see the truth in any situation. Increase the number of Focus Points in your focus pool by 1. While wearing your mask, you can cast the cleric domain spell as a divine focus spell.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=26",
    "name": "Signifer's Sight",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 85",
    "archetype": "Hellknight Signifer",
    "prerequisites": "Hellknight Signifer Dedication",
    "text": "The magic flowing through your signifer\u2019s mask allows you to see in the dark, and the mask dampens the distraction caused by sudden flashes of bright light. While wearing your signifer\u2019s mask, you gain . Additionally, if you are while wearing your signifer\u2019s mask and the target is concealed only because you are dazzled, you reduce the flat check DC to target that creature from 5 to 3.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=26",
    "name": "Signifer Armor Expertise",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 85",
    "archetype": "Hellknight Signifer",
    "prerequisites": "Hellknight Signifer Dedication",
    "traits": ["Archetype"],
    "text": "You\u2019ve spent enough time helping your comrades equip medium and heavy armor that you spread your own expertise to those armors as well. If you have expert proficiency in any armor or unarmored defense, you also gain expert proficiency in medium and heavy armor."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=28",
    "name": "Knight Reclaimant Dedication",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 95",
    "archetype": "Knight Reclaimant",
    "prerequisites": "trained in Survival and Stealth, any non-evil alignment, member of the Knights of Lastwall of knight rank",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Knight Reclaimant archetype.",
    "text": "You have sworn the Crimson Oath and become a full member of the Crimson Reclaimers. You gain expert proficiency in Stealth and Survival. Whenever you roll a success on a saving throw against an undead\u2019s special ability, you get a critical success instead. This applies to any abilities that come from being undead, including an undead\u2019s innate spells (but not its prepared or spontaneous spells).",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=28",
    "name": "Invoke the Crimson Oath",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 95",
    "archetype": "Knight Reclaimant",
    "prerequisites": "Knight Reclaimant Dedication",
    "text": "You can invoke the Crimson Oath to unleash blasts of ruby energy from your weapon. You gain the focus spell. If you don\u2019t already have one, you gain a focus pool of 1 Focus Point, which you can regain using the Refocus activity to recite the Crimson Oath and meditate on its teachings; if you already have a focus pool, increase the number of Focus Points in your focus pool by 1. Your knight reclaimant focus spells are divine spells; when you gain this feat, you become trained in divine spell attacks and spell DCs.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=28",
    "name": "Survivor of Desolation",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 95",
    "archetype": "Knight Reclaimant",
    "prerequisites": "Knight Reclaimant Dedication",
    "text": "You gain a +2 circumstance bonus to saving throws against unnatural weather events or environmental hazards occurring in blighted or otherwise unnaturally marred regions. If you roll a success on a saving throw against such an effect, you get a critical success instead; if you roll a critical failure, you get a failure instead. This does not apply to unnatural events created or directed by active effects, such as spells that create anomalous weather or hazardous areas.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=28",
    "name": "Blade of the Crimson Oath",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 95",
    "archetype": "Knight Reclaimant",
    "prerequisites": "Knight Reclaimant Dedication",
    "text": "You call upon the Crimson Oath to smite undead and then make a weapon or unarmed Strike against an undead foe. The Strike deals two extra weapon damage dice, and you can convert all the physical damage from the attack into positive damage.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=28",
    "name": "Reaper of Repose",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 95",
    "archetype": "Knight Reclaimant",
    "prerequisites": "Knight Reclaimant Dedication, master proficiency in a weapon",
    "traits": ["Archetype"],
    "text": "Your skill and fervor allow you to pierce undead defenses and exploit their weaknesses. When you make an attack using a weapon with which you have master proficiency and hit an undead creature, you ignore 5 points of the creature\u2019s resistances, and the undead\u2019s weaknesses are 2 higher against your attack."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=27",
    "name": "Knight Vigilant",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 94",
    "archetype": "Knight Vigilant",
    "prerequisites": "trained in Religion, any good alignment, member of the Knights of Lastwall of knight rank",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Knight Vigilant archetype.",
    "text": "You are dedicated to the cause of the Shining Sentinels. You gain expert proficiency in . When you are between an ally and a foe and would provide lesser cover to your ally against the foe\u2019s attacks, you twist to become even more obtrusive, providing standard cover instead.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=27",
    "name": "Unshakable Idealism",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 94",
    "archetype": "Knight Vigilant",
    "prerequisites": "Knight Vigilant, expert in Will saves",
    "text": "Your faith and hope can\u2019t be shaken, and you won\u2019t flee when lives are at stake. You gain a +1 circumstance bonus on saves against effects and effects that inflict despair. When you would gain the condition, you can choose to stand your ground and be for the effect\u2019s duration as well, preventing you from running and allowing you to re-enter the fight more quickly when the effect ends.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=27",
    "name": "Endure Death's Touch",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 94",
    "archetype": "Knight Vigilant",
    "prerequisites": "Knight Vigilant, expert in medium or heavy armor",
    "requirements": "You are wearing medium or heavy armor in which you have expert proficiency.",
    "trigger": "An undead hits you with an unarmed attack.",
    "text": "Your conviction redirects the undead\u2019s attack through your armor and then harmlessly away. You gain resistance 5 to physical damage and resistance 10 to negative damage against the triggering attack. You gain a +2 circumstance bonus on any saving throws against effects from the undead\u2019s natural attack; if you succeed at the saving throw, you get a critical success instead.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=27",
    "name": "Aegis of Arnisant",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 94",
    "archetype": "Knight Vigilant",
    "prerequisites": "Knight Vigilant, Shield Block, master in Religion",
    "requirements": "You are wielding a shield.",
    "trigger": "An enemy casts a spell that targets you or an ally within 15 feet of you",
    "text": "Inspired by the tale of Arnisant, you transform your shield into a magic ward. Until the beginning of your next turn, you gain the following reaction: You interpose your shield\u2019s ward against the spell. Attempt a check, using your Religion modifier as your counteract modifier. On a success, the spell is counteracted and your shield takes damage equal to four times the spell level as it absorbs and disperses the magical energy. On a failure, the shield takes damage equal to twice the spell\u2019s level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=27",
    "name": "Knight in Shining Armor",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 94",
    "archetype": "Knight Vigilant",
    "prerequisites": "Knight Vigilant; expert in light armor, medium armor, or unarmored defense; trained in heavy armor",
    "traits": ["Archetype"],
    "text": "As a knight in shining armor, you train daily in the heaviest armor, expanding your expertise to heavy armor. You gain expert proficiency in heavy armor."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=15",
    "name": "Lastwall Sentry Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 47",
    "archetype": "Lastwall Sentry",
    "prerequisites": "member of the Knights of Lastwall, Shield Block",
    "access": "You are from the Eye of Dread region.",
    "special": "You can't select another dedication feat until you have gained two other feats from the Lastwall sentry archetype.",
    "text": "You\u2019ve sworn yourself as a sentry for the Knights of Lastwall, the first line of defense against incursions by the Whispering Tyrant throughout Golarion. You become trained in and in Undead ; if you were already trained, you become an expert instead. Finally, you gain the fighter feat.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=15",
    "name": "Eye of Ozem",
    "level": 4,
    "source": "Lost Omens World Guide pg. 47",
    "archetype": "Lastwall Sentry",
    "prerequisites": "Lastwall Sentry Dedication, expert in Perception",
    "text": "You\u2019ve learned how to spot danger at a distance, allowing you to serve as a sentry with ease. You gain a +2 circumstance bonus to initiative rolls when using Perception, and when you\u2019re Scouting, you grant your allies a +2 circumstance bonus instead of +1.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=15",
    "name": "Necromantic Resistance",
    "level": 4,
    "source": "Lost Omens World Guide pg. 47",
    "archetype": "Lastwall Sentry",
    "prerequisites": "Lastwall Sentry Dedication",
    "text": "As part of your training, you\u2019ve inured yourself against necromancy through repeated exposure. You gain a +1 circumstance bonus to saves against necromancy effects and gain resistance to negative damage equal to half your level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=15",
    "name": "Grave Sense",
    "level": 6,
    "source": "Lost Omens World Guide pg. 47",
    "archetype": "Lastwall Sentry",
    "prerequisites": "Lastwall Sentry Dedication",
    "text": "Your time spent hunting the undead allows you to sense them. You sense undead as a similar to a human\u2019s sense of smell, an uncomfortable sensation akin to smelling something cloying and rotting. When in proximity to the undead, you eventually sense their presence, though you might not do so instantly, and you can\u2019t pinpoint their location. An undead using a disguise or otherwise trying to hide its presence must attempt a check against your Perception DC to hide its presence from you. If the creature succeeds at its Deception check, it is then temporarily immune to your Grave Sense for 1 day.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=15",
    "name": "Necromantic Tenacity",
    "level": 8,
    "source": "Lost Omens World Guide pg. 47",
    "archetype": "Lastwall Sentry",
    "prerequisites": "Necromantic Resistance",
    "text": "Your training against necromantic effects allows you to escape the worst of their touch. If you roll a success on a saving throw against a necromancy effect, you get a critical success instead; if you roll a critical failure on such a save, you get a failure instead.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=15",
    "name": "Lastwall Warden",
    "level": 10,
    "source": "Lost Omens World Guide pg. 47",
    "archetype": "Lastwall Sentry",
    "prerequisites": "Lastwall Sentry Dedication",
    "traits": ["Archetype"],
    "text": "You use your shield to protect your allies, not just yourself, especially against the undead. When you have a shield raised, you can use your reaction when an attack is made against an ally adjacent to you, in addition to its usual trigger. If you do, the shield prevents that ally from taking damage instead of you, following the normal rules for a . If an undead makes an attack against an ally within 10 feet, you can Step to become adjacent to your ally and then use as part of the same reaction."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=22",
    "name": "Lion Blade Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 131",
    "archetype": "Lion Blade",
    "prerequisites": "member of the Lion Blades, trained in Performance",
    "access": "You are from Taldor.",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Lion Blade archetype.",
    "text": "Your lion blade spy training helps you conceal yourself and your identity. You become trained in your choice of or and in Espionage ; if you were already trained, you become an expert instead. You never take circumstance penalties for attempting to take a disguise of a different ancestry, age, and so on, as long as the disguised form is appropriate for your size.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=22",
    "name": "Lost in the Crowd",
    "level": 4,
    "source": "Lost Omens World Guide pg. 131",
    "archetype": "Lion Blade",
    "prerequisites": "Lion Blade Dedication",
    "text": "You\u2019ve learned how to move as one with crowds and hide among them, vanishing into a busy street in the blink of an eye. You move at full Speed in crowds and can use cover from crowds to Hide and Sneak, gaining a +2 circumstance bonus on your Stealth checks when in a crowd of at least 10 creatures and a +4 circumstance bonus on your Stealth checks when in a crowd of at least 100 creatures.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=22",
    "name": "Crowd Mastery",
    "level": 6,
    "source": "Lost Omens World Guide pg. 131",
    "archetype": "Lion Blade",
    "prerequisites": "Lost in the Crowd",
    "text": "You use the crowd to your advantage, diverting your foes\u2019 attention to potential hidden dangers in the crowd. When determining if your foe is flanked, treat all squares occupied by a crowd as if they were occupied by an ally with a melee reach of 5 feet.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=22",
    "name": "Expeditious Advance",
    "level": 6,
    "source": "Lost Omens World Guide pg. 131",
    "archetype": "Lion Blade",
    "prerequisites": "Lion Blade Dedication",
    "requirements": "You are unarmored or wearing light armor.",
    "text": "You advance and retreat quickly. You gain a +10-foot status bonus to your speed.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=22",
    "name": "Spy's Countermeasures",
    "level": 10,
    "source": "Lost Omens World Guide pg. 131",
    "archetype": "Lion Blade",
    "prerequisites": "Lion Blade Dedication",
    "text": "You\u2019ve learned how to analyze and fake your responses to the most common magic used against spies. Whenever you succeed at your save against a divination or mental effect, you can Identify Magic to identify the spell as a free action triggered when you succeed, even if you didn\u2019t notice the spell being cast. If you successfully identify a divination effect targeting you and the spell would normally fail or have no effect, you can create a substitute result, causing the spell\u2019s caster to think the spell succeeded, with a result of your choice. If you successfully identify a mental effect targeting you and the spell would normally fail or have no effect, you can make it appear as if you were affected and attempt to play along with the spell; if the spell normally establishes a mental link, it functions normally but you can disregard any commands you receive through the link.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=22",
    "name": "Flicker",
    "level": 12,
    "source": "Lost Omens World Guide pg. 131",
    "archetype": "Lion Blade",
    "prerequisites": "Lion Blade Dedication",
    "traits": ["Archetype"],
    "text": "You use your movements and disguises to make yourself a flickering blur. You gain concealment until your next turn. As usual for concealment involving an obvious visual manifestation, you can\u2019t use this concealment to Hide."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=16",
    "name": "Living Monolith Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 59",
    "archetype": "Living Monolith",
    "prerequisites": "Ancient Osiriani and Sphinx languages, trained in Crafting",
    "access": "You are from the Golden Road region.",
    "special": "You cannot select another dedication feat until you have gained two other feats from the living monolith archetype.",
    "text": "You\u2019ve begun to inscribe a magical stone called a ka stone that you will some day tie to your soul. You gain knowledge of Ancient Osirion and a connection to your nascent ka stone . If you fail a recovery check while , your dying condition does not increase; if you critically fail, your dying condition increases by only 1. You become trained in Ancient Osirion , or expert if you were already trained.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=16",
    "name": "Ka Stone Ritual",
    "level": 4,
    "source": "Lost Omens World Guide pg. 59",
    "archetype": "Living Monolith",
    "prerequisites": "Living Monolith Dedication, a sphinx or living monolith with this feat performs a ritual with you",
    "activate": "(envision), or a different activation if otherwise specified\r\n;",
    "actions": "Two Actions",
    "frequency": "once per day;",
    "effect": "You cast enlargeon yourself or use one of the other activated abilities granted by a later Living Monolith feat.",
    "text": "You inscribe your true name on your ka stone , as well as oaths to gods and pharaohs, and embed it in your forehead in a special ritual with a sphinx or with a living monolith who already has this feat. The ka stone is an invested magic item that you automatically invest each day. It can\u2019t be removed without your permission, nor can it be dispelled, and you can never lose investiture in the ka stone. Its Bulk is negligible. The ka stone grants you a +1 item bonus to saves against death effects and negative effects, which increases to +2 at 8th level, +3 at 14th level, and +4 at 20th level.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=16",
    "name": "Stone Blood",
    "level": 6,
    "source": "Lost Omens World Guide pg. 59",
    "archetype": "Living Monolith",
    "prerequisites": "Ka Stone Ritual",
    "text": "You can selectively stop your bleeding with ease. Reduce the DC of flat checks to stop persistent bleed damage you have from 15 to 10, and you can use a single action that has the trait to gain an early flat check without physically binding the wounds. You recover naturally from the condition twice as quickly as normal.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=16",
    "name": "Fortified Flesh",
    "level": 8,
    "source": "Lost Omens World Guide pg. 59",
    "archetype": "Living Monolith",
    "prerequisites": "Ka Stone Ritual",
    "text": "Your flesh takes on the hardness of stone. You gain resistance to physical damage (except adamantine) equal to your number of class feats from the Living Monolith archetype.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=16",
    "name": "Attunement to Stone",
    "level": 10,
    "source": "Lost Omens World Guide pg. 59",
    "archetype": "Living Monolith",
    "prerequisites": "Ka Stone Ritual",
    "text": "You become attuned to the stone around you. When in contact with a stone surface, you gain tremorsense (imprecise) 5 feet along that surface, and you can activate your ka stone to cast .",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=16",
    "name": "Judgement of the Monolith",
    "level": 12,
    "source": "Lost Omens World Guide pg. 59",
    "archetype": "Living Monolith",
    "prerequisites": "Ka Stone Ritual",
    "text": "You can use the oaths bound in your ka stone to compel the truth from the living and the dead. You can activate your ka stone to target a single living creature, causing that creature to experience the effects of being in a . You can also activate it with a 10-minute activation (envision) to cast .",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=16",
    "name": "Stone Communion",
    "level": 14,
    "source": "Lost Omens World Guide pg. 59",
    "archetype": "Living Monolith",
    "prerequisites": "Ka Stone Ritual",
    "traits": ["Archetype"],
    "text": "You gain a unique communion with the earth and stones. You learn the language and you can Activate your ka stone with a 10-minute activation (envision) to cast ."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Magaambyan Attendant Dedication",
    "level": 2,
    "source": "Lost Omens Character Guide pg. 101",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "trained in Arcana or Nature, member of the Magaambya of attendant rank",
    "special": "You cannot select another dedication feat other than Halcyon Speaker Dedicationuntil you have gained two other feats from the Magaambyan Attendant or halcyon speakerarchetype.",
    "text": "You devote much of your study to halcyon magic. You gain the ability to cast a single or cantrip of your choice, (as is normal for cantrips, it is heightened to a spell level equal to half your level, rounded up). If you weren\u2019t already, you become trained in that tradition\u2019s spell DCs and spell attack rolls, with Intelligence as your spellcasting ability if you choose arcane or Wisdom as your spellcasting ability if you choose primal. Regardless of whether you choose an arcane or primal cantrip, you also either become trained in Arcana or Nature, or an expert in one of those skills in which you were already trained. When you gain this feat, choose to affiliate with the Cascade Bearers, Emerald Boughs, Rain\u2013Scribes, Tempest-Sun Mages, or Uzunjati. This grants you additional feats available to only that branch. Special You cannot select another dedication feat other than Halcyon Speaker",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Mask Familiar",
    "level": 4,
    "source": "Lost Omens Character Guide pg. 101",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication",
    "maskfreeze": ": When in mask form, your familiar can hide its obvious supernatural qualities to pass as a simple, unassuming mask. It doesn\u2019t need to Impersonate to fool a passing glance, and it gains a +4 circumstance bonus to its Deception DC against an active observer Seekingor otherwise studying it.",
    "text": "Your mask takes on a personality of its own, allowing it to serve as your . Though you can still wear it as a mask, you can detach it from your face to grant it a bodily form of colored light that allows it to move around; usually, this is a miniature form of the animal the mask represents. Detaching or reattaching the familiar to transform it is a two-action activity. Even in mask form, the familiar can move around on its master\u2019s face and speaks in a distinct voice (if it can talk). It is easily recognized as more than a simple mask unless the familiar succeeds at a check to a mask. Other than its appearance and the fact that it can be worn, it functions as other familiars. Your mask familiar has access to the mask freeze familiar ability",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Adaptive Mask Familiar",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 101",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Mask Familiar",
    "text": "Your mask familiar adapts quickly to material form, allowing it to gain more familiar and master abilities. You select four master and familiar abilities each day instead of two.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Cascade Bearer's Flexibility",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 101",
    "archetype": "Magaambyan Attendent",
    "frequency": "once per day",
    "prerequisites": "Magaambyan Attendant Dedication, Cascade Bearers affiliation",
    "requirements": "You haven\u2019t yet acted on your turn.",
    "text": "You call upon your Cascade Bearer training to help you adjust a spell for the current situation. Until the end of your turn, you gain a single from the druid class or the wizard class that has a level requirement of no more than half your level.",
    "traits": ["Archetype", "Metamagic"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Emerald Boughs Accustomation",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 102",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication, Emerald Boughs affiliation, expert in Society",
    "text": "You are comfortable and socially capable in almost any cultural context. When you use the Society skill to , if you roll a critical failure, you get a failure instead; if you roll a success, you get a critical success instead; and if you roll a critical success, you can provide for another additional creature. Furthermore, when you attempt a Society check to about cultural practices and roll a critical failure, you get a failure instead.",
    "traits": ["Archetype", "Skill"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Rain-Scribe Sustenance",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 102",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication, Rain-Scribes affiliation",
    "text": "You use the power of your Rain-Scribe magic to draw on a stream of primal power for sustenance. You don\u2019t need to eat or drink and need only 6 hours of rest to feel well rested. You must still rest at least 8 hours and spend 1 hour of preparation to regain resources usable only a limited number of times per day, such as spell slots. You can draw on primal power to stay awake and alert while otherwise resting your body and mind, gaining the full benefits of an 8-hour rest without falling asleep. When you do, you lose the other benefits of Rain- Scribe Sustenance for 1 week while your primal energies recharge.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Tempest-Sun Redirection",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 102",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication, Tempest-Sun Mages affiliation",
    "text": "If the next action you use is to Cast a Spell from your spell slots that damages other creatures, you can bend some of that spell\u2019s offensive energy, protecting allies in the area and boosting your own defenses against certain foes. Select any number of targets of the spell and reduce the spell\u2019s damage to those targets by an amount equal to the spell\u2019s level. Until your next turn, when one of those targets damages you, that damage is reduced by twice the spell\u2019s level.",
    "traits": ["Archetype", "Metamagic"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Uzunjati Storytelling",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 102",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication, Uzunjati affiliation, master in a Recall Knowledge skill",
    "text": "You tell a quick story or begin telling a longer tale. This is most useful when you want to prove your scholarly credibility or impress someone quickly. Roll a check with a skill that can be used to in which you have expert proficiency, using the result entry for the action. Like Performing, Storytelling rarely has an effect on its own, but it might influence the DCs of subsequent Diplomacy checks against the observers\u2014or even change their attitudes\u2014if the GM sees fit. This action is not a Performance and cannot be used in place of anything that requires you to Perform.",
    "traits": ["Archetype", "Concentrate", "Skill"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Cascade Bearer's Spellcasting",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 103",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication, Cascade Bearers affiliation",
    "text": "Your Cascade Bearer training allows you to broaden the horizons of your halcyon spells further than most Magaambyans, weaving in spiritual magic. You can select halcyon spells from the or spell lists in additional to the arcane or primal spell lists, though they are still halcyon spells (so you choose when casting if they are arcane or primal spells). You gain a halcyon cantrip and a halcyon 1st-level spell.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Emerald Boughs Hideaway",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 103",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication, Emerald Boughs affiliation",
    "text": "You use Emerald Bough techniques to create a small extradimensional space called a hideaway that lasts as long as you are conscious. The hideaway functions as a , but has no Bulk and takes no hands; it holds one object with a maximum Bulk equal to your highest mental ability score modifier; as you open the hideaway with pure thought, activating it to retrieve an item is a free action with the envision component instead of a single action with the Interact component. The hideaway\u2019s access point appears as an obviously magical gap within 1 foot of your body. Only you can access the hideaway; you can you use an Interact action each round to physically hold it open for another person. A successful spell or similar effect against your spell DC and the hideaway\u2019s counteract level of 2 expels the object; the object is also expelled if you become unconscious. After a successful dispel magic  spell or when you become conscious again, the hideaway immediately reforms with no additional action from you. You can also dismiss the hideaway (if it is empty) or re-form it using a single action with the envision component.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Rain-Scribe Mobility",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 103",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Magaambyan Attendant Dedication, Rain- Scribes affiliation",
    "text": "You surround yourself in a mantle of Rain-Scribe magic and Stride twice; difficult terrain does not reduce your Speed, even if the difficult terrain has been manipulated by magic. Your magic clears the difficult terrain in each square you entered; until your next turn, those squares aren\u2019t difficult terrain for any creature walking through them (or are normal difficult terrain if they were previously greater difficult terrain).",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Tempest-Sun Shielding",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 103",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Tempest-Sun Redirection",
    "trigger": "You or an ally within 30 feet takes damage.",
    "text": "You transform unrealized spell energy into a protective shield. If you\u2019re a spontaneous spellcaster, expend a spell slot; if you\u2019re a prepared spellcaster, expend a spell prepared in a spell slot. Reduce the triggering damage by an amount equal to four times the level of the expended slot or spell.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=29",
    "name": "Uzunjati Recollection",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 103",
    "archetype": "Magaambyan Attendent",
    "prerequisites": "Uzunjati Storytelling, master in a Recall Knowledge skill",
    "traits": ["Archetype", "Skill"],
    "text": "You tell a story spontaneously from nearly forgotten facts, delving into your memory and entertaining your audience in the process. with a skill in which you have master proficiency, then use Uzunjati Storytelling with the same skill. You gain a +1 circumstance bonus to your skill check for Uzunjati Storytelling from the added details."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=19",
    "name": "Magic Warrior Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 95",
    "archetype": "Magic Warrior",
    "prerequisites": "ability to cast focus spells",
    "access": "You are from the Mwangi Expanse.",
    "special": "You cannot select another dedication feat until you have gained two other feats from the magic warrior archetype.",
    "text": "You have taken up a nameless mask and sworn the oath of the magic warriors. You become trained in your choice of or and in Magic Warrior ; if you were already trained in the skill, you become an expert instead. You hide your identity behind a mask representing an animal of your choice, corresponding to one of the general animal types in the animal form spell. You gain a +1 circumstance bonus to saves against divination effects, though sometimes refusing to remove your mask can cause issues in areas that don\u2019t respect or understand the magic warrior tradition. Once you take this feat, if another creature ever learns your true face or name, you lose your abilities from this archetype. Close allies who knew of your decision to take the mask before your dedication don\u2019t break this taboo unless they tell someone else. To regain your abilities, you must discard your mask and obtain a new one of a different animal, then retrain Magic Warrior Dedication into a new Magic Warrior Dedication with your new mask. Your focus spells from the magic warrior archetype are the same tradition as your other spells (choose one if you have spells from multiple traditions).",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=19",
    "name": "Magic Warrior Aspect",
    "level": 4,
    "source": "Lost Omens World Guide pg. 95",
    "archetype": "Magic Warrior",
    "prerequisites": "Magic Warrior Dedication",
    "text": "You can alter your form to gain an aspect of the animal your mask represents. You gain the focus spell.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=19",
    "name": "Magic Warrior Transformation",
    "level": 4,
    "source": "Lost Omens World Guide pg. 95",
    "archetype": "Magic Warrior",
    "prerequisites": "Magic Warrior Dedication",
    "text": "You can transform fully into the animal your mask represents. You gain the focus spell.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=19",
    "name": "Nameless Anonymity",
    "level": 6,
    "source": "Lost Omens World Guide pg. 95",
    "archetype": "Magic Warrior",
    "prerequisites": "Magic Warrior Dedication",
    "traits": ["Archetype"],
    "text": "Your mask protects you further from divination. Once per day, you can cast on yourself, heightened to the highest level of spell you can cast; the spell ends immediately if your mask is removed for even a moment."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Pathfinder Agent Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 23",
    "archetype": "Pathfinder Agent",
    "prerequisites": "member of the Pathfinder Society",
    "access": "You are from Absalom.",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Pathfinder Agent archetype.",
    "text": "Your Pathfinder training has broadened your horizons and made you more flexible at various skills, since you never know when you might need an obscure skill to complete your mission. You become trained in one skill of your choice, or expert in a skill of your choice in which you were trained. You also become trained in Pathfinder , or an expert if you were already trained. When using a skill untrained, your proficiency bonus is equal to your level instead of 0. You gain access to .",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Careful Explorer",
    "level": 4,
    "source": "Lost Omens World Guide pg. 23",
    "archetype": "Pathfinder Agent",
    "prerequisites": "Pathfinder Agent Dedication",
    "text": "You\u2019ve explored enough dusty tombs and hidden vaults to gain a sixth sense about traps, and you sometimes notice them even when you\u2019re not trying to. Even if you aren\u2019t Searching in exploration mode, you get a check to find traps that normally require you to Search for them. You still need to meet any other requirements to find the trap.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Deft Cooperation",
    "level": 4,
    "source": "Lost Omens World Guide pg. 23",
    "archetype": "Pathfinder Agent",
    "prerequisites": "Pathfinder Agent Dedication",
    "text": "When you set things up to help your allies, you also gain some of the fruits of your labors. When you successfully an attack roll or AC, you gain a +1 circumstance bonus to attack rolls or AC against that enemy until the end of your next turn, whichever you granted to your ally. When you successfully Aid a skill check, if you attempt the exact same skill check (not just using the same skill, but using it for the same purpose, for instance a check to Climb the same wall) on your next turn, you gain a +1 circumstance bonus to your skill check.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Thorough Reports",
    "level": 4,
    "source": "Lost Omens World Guide pg. 23",
    "archetype": "Pathfinder Agent",
    "prerequisites": "Pathfinder Agent Dedication",
    "text": "Your reports are thorough and informative, and putting your thoughts to paper helps you retain the information. Keep track of each type of creature you successfully identify with . When attempting checks against creatures on your list in later encounters, you gain a +2 circumstance bonus, and you learn an additional fact about such creatures on a success.",
    "traits": ["Archetype", "Skill"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Wayfinder Resonance Tinkerer",
    "level": 4,
    "source": "Lost Omens World Guide pg. 23",
    "archetype": "Pathfinder Agent",
    "prerequisites": "Pathfinder Agent Dedication",
    "actions": "Single Action",
    "text": "You can use the unusual resonance of your to grant it additional effects. Choose one cantrip from the arcane, divine, occult, or primal list. You can activate your to cast that cantrip at will. Additionally, you can Activate your with a (envision) activation to transform it into a nondescript pin or brooch to hide your affiliation with the Pathfinder Society. This transformation lasts for 1 hour.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Forced Entry",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 112",
    "archetype": "Pathfinder Agent",
    "prerequisites": "expert in Athletics, Pathfinder Agent Dedication",
    "text": "You are trained to preserve the archaeological value of your location when entering. You don\u2019t take a penalty to doors, windows, or containers without a crowbar. If you roll a success on a check to Force Open, you get a critical success instead.",
    "traits": ["Archetype", "Skill"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Recognize Threat",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 112",
    "archetype": "Pathfinder Agent",
    "prerequisites": "master in a Recall Knowledgeskill, Pathfinder Agent Dedication",
    "requirements": "You have master proficiency in a skill to identify the triggering creature.",
    "trigger": "Your first turn of an encounter begins, and you can see a creature.",
    "text": "You quickly assess the threat so you can relay the information to your team. Attempt a Recall Knowledge check against the triggering creature.",
    "traits": ["Archetype", "Skill"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Everyon Duck!",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 112",
    "archetype": "Pathfinder Agent",
    "prerequisites": "Pathfinder Agent Dedication",
    "trigger": "You fail, but don\u2019t critically fail, an attempt to Disable a Deviceon a trap.",
    "text": "You intentionally set off the trap, but you take special precautions to protect yourself and your allies from the trap\u2019s effects. For the next 2 rounds, if the trap rolls a critical success on an attack roll, it gets a normal success instead, and if anyone rolls a critical failure on their saving throw against the trap, they get a normal failure instead.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=13",
    "name": "Educated Assessment",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 112",
    "archetype": "Pathfinder Agent",
    "prerequisites": "Pathfinder Agent Dedication",
    "traits": ["Archetype", "Secret"],
    "text": "You attempt to about a creature, and the GM uses the same secret roll result against the creature\u2019s or DC, giving you the information from a . You might get a different degree of success on the Recall Knowledge check than what you get for the Battle Assessment. If you have the Battle Assessment feat, you gain the effects of Educated Assessment whenever you Recall Knowledge (such as with the feat)."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=17",
    "name": "Red Mantis Assassin Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 71",
    "archetype": "Red Mantis Assassin",
    "prerequisites": "trained in sawtooth sabers, deity is Achaekek, lawful evil alignment, member of the Red Mantis assassins",
    "access": "You are from Mediogalti Island.",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Red Mantis assassin archetype.",
    "text": "You have learned how to stalk your foes and slay them with a sawtooth sabre. You become trained in and Assassin ; if you were already trained, you become an expert instead. Whenever your proficiency in any weapon increases to expert or beyond, you also gain that new proficiency with .",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=17",
    "name": "Basic Red Mantis Magic",
    "level": 4,
    "source": "Lost Omens World Guide pg. 71",
    "archetype": "Red Mantis Assassin",
    "prerequisites": "trained in Religion, Red Mantis Assassin Dedication",
    "text": "You have learned limited divine magic from your Red Mantis training. You gain the activity. You\u2019re a prepared spellcaster, able to prepare two cantrips and one 1st-level spell each day. You prepare these spells from a Red Mantis assassin spellbook, similar to a wizard\u2019s, containing three cantrips and two 1st-level spells. All the spells in your Red Mantis assassin spellbook, from this and later feats, must be either transmutation or illusion spells from the arcane spell list or a spell from the following list: , , , , , , , , . Regardless of their usual magical tradition, your Red Mantis assassin spells are divine spells, as are any Red Mantis focus spells you gain. You can prepare two cantrips and one 1st-level spell each day from those found in your Red Mantis assassin spellbook. You\u2019re trained in spell attack rolls and spell DCs for casting divine spells. Your key spellcasting ability for these spells is Charisma.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=17",
    "name": "Advanced Red Mantis Magic",
    "level": 6,
    "source": "Lost Omens World Guide pg. 71",
    "archetype": "Red Mantis Assassin",
    "prerequisites": "Basic Red Mantis Magic",
    "text": "Your Red Mantis magical training has improved. Add two 2nd-level spells to your Red Mantis assassin spellbook. You gain a 2nd-level spell slot that you can use to prepare a spell from your Red Mantis assassin spellbook. At 8th level, add two 3rd-level spells to your Red Mantis assassin spellbook. You gain a 3rd-level spell slot that you can use to prepare a spell from your Red Mantis assassin spellbook. At 10th level, add two 4th-level spells to your Red Mantis assassin spellbook. You gain a 4th-level spell slot that you can use to prepare a spell from your Red Mantis assassin spellbook.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=17",
    "name": "Crimson Shroud",
    "level": 6,
    "source": "Lost Omens World Guide pg. 71",
    "archetype": "Red Mantis Assassin",
    "frequency": "A number of times per day equal to your number of class feats from the Red Mantis assassin archetype",
    "prerequisites": "Red Mantis Assassin Dedication",
    "text": "You swathe yourself in a veil of red mist for 1 minute. While the shroud is active, you gain fast healing equal to half your level. You can Interact with your shroud, swirling it around you, to gain a +1 circumstance bonus to AC until the beginning of your next turn. Finally, if you die while the shroud is active, you can choose to have your entire body vanish into red mist, leaving behind only your gear; you make this choice when you activate Crimson Shroud.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=17",
    "name": "Mantis Form",
    "level": 8,
    "source": "Lost Omens World Guide pg. 71",
    "archetype": "Red Mantis Assassin",
    "prerequisites": "Basic Red Mantis Magic",
    "traits": ["Archetype"],
    "text": "You gain the focus spell. If you don\u2019t already have one, you gain a focus pool of 1 Focus Point, which you can Refocus by praying to Achaekek or researching your assigned kill."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=21",
    "name": "Runescarred Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 119",
    "archetype": "Runescarred",
    "prerequisites": "trained in Arcana",
    "access": "You are from the Saga Lands.",
    "special": "You cannot select another dedication feat until you have gained two other feats from the runescarred archetype.",
    "text": "Whether through blood (if you\u2019re Varisian, Shoanti, or New Thassilonian) or by exposure to rune magic, you have become runescarred, with visible, glowing runes on your body in the form of tattoos or scars. You might have possessed these marks before gaining the archetype, but you only truly became runescarred when you chose to study and tap into the runes\u2019 power. You become an expert in and you also become trained in Thassilon , or an expert in Thassilon Lore if you were already trained in it. Choose one cantrip from the list. One of the runes on your body corresponds to the chosen cantrip, and you can cast the chosen cantrip as an innate arcane spell.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=21",
    "name": "Spell Runes",
    "level": 4,
    "source": "Lost Omens World Guide pg. 119",
    "archetype": "Runescarred",
    "prerequisites": "Runescarred Dedication",
    "text": "The magical runes on your body grant you several magical abilities. Choose a 1st-level spell. You gain a spell rune on your body corresponding to the chosen spell, which you can cast once per day as an innate spell. At 6th level, you gain a spell rune corresponding to a 2nd-level arcane spell, and at 8th level, you gain a spell rune corresponding to a 3rd-level arcane spell.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=21",
    "name": "Living Rune",
    "level": 6,
    "source": "Lost Omens World Guide pg. 119",
    "archetype": "Runescarred",
    "prerequisites": "Runescarred Dedication",
    "text": "You\u2019ve bridged a connection between the runes on your body and the magic of runestones, allowing you to place an armor rune on your living flesh. Your body can hold a single ; you can\u2019t etch a property rune on your body if it has requirements on the type or category of armor or if the property would affect the armor instead of its wearer. If you wear armor, you gain the property rune\u2019s effects in addition to any effects of that armor.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=21",
    "name": "Warding Rune",
    "level": 6,
    "source": "Lost Omens World Guide pg. 119",
    "archetype": "Runescarred",
    "prerequisites": "Runescarred Dedication",
    "text": "Your runes provide a warding effect that protects you against a specific school of magic. Choose a school of magic other than divination. You gain a rune on your body corresponding to that school, and you gain a +2 circumstance bonus to all saving throws against effects of that school.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=21",
    "name": "Greater Spell Runes",
    "level": 10,
    "source": "Lost Omens World Guide pg. 119",
    "archetype": "Runescarred",
    "prerequisites": "Spell Runes",
    "traits": ["Archetype"],
    "text": "You gain more powerful spell runes. You gain a spell rune corresponding to a 4th-level spell. At 12th level, you gain a spell rune corresponding to a 5th-level arcane spell, and at 14th level, you gain a spell rune corresponding to a 6th-level arcane spell."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=31",
    "name": "Scrollmaster Dedication",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 113",
    "archetype": "Scrollmaster",
    "prerequisites": "expert in any Lore skill, member of the Pathfinder Society affiliated with the School of Scrolls",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Scrollmaster archetype.",
    "text": "Your experience chronicling adventures and discoveries grants you heightened discernment and memory. For 24 hours after learning a prominent fact\u2014such as the name of an NPC you have met, the details of your mission briefing, and similar information\u2014you can recall it without attempting a check, though this doesn\u2019t allow you to automatically memorize long strings of numbers or text. You also gain a +2 circumstance bonus to checks to remember a detail that has come up before in the current adventure, even if it was more than 24 hours ago. If you have the feat and have expert proficiency in the skill you\u2019re using to Recall Knowledge, your circumstance bonus to Recall Knowledge about creatures from that feat increases to +4.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=31",
    "name": "Lore Seeker",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 113",
    "archetype": "Scrollmaster",
    "prerequisites": "Scrollmaster Dedication",
    "text": "You see what others don\u2019t, and you\u2019ve developed magical tricks to find hidden truth. You can cast , , and as innate spells, each once per day. If you could already cast spells, these spells are of the same tradition. Otherwise, they are arcane spells, you use Intelligence as your spellcasting ability, and you become trained in spell attack rolls and spell DCs for arcane spells.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=31",
    "name": "Unravel Mysteries",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 113",
    "archetype": "Scrollmaster",
    "prerequisites": "master in a Decipher Writing skill, Scrollmaster Dedication",
    "text": "You can understand the true meaning of texts quickly, and even when you get lost or hit a dead end, you aren\u2019t discouraged from making further attempts to get to the bottom of things. When you Decipher Writing, you need only half as long as usual (reducing the time from about 1 minute to about half a minute per page), and if you fail, you don\u2019t take the usual \u20132 circumstance penalty to further checks to decipher that text.",
    "traits": ["Archetype", "Skill"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=31",
    "name": "Font of Knowledge",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 113",
    "archetype": "Scrollmaster",
    "prerequisites": "Scrollmaster Dedication",
    "traits": ["Archetype"],
    "text": "Experience or focused study have granted you mastery of a number of topics. When you know about something, you know about it in great detail. When you succeed at a check to , you gain additional information or context. When you critically succeed at a check to Recall Knowledge, at the GM\u2019s discretion, you might gain even more additional information or context than normal."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=32",
    "name": "Spellmaster Dedication",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 114",
    "archetype": "Spellmaster",
    "prerequisites": "Intelligence, Wisdom, or Charisma 14; ability to cast focus spells; member of the Pathfinder Society affiliated with the School of Spells",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Spellmaster archetype.",
    "text": "As a Spellmaster, you are adept at identifying magic. You gain a +2 circumstance bonus when you with a skill in which you are trained or better. If you have the feat, you can change the cantrip you chose for that feat each day during your daily preparations.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=32",
    "name": "Surreptitious Spellcaster",
    "level": 8,
    "source": "Lost Omens Character Guide pg. 114",
    "archetype": "Spellmaster",
    "prerequisites": "Spellmaster Dedication",
    "text": "You\u2019ve learned that it pays for a Pathfinder to be able to cast spells without being noticed. You gain the wizard class feat, though it\u2019s not a wizard feat for you. You also gain a +2 circumstance bonus to checks to Conceal a Spell and to checks to conceal verbal components.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=32",
    "name": "Ward Casting",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 114",
    "archetype": "Spellmaster",
    "prerequisites": "Spellmaster Dedication, Steady Spellcasting",
    "trigger": "You attempt a flat check for Steady Spellcasting, but you haven\u2019t rolled yet.",
    "text": "You carefully ward your spell by drawing from a mantle of magical energy you prepared to protect your casting, increasing your chance of retaining the spell. You reduce the DC of the flat check for Steady Spellcasting from 15 to 10.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=32",
    "name": "Spellmaster's Resilience",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 114",
    "archetype": "Spellmaster",
    "prerequisites": "Spellmaster Dedication",
    "text": "Your experience with a specific type of harmful magic makes you more resistant to it. Choose a magical tradition (arcane, divine, occult, or primal). You gain a +1 circumstance bonus to saving throws against spells and effects with that tradition\u2019s trait and resistance 5 to all damage from spells and effects with that tradition\u2019s trait. The effect must have actually been cast or created with that tradition, rather than simply being on that tradition\u2019s spell list.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=32",
    "name": "Absorb Spell",
    "level": 14,
    "source": "Lost Omens Character Guide pg. 114",
    "archetype": "Spellmaster",
    "frequency": "once per 10 minutes",
    "prerequisites": "Spellmaster Dedication, spell repertoire or ability to prepare spells",
    "trigger": "You critically succeed at a saving throw against a foe\u2019s spell, and that spell is of a level you can normally cast.",
    "traits": ["Archetype"],
    "text": "You absorb a spell and store it in your body. If you are a spontaneous spellcaster, you can cast the triggering spell once during the next 10 minutes, even if it\u2019s not on your spell list as if it were in your repertoire. If you are a prepared spellcaster, you can replace one of your prepared spells of the same level with the absorbed spell, but you must cast the absorbed spell within 10 minutes or you lose that spell slot for the day. You cast the spell at the same spell level as the spell you absorbed, but the spell is of your magical tradition and uses your spell DC, spell attack roll, and other statistics to determine its effects."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=18",
    "name": "Student of Perfection Dedication",
    "level": 2,
    "source": "Lost Omens World Guide pg. 83",
    "archetype": "Student of Perfection",
    "prerequisites": "powerful fist or expert in unarmed attacks; member of a House of Perfection",
    "access": "You are from Jalmeray.",
    "special": "You can\u2019t select another dedication feat until you have gained two other feats from the student of perfection archetype.",
    "text": "You have learned the martial arts techniques of your House of Perfection. You become trained in your choice of or and Warfare ; if you were already trained, you become an expert instead. You gain the monk class feat, which grants you the ki spell and a focus pool of 1 Focus Point that you can recover using the Refocus activity as a monk does. Your ki spells from Student of Perfection are occult spells.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=18",
    "name": "Perfect Strike",
    "level": 4,
    "source": "Lost Omens World Guide pg. 83",
    "archetype": "Student of Perfection",
    "prerequisites": "Student of Perfection Dedication",
    "text": "You gain the ki spell. Increase the number of Focus Points in your focus pool by 1.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=18",
    "name": "Perfect Ki Adept",
    "level": 6,
    "source": "Lost Omens World Guide pg. 83",
    "archetype": "Student of Perfection",
    "prerequisites": "Student of Perfection Dedication",
    "traits": ["Archetype"],
    "text": "You gain the appropriate ki spell for your School of Perfection: for Unblinking Flame, for Unbreaking Waves, for Unfolding Wind, or for Untwisting Iron. Increase the number of Focus Points in your focus pool by 1."
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=33",
    "name": "Swordmaster Dedication",
    "level": 6,
    "source": "Lost Omens Character Guide pg. 115",
    "archetype": "Swordmaster",
    "prerequisites": "Strength, Dexterity, or Constitution 14; member of the Pathfinder Society affiliated with the School of Swords",
    "special": "You cannot select another dedication feat until you have gained two other feats from the Swordmaster archetype.",
    "text": "Your Swords training taught you to never lose hold of your weapon. You gain a +2 circumstance bonus to your Reflex DC when foes attempt to you. If you have the feat and critically succeed on a check to an ally\u2019s attack roll or skill check, you gain a +2 circumstance bonus from Deft Cooperation (instead of a +1 bonus) the first time you attempt an attack roll or attempt a skill check where the bonus would apply.",
    "traits": ["Archetype", "Dedication"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=33",
    "name": "Harrying Strike",
    "level": 10,
    "source": "Lost Omens Character Guide pg. 115",
    "archetype": "Swordmaster",
    "prerequisites": "Swordmaster Dedication",
    "criticalsuccess": "The target takes a \u201315-foot status penalty to its Speeds until the start of your next turn.",
    "success": "The target takes a \u201310-foot status penalty to its Speeds until the start of your next turn.",
    "failure": "The target takes a \u20135-foot status penalty to its Speeds until the start of your next turn.",
    "text": "Your attack prevents a foe from pursuing your allies. Make a melee Strike, adding the following effects in addition to the normal effects of the Strike.",
    "traits": ["Archetype", "Attack", "Press"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=33",
    "name": "Shoulder Catastrophe",
    "level": 12,
    "source": "Lost Omens Character Guide pg. 115",
    "archetype": "Swordmaster",
    "prerequisites": "Swordmaster Dedication",
    "trigger": "An enemy critically succeeds at a Strike against an adjacent ally.",
    "text": "You\u2019ve trained to protect your allies by diverting the worst attacks to yourself. The enemy doesn\u2019t double the damage from the triggering Strike but instead applies the normal damage to both you and your ally. Both of you take any effects that would happen on a hit that dealt damage, such as poison, but neither of you are subject to any effects that would happen only on a critical success.",
    "traits": ["Archetype"]
}, {
    "link": "https://2e.aonprd.com/Archetypes.aspx?ID=33",
    "name": "Death's Door",
    "level": 14,
    "source": "Lost Omens Character Guide pg. 115",
    "archetype": "Swordmaster",
    "frequency": "once per 10 minutes",
    "prerequisites": "Swordmaster Dedication",
    "trigger": "You take damage that would reduce you to 0 Hit Points.",
    "traits": ["Archetype"],
    "text": "You continue to fight when others would fall. Just before taking the triggering damage, you gain temporary Hit Points equal to twice your level. If you have Hit Points remaining after gaining these temporary Hit Points, you aren\u2019t knocked unconscious, nor do you suffer the other effects of being reduced to 0 Hit Points. Any temporary Hit Points that remain after applying the damage last for up to 4 rounds."
}]

module.exports = { baseFeats, archFeats}