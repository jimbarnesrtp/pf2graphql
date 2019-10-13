const feats = [{
        "name": "Additional Lore",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=750",
        "prereq": "trained in Lore",
        "benefits": "Become trained in another Lore subcategory",
        "text": ["Your knowledge has expanded to encompass a new field. Choose an additional Lore skill subcategory. You become trained in it. At 3rd, 7th, and 15th levels, you gain an additional skill increase you can apply only to the chosen Lore subcategory.", " You can select this feat more than once. Each time you must select a new subcategory of Lore and you gain the additional skill increases to that subcategory for the listed levels."]
    }, {
        "name": "Adopted Ancestry",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=751",
        "prereq": "",
        "benefits": "Gain access to ancestry feats from another ancestry",
        "text": ["You\u2019re fully immersed in another ancestry\u2019s culture and traditions, whether born into them, earned through rite of passage, or bonded through a deep friendship or romance. Choose a common ancestry. You can select ancestry feats from the ancestry you chose, in addition to your character\u2019s own ancestry, as long as the ancestry feats don\u2019t require any physiological feature that you lack, as determined by the GM."]
    }, {
        "name": "Alchemical Crafting",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=752",
        "prereq": "trained in Crafting",
        "benefits": "Craft alchemical items",
        "text": ["You can use the Craft activity to create alchemical items. When you select this feat, you immediately add the formulas for four common 1st-level alchemical items to your formula book."]
    }, {
        "name": "Arcane Sense",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=754",
        "prereq": "trained in Arcana",
        "benefits": "Cast detect magic at will as an arcane innate spell",
        "text": ["Your study of magic allows you to instinctively sense its presence. You can cast 1st-level ", " at will as an arcane innate spell. If you\u2019re a master in Arcana, the spell is heightened to 3rd level; if you\u2019re legendary, it is heightened to 4th level."]
    }, {
        "name": "Armor Proficiency",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=755",
        "prereq": "",
        "benefits": "Become trained in a type of armor",
        "text": ["You become trained in light armor. If you already were trained in light armor, you gain training in medium armor. If you were trained in both, you become trained in heavy armor.", " You can select this feat more than once. Each time, you become trained in the next type of armor above."]
    }, {
        "name": "Assurance",
        "level": "1",
        "traits": ["General", " Fortune", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=756",
        "prereq": "trained in at least one skill",
        "benefits": "Receive a fixed result on a skill check",
        "text": ["Even in the worst circumstances, you can perform basic tasks. Choose a skill you\u2019re trained in. You can forgo rolling a skill check for that skill to instead receive a result of 10 + your proficiency bonus (do not apply any other bonuses, penalties, or modifiers).", " You can select this feat multiple times. Each time, choose a different skill and gain the benefits for that skill."]
    }, {
        "name": "Bargain Hunter",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=758",
        "prereq": "trained in Diplomacy",
        "benefits": "Earn Income by searching for deals",
        "text": ["You can Earn Income (page 236) using Diplomacy, spending your days hunting for bargains and reselling at a profit. You can also spend time specifically sniffing out a great bargain on an item; this works as if you were using Earn Income with Diplomacy, except instead of gaining money, you purchase the item at a discount equal to the money you would have gained, gaining the item for free if your earned income equals or exceeds its cost. Finally, if you select Bargain Hunter during character creation at 1st level, you start play with an additional 2 gp."]
    }, {
        "name": "Battle Medicine",
        "level": "1",
        "traits": ["General", " Healing", " Manipulate", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=760",
        "prereq": "trained in Medicine",
        "benefits": "Heal yourself or an ally in battle",
        "text": ["You can patch up yourself or an adjacent ally, even in combat. Attempt a Medicine check with the same DC as for Treat Wounds and provide the corresponding amount of healing. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day."]
    }, {
        "name": "Breath Control",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=763",
        "prereq": "",
        "benefits": "Hold your breath longer and gain benefits against inhaled threats",
        "text": ["You have incredible breath control, which grants you advantages when air is hazardous or sparse. You can hold your breath for 25 times as long as usual before suffocating. You gain a +1 circumstance bonus to saving throws against inhaled threats, such as inhaled poisons, and if you roll a success on such a saving throw, you get a critical success instead."]
    }, {
        "name": "Canny Acumen",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=764",
        "prereq": "",
        "benefits": "Become an expert in a saving throw or Perception",
        "text": ["Your avoidance or observation is beyond the ken of most in your profession. Choose Fortitude saves, Reflex saves, Will saves, or Perception. You become an expert in your choice. At 17th level, you become a master in your choice."]
    }, {
        "name": "Cat Fall",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=765",
        "prereq": "trained in Acrobatics",
        "benefits": "Treat falls as shorter than they are",
        "text": ["Your catlike aerial acrobatics allow you to cushion your falls. Treat falls as 10 feet shorter. If you\u2019re an expert in Acrobatics, treat falls as 25 feet shorter. If you\u2019re a master in Acrobatics, treat them as 50 feet shorter. If you\u2019re legendary in Acrobatics, you always land on your feet and don\u2019t take damage, regardless of the distance of the fall."]
    }, {
        "name": "Charming Liar",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=766",
        "prereq": "trained in Deception",
        "benefits": "Improve a target's attitude with your lies",
        "text": ["Your charm allows you to win over those you lie to. When you get a critical success using the Lie action, the target\u2019s attitude toward you improves by one step, as though you\u2019d succeeded at using Diplomacy to Make an Impression. This works only once per conversation, and if you critically succeed against multiple targets using the same result, you choose one creature\u2019s attitude to improve. You must be lying to impart seemingly important information, inflate your status, or ingratiate yourself, which trivial or irrelevant lies can\u2019t achieve."]
    }, {
        "name": "Combat Climber",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=768",
        "prereq": "trained in Athletics",
        "benefits": "Fight more effectively as you Climb",
        "text": ["Your techniques allow you to fight as you climb. You\u2019re not flat-footed while Climbing and can Climb with a hand occupied. You must still use another hand and both legs to Climb."]
    }, {
        "name": "Courtly Graces",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=772",
        "prereq": "trained in Society",
        "benefits": "Use Society to get along in noble society",
        "text": ["You were raised among the nobility or have learned proper etiquette and bearing, allowing you to present yourself as a noble and play games of influence and politics. You can use Society to Make an Impression on a noble, as well as with Impersonate to pretend to be a noble if you aren\u2019t one. If you want to impersonate a specific noble, you still need to use Deception to Impersonate normally, and to Lie when necessary."]
    }, {
        "name": "Diehard",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=774",
        "prereq": "",
        "benefits": "Die at dying 5, rather than dying 4",
        "text": ["It takes more to kill you than most. You die from the dying condition at dying 5, rather than dying 4."]
    }, {
        "name": "Different Worlds",
        "level": "1",
        "traits": ["General", " Uncommon"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=923",
        "prereq": "ability to select ancestry feats from multiple ancestries",
        "benefits": "Create a second identity for yourself with a different name, history, and background.",
        "text": ["Your separate experiences in different societies have evolved into entirely separate lives. Create a second identity for yourself with a different name, history, and background. This identity must correspond to one of the ancestries whose ancestry feats you can select. You gain the trained proficiency rank in the Lore skill from the second background you chose (but you don\u2019t gain any of the background\u2019s other benefits), and you gain a +4 circumstance bonus to ", " checks when making a statement that would be true of your second identity or when disguising yourself as your second identity.", " At the GM\u2019s discretion, this feat can be used against non-humanoids if they have regular contact with humanoids or you are able to disguise yourself as a member of the target\u2019s ancestry or type of creature."]
    }, {
        "name": "Dubious Knowledge",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=776",
        "prereq": "trained in a skill with the Recall Knowledge action",
        "benefits": "Learn true and erroneous knowledge on failed check",
        "text": ["You\u2019re a treasure trove of information, but not all of it comes from reputable sources. When you fail a Recall Knowledge check using any skill, you learn a bit of true knowledge and a bit of erroneous knowledge, but you don\u2019t have any way to differentiate which is which."]
    }, {
        "name": "Experienced Professional",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=778",
        "prereq": "trained in Lore",
        "benefits": "Prevent critical failures when Earning Income",
        "text": ["You carefully safeguard your professional endeavors to prevent disaster. When you use Lore to Earn Income, if you roll a critical failure, you instead get a failure. If you\u2019re an expert in Lore, you gain twice as much income from a failed check to Earn Income, unless it was originally a critical failure."]
    }, {
        "name": "Experienced Smuggler",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=779",
        "prereq": "trained in Stealth",
        "benefits": "Conceal items from observers more effectively",
        "text": ["You often smuggle things past the authorities. When the GM rolls your Stealth check to see if a passive observer notices a small item you have concealed, the GM uses the number rolled or 10\u2014whichever is higher\u2014as the result of your die roll, adding it to your Stealth modifier to determine your Stealth check result. If you\u2019re a master in Stealth, the GM uses the number rolled or 15, and if you\u2019re legendary in Stealth, you automatically succeed at hiding a small concealed item from passive observers. This provides no benefits when a creature attempts a Perception check while actively searching you for hidden items. Due to your smuggling skill, you\u2019re more likely to find more lucrative smuggling jobs when using Underworld Lore to Earn Income."]
    }, {
        "name": "Experienced Tracker",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=780",
        "prereq": "trained in Survival",
        "benefits": "Track at your full Speed at a \u20135 penalty",
        "text": ["Tracking is second nature to you, and when necessary you can follow a trail without pause. You can Track while moving at full Speed by taking a \u20135 penalty to your Survival check. If you\u2019re a master in Survival, you don\u2019t take the \u20135 penalty. If you\u2019re legendary in Survival, you no longer need to roll a new Survival check every hour when tracking, though you still need to roll whenever there are significant changes in the trail."]
    }, {
        "name": "Fascinating Performance",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=781",
        "prereq": "trained in Performance",
        "benefits": "Perform to fascinate observers",
        "text": ["When you Perform, compare your result to the Will DC of one observer. If you succeed, the target is fascinated by you for 1 round. If the observer is in a situation that demands immediate attention, such as combat, you must critically succeed to fascinate it and the Perform action gains the incapacitation trait. You must choose which creature you\u2019re trying to fascinate before you roll your check, and the target is then temporarily immune for 1 hour. If you\u2019re an expert in Performance, you can fascinate up to four observers; if you\u2019re a master, you can fascinate up to 10 observers; and if you\u2019re legendary, you can fascinate any number of observers at the same time."]
    }, {
        "name": "Fast Recovery",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=782",
        "prereq": "Constitution 14",
        "benefits": "Regain more HP from rest, recover faster from disease and poisons",
        "text": ["Your body quickly bounces back from afflictions. You regain twice as many Hit Points from resting. Each time you succeed at a Fortitude save against an ongoing disease or poison, you reduce its stage by 2, or by 1 against a virulent disease or poison. Each critical success you achieve against an ongoing disease or poison reduces its stage by 3, or by 2 against a virulent disease or poison. In addition, you reduce the severity of your drained condition by 2 when you rest for a night instead of by 1."]
    }, {
        "name": "Feather Step",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=783",
        "prereq": "Dexterity 14",
        "benefits": "Step into difficult terrain",
        "text": ["You step carefully and quickly. You can Step into difficult terrain."]
    }, {
        "name": "Fleet",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=784",
        "prereq": "",
        "benefits": "Increase your Speed by 5 feet",
        "text": ["You move more quickly on foot. Your Speed increases by 5 feet."]
    }, {
        "name": "Forager",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=786",
        "prereq": "trained in Survival",
        "benefits": "Forage for supplies to provide for multiple creatures",
        "text": ["While using Survival to Subsist, if you roll any result worse than a success, you get a success. On a success, you can provide subsistence living for yourself and four additional creatures, and on a critical success, you can take care of twice as many creatures as on a success.", " Each time your proficiency rank in Survival increases, double the number of additional creatures you can take care of on a success (to eight if you\u2019re an expert, 16 if you\u2019re a master, or 32 if you\u2019re legendary). You can choose to care for half the number of additional creatures and provide a comfortable living instead of subsistence living.", " Multiple smaller creatures or creatures with significantly smaller appetites than a human are counted as a single creature for this feat, and larger creatures or those with significantly greater appetites each count as multiple creatures. The GM determines how much a non-human creature needs to eat."]
    }, {
        "name": "Group Coercion",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=788",
        "prereq": "trained in Intimidation",
        "benefits": "Coerce multiple targets simultaneously",
        "text": ["When you Coerce, you can compare your Intimidation check result to the Will DCs of two targets instead of one. It\u2019s possible to get a different degree of success for each target. The number of targets you can Coerce in a single action increases to four if you\u2019re an expert, 10 if you\u2019re a master, and 25 if you\u2019re legendary."]
    }, {
        "name": "Group Impression",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=789",
        "prereq": "trained in Diplomacy",
        "benefits": "Make an Impression on multiple targets at once",
        "text": ["When you Make an Impression, you can compare your Diplomacy check result to the Will DCs of two targets instead of one. It\u2019s possible to get a different degree of success for each target. The number of targets increases to four if you\u2019re an expert, 10 if you\u2019re a master, and 25 if you\u2019re legendary."]
    }, {
        "name": "Hefty Hauler",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=790",
        "prereq": "trained in Athletics",
        "benefits": "Increase your Bulk limits by 2",
        "text": ["You can carry more than your frame implies. Increase your maximum and encumbered Bulk limits by 2."]
    }, {
        "name": "Hobnobber",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=791",
        "prereq": "trained in Diplomacy",
        "benefits": "Gather Information rapidly",
        "text": ["You are skilled at learning information through conversation. The Gather Information exploration activity takes you half as long as normal (typically reducing the time to 1 hour). If you\u2019re a master in Diplomacy and you Gather Information at the normal speed, when you attempt to do so and roll a critical failure, you get a failure instead. There is still no guarantee that a rumor you learn with Gather Information is accurate."]
    }, {
        "name": "Impressive Performance",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=793",
        "prereq": "trained in Performance",
        "benefits": "Make an Impression with Performance",
        "text": ["Your performances inspire admiration and win you fans. You can Make an Impression using Performance instead of Diplomacy."]
    }, {
        "name": "Incredible Initiative",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=794",
        "prereq": "",
        "benefits": "+2 to initiative rolls",
        "text": ["You react more quickly than others can. You gain a +2 circumstance bonus to initiative rolls."]
    }, {
        "name": "Intimidating Glare",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=796",
        "prereq": "trained in Intimidation",
        "benefits": "Demoralize a creature without speaking",
        "text": ["You can Demoralize with a mere glare. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don\u2019t take a penalty if the creature doesn\u2019t understand your language."]
    }, {
        "name": "Lengthy Diversion",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=810",
        "prereq": "trained in Deception",
        "benefits": "Remain hidden after you Create a Diversion",
        "text": ["When you critically succeed to Create a Diversion, you continue to remain hidden after the end of your turn. This effect lasts for an amount of time that depends on the diversion and situation, as determined by the GM (minimum 1 additional round)."]
    }, {
        "name": "Lie to Me",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=811",
        "prereq": "trained in Deception",
        "benefits": "Use Deception to detect lies",
        "text": ["You can use Deception to weave traps to trip up anyone trying to deceive you. If you can engage in conversation with someone trying to Lie to you, use your Deception DC if it is higher than your Perception DC to determine whether they succeed. This doesn\u2019t apply if you don\u2019t have a back-and-forth dialogue, such as when someone attempts to Lie during a long speech."]
    }, {
        "name": "Multilingual",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=814",
        "prereq": "trained in Society",
        "benefits": "Learn two new languages",
        "text": ["You easily pick up new languages. You learn two new languages, chosen from common languages, uncommon languages, and any others you have access to. You learn an additional language if you are or become a master in Society and again if you are or become legendary.", " You can select this feat multiple times. Each time, you learn additional languages."]
    }, {
        "name": "Natural Medicine",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=815",
        "prereq": "trained in Nature",
        "benefits": "Use Nature to Treat Wounds",
        "text": ["You can apply natural cures to heal your allies. You can use Nature instead of Medicine to Treat Wounds. If you\u2019re in the wilderness, you might have easier access to fresh ingredients, allowing you to gain a +2 circumstance bonus to your check to Treat Wounds using Nature, subject to the GM\u2019s determination."]
    }, {
        "name": "Oddity Identification",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=817",
        "prereq": "trained in Occultism",
        "benefits": "+2 to Occultism checks to Identify Magic with certain traits",
        "text": ["You have a sense for spells that twist minds or reveal secrets. You gain a +2 circumstance bonus to Occultism checks to Identify Magic with the mental, possession, prediction, or scrying traits."]
    }, {
        "name": "Pickpocket",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=818",
        "prereq": "trained in Thievery",
        "benefits": "Steal or Palm an Object more effectively",
        "text": ["You can Steal or Palm an Object that\u2019s closely guarded, such as in a pocket, without taking the \u20135 penalty. You can\u2019t steal objects that would be extremely noticeable or time consuming to remove (like worn shoes or armor or actively wielded objects). If you\u2019re a master in Thievery, you can attempt to Steal from a creature in combat or otherwise on guard. When doing so, Stealing requires 2 manipulate actions instead of 1, and you take a \u20135 penalty."]
    }, {
        "name": "Quick Coercion",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=822",
        "prereq": "trained in Intimidation",
        "benefits": "Coerce a creature quickly",
        "text": ["You can bully others with just a few choice implications. You can Coerce a creature after 1 round of conversation instead of 1 minute. You still can\u2019t Coerce a creature in the midst of combat, or without engaging in a conversation."]
    }, {
        "name": "Quick Identification",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=824",
        "prereq": "trained in Arcana, Nature, Occultism or Religion",
        "benefits": "Identify Magic in 1 minute or less",
        "text": ["You can Identify Magic swiftly. You take only 1 minute when using Identify Magic to determine the properties of an item, ongoing effect, or location, rather than 10 minutes. If you\u2019re a master, it takes a 3-action activity, and if you\u2019re legendary, it takes 1 action."]
    }, {
        "name": "Quick Jump",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=825",
        "prereq": "trained in Athletics",
        "benefits": "High Jump or Long Jump as a single action",
        "text": ["You can use High Jump and Long Jump as a single action instead of 2 actions. If you do, you don\u2019t perform the initial Stride (nor do you fail if you don\u2019t Stride 10 feet)."]
    }, {
        "name": "Quick Repair",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=827",
        "prereq": "trained in Crafting",
        "benefits": "Repair items quickly",
        "text": ["You take 1 minute to Repair an item. If you\u2019re a master in Crafting, it takes 3 actions. If you\u2019re legendary, it takes 1 action."]
    }, {
        "name": "Quick Squeeze",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=828",
        "prereq": "trained in Acrobatics",
        "benefits": "Move swiftly as you Squeeze",
        "text": ["You Squeeze 5 feet per round (10 feet on a critical success). If you\u2019re legendary in Acrobatics, you Squeeze at full Speed."]
    }, {
        "name": "Read Lips",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=833",
        "prereq": "trained in Society",
        "benefits": "Read the lips of people you can see",
        "text": ["You can read lips of others nearby who you can clearly see. When you\u2019re at your leisure, you can do this automatically. In encounter mode or when attempting a more difficult feat of lipreading, you\u2019re fascinated and flat-footed during each round in which you focus on lip movements, and you must succeed at a Society check (DC determined by the GM) to successfully read someone\u2019s lips. In either case, the language read must be one that you know.", " If you are deaf or hard of hearing and have Read Lips, you recognize the lip movements for the spoken form of your languages. You can also speak the spoken form of your languages clearly enough for others to understand you."]
    }, {
        "name": "Recognize Spell",
        "level": "1",
        "traits": ["General", " Secret", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=834",
        "prereq": "trained in Arcana, Nature, Occultism, or Religion",
        "benefits": " Identify a spell as a reaction as it's being cast",
        "text": ["If you are trained in the appropriate skill for the spell\u2019s tradition and it\u2019s a common spell of 2nd level or lower, you automatically identify it (you still roll to attempt to get a critical success, but can\u2019t get a worse result than success). The highest level of spell you automatically identify increases to 4 if you\u2019re an expert, 6 if you\u2019re a master, and 10 if you\u2019re legendary. The GM rolls a secret Arcana, Nature, Occultism, or Religion check, whichever corresponds to the tradition of the spell being cast. If you\u2019re not trained in the skill, you can\u2019t get a result better than failure. ", " You correctly recognize the spell and gain a +1 circumstance bonus to your saving throw or your AC against it. ", " You correctly recognize the spell.", " You fail to recognize the spell.", " You misidentify the spell as another spell entirely, of the GM\u2019s choice."]
    }, {
        "name": "Ride",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=835",
        "prereq": "",
        "benefits": "Automatically succeed at commanding your mount to move",
        "text": ["When you Command an Animal you\u2019re mounted on to take a move action (such as Stride), you automatically succeed instead of needing to attempt a check. Any animal you\u2019re mounted on acts on your turn, like a minion. If you Mount an animal in the middle of an encounter, it skips its next turn and then acts on your next turn. Page 249 has more on Command an Animal."]
    }, {
        "name": "Secret Speech",
        "level": "1",
        "traits": ["General", " Skill", " Uncommon"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=925",
        "prereq": "trained in Deception",
        "benefits": "Learn the secret language of a society",
        "text": ["Choose a secret society (such as the Lacunafex or the Bellflower Network). You\u2019ve learned that society\u2019s secret cant or jargon, enabling you to share hidden messages when signing or speaking with others who\u2019ve also learned it. If an observer succeeds at a Perception check against your ", " DC when you do this, they realize you are passing a message but fail to discern its content, unless they subsequently succeed at a Society check against your Deception DC. On a critical success, they learn not only the message, but also who you\u2019re passing the message to.", " You can take this feat multiple times. You learn the secret speech of a different society each time."]
    }, {
        "name": "Shield Block",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=839",
        "prereq": "",
        "benefits": "Ward off a blow with your shield",
        "text": ["You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield\u2019s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield."]
    }, {
        "name": "Sign Language",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=840",
        "prereq": "trained in Society",
        "benefits": "Learn sign languages",
        "text": ["You learn the sign languages associated with the languages you know, allowing you to sign and understand signs. Sign languages typically require both hands to convey more complex concepts, and they are visual rather than auditory.", " Sign language is difficult to understand during combat due to the level of attention needed, unlike basic gestures like pointing at a foe to suggest a target. Sign language is hard to use in areas of low visibility, just like speech is difficult in a noisy environment."]
    }, {
        "name": "Skill Training",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=841",
        "prereq": "Intelligence 12",
        "benefits": "Become trained in a skill",
        "text": ["You become trained in the skill of your choice.", " You can select this feat multiple times, choosing a new skill to become trained in each time."]
    }, {
        "name": "Snare Crafting",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=843",
        "prereq": "trained in Crafting",
        "benefits": "Craft snares",
        "text": ["You can use the Craft activity to create snares, using the rules from page 244. When you select this feat, you add the formulas for four common snares to your formula book."]
    }, {
        "name": "Specialty Crafting",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=844",
        "prereq": "trained in Crafting",
        "benefits": "Gain bonuses to Craft certain items",
        "text": ["Your training focused on Crafting one particular kind of item. Select one of the specialties listed on page 267; you gain a +1 circumstance bonus to Crafting checks to Craft items of that type. If you are a master in Crafting, this bonus increases to +2. If it\u2019s unclear whether the specialty applies, the GM decides. Some specialties might apply only partially. For example, if you were making a morningstar and had specialty in woodworking, the GM might give you half your bonus because the item requires both blacksmithing and woodworking.", " * You must have the ", " skill feat to Craft alchemical items."]
    }, {
        "name": "Steady Balance",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=845",
        "prereq": "trained in Acrobatics",
        "benefits": "Maintain your balance in adverse conditions",
        "text": ["You can keep your balance easily, even in adverse conditions. Whenever you roll a success using the Balance action, you get a critical success instead. You\u2019re not flat-footed while attempting to Balance on narrow surfaces and uneven ground. Thanks to your incredible balance, you can attempt an Acrobatics check instead of a Reflex save to Grab an Edge."]
    }, {
        "name": "Streetwise",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=846",
        "prereq": "trained in Society",
        "benefits": "Use Society to Gather Information and Recall Knowledge",
        "text": ["You know about life on the streets and feel the pulse of your local settlement. You can use your Society modifier instead of your Diplomacy modifier to Gather Information. In any settlement you frequent regularly, you can use the Recall Knowledge action with Society to know the same sorts of information that you could discover with Diplomacy to Gather Information. The DC is usually significantly higher, but you know the information without spending time gathering it. If you fail to recall the information, you can still subsequently attempt to Gather Information normally."]
    }, {
        "name": "Student of the Canon",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=847",
        "prereq": "trained in Religion",
        "benefits": "More accurately recognize the tenets of your faith or philosophy",
        "text": ["You\u2019ve researched many faiths enough to recognize notions about them that are unlikely to be true. If you roll a critical failure at a Religion check to Decipher Writing of a religious nature or to Recall Knowledge about the tenets of faiths, you get a failure instead. When attempting to Recall Knowledge about the tenets of your own faith, if you roll a failure, you get a success instead, and if you roll a success, you get a critical success instead."]
    }, {
        "name": "Subtle Theft",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=848",
        "prereq": "trained in Thievery",
        "benefits": "Your thefts are harder to notice",
        "text": ["When you successfully Steal something, observers (creatures other than the creature you stole from) take a \u20132 circumstance penalty to their Perception DCs to detect your theft. Additionally, if you first Create a Diversion using Deception, taking a single Palm an Object or Steal action doesn\u2019t end your undetected condition."]
    }, {
        "name": "Survey Wildlife",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=849",
        "prereq": "trained in Survival",
        "benefits": "Identify nearby creatures through signs and clues",
        "text": ["You can study details in the wilderness to determine the presence of nearby creatures. You can spend 10 minutes assessing the area around you to find out what creatures are nearby, based on nests, scat, and marks on vegetation. Attempt a Survival check against a DC determined by the GM based on how obvious the signs are. On a success, you can attempt a Recall Knowledge check with a \u20132 penalty to learn more about the creatures just from these signs. If you\u2019re a master in Survival, you don\u2019t take the penalty."]
    }, {
        "name": "Terrain Expertise",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=851",
        "prereq": "trained in Survival",
        "benefits": "+1 to Survival checks in certain terrain",
        "text": ["Your experience in navigating a certain type of terrain makes you supremely confident while doing so. You gain a +1 circumstance bonus to Survival checks in one of the following types of terrain, chosen when you select this feat: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground.", " You can select this feat more than once, choosing a different type of terrain each time."]
    }, {
        "name": "Terrain Stalker",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=852",
        "prereq": "trained in Stealth",
        "benefits": "Sneak in certain terrain without attempting a check",
        "text": ["Select one type of difficult terrain from the following list: rubble, snow, or underbrush. While undetected by all non-allies in that type of terrain, you can Sneak without attempting a Stealth check as long as you move no more than 5 feet and do not move within 10 feet of an enemy at any point during your movement. This also allows you to automatically approach creatures to within 15 feet while Avoiding Notice during exploration as long as they aren\u2019t actively Searching or on guard.", " You can select this feat multiple times. Each time, choose a different type of terrain."]
    }, {
        "name": "Titan Wrestler",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=854",
        "prereq": "trained in Athletics",
        "benefits": "Disarm, Grapple, Shove, or Trip larger creatures",
        "text": ["You can attempt to Disarm, Grapple, Shove, or Trip creatures up to two sizes larger than you, or up to three sizes larger than you if you\u2019re legendary in Athletics."]
    }, {
        "name": "Toughness",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=855",
        "prereq": "",
        "benefits": "Increase your maximum HP and reduce the DCs of recovery checks",
        "text": ["You can withstand more punishment than most before succumbing. Increase your maximum Hit Points by your level. You reduce the DC of recovery checks by 1 (page 459)."]
    }, {
        "name": "Train Animal",
        "level": "1",
        "traits": ["General", " Downtime", " Manipulate", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=856",
        "prereq": "trained in Nature",
        "benefits": "Teach an animal a trick",
        "text": ["You spend time teaching an animal to do a certain action. You can either select a basic action the animal already knows how to do (typically those listed in the Command an Animal action on page 249) or attempt to teach the animal a new basic action. The GM determines the DC of any check required and the amount of time the training takes (usually at least a week). It\u2019s usually impossible to teach an animal a trick that uses critical thinking. If you\u2019re expert, master, or legendary in Nature, you might be able to train more unusual creatures, at the GM\u2019s discretion. ", " The animal learns the action. If it was an action the animal already knew, you can Command the Animal to take that action without attempting a Nature check. If it was a new basic action, add that action to the actions the animal can take when Commanded, but you must still roll.", " The animal doesn\u2019t learn the trick."]
    }, {
        "name": "Trick Magic Item",
        "level": "1",
        "traits": ["General", " Manipulate", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=857",
        "prereq": "trained in Arcana, Nature, Occultism, or Religion",
        "benefits": "Activate a magic item you normally can't activate",
        "text": ["You examine a magic item you normally couldn\u2019t use in an effort to fool it and activate it temporarily. For example, this might allow a fighter to cast a spell from a wand or allow a wizard to cast a spell that\u2019s not on the arcane list using a scroll. You must know what activating the item does, or you can\u2019t attempt to trick it.", " Attempt a check using the skill matching the item\u2019s magic tradition, or matching a tradition that has the spell on its list, if you\u2019re trying to cast a spell from the item. The relevant skills are Arcana for arcane, Nature for primal, Occultism for occult, Religion for divine, or any of the four for an item that has the magical trait and not a tradition trait. The GM determines the DC based on the item\u2019s level (possibly adjusted depending on the item or situation).", " If you activate a magic item that requires a spell attack roll or spell DC and you don\u2019t have the ability to cast spells of the relevant tradition, use your level as your proficiency bonus and the highest of your Intelligence, Wisdom, or Charisma modifiers. If you\u2019re a master in the appropriate skill for the item\u2019s tradition, you instead use the trained proficiency bonus, and if you\u2019re legendary, you instead use the expert proficiency bonus. ", " For the rest of the current turn, you can spend actions to activate the item as if you could normally use it.", " You can\u2019t use the item or try to trick it again this turn, but you can try again on subsequent turns.", " You can\u2019t use the item, and you can\u2019t try to trick it again until your next daily preparations."]
    }, {
        "name": "Underwater Marauder",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=858",
        "prereq": "trained in Athletics",
        "benefits": "Fight more effectively underwater",
        "text": ["You\u2019ve learned to fight underwater. You are not flat-footed while in water, and you don\u2019t take the usual penalties for using a bludgeoning or slashing melee weapon in water."]
    }, {
        "name": "Virtuosic Performer",
        "level": "1",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=862",
        "prereq": "trained in Performance",
        "benefits": "+1 with a certain type of performance",
        "text": ["You have exceptional talent with one type of performance. You gain a +1 circumstance bonus when making a certain type of performance. If you are a master in Performance, this bonus increases to +2. Select one of the following specialties and apply the bonus when attempting Performance checks of that type. If it\u2019s unclear whether the specialty applies, the GM decides."]
    }, {
        "name": "Weapon Proficiency",
        "level": "1",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=866",
        "prereq": "",
        "benefits": "Become trained in a weapon type",
        "text": ["You become trained in all simple weapons. If you were already trained in all simple weapons, you become trained in all martial weapons. If you were already trained in all martial weapons, you become trained in one advanced weapon of your choice.", " You can select this feat more than once. Each time you do, you become trained in additional weapons as appropriate, following the above progression."]
    }, {
        "name": "Automatic Knowledge",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=757",
        "prereq": "expert in a skill with the Recall Knowledge action, Assurance in that skill",
        "benefits": "Expert in Recall Knowledge action, Recall Knowledge as a free action once per day",
        "text": ["You know basic facts off the top of your head. Choose a skill you\u2019re an expert in that has the Recall Knowledge action and for which you have the Assurance feat. You can use the Recall Knowledge action with that skill as a free action once per round. If you do, you must use Assurance on the skill check.", " You can select this feat multiple times, choosing a different skill each time. You can use Automatic Knowledge with any skills you have chosen, but you can still use Automatic Knowledge only once per round."]
    }, {
        "name": "Bonded Animal",
        "level": "2",
        "traits": ["General", " Downtime", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=762",
        "prereq": "expert in Nature",
        "benefits": "An animal becomes permanently helpful to you",
        "text": ["You forge strong connections with animals. You can spend 7 days of downtime trying to bond with a normal animal (not a companion or other special animal). After this duration, attempt a DC 20 Nature check. If successful, you bond with the animal. The animal is permanently helpful to you, unless you do something egregious to break your bond. A helpful animal is easier to direct, as described under Command an Animal on page 249.", " Bonding with a new animal ends any previous bond you had. You can\u2019t have both a bonded animal and an animal companion (though you can have both a bonded animal and a familiar)."]
    }, {
        "name": "Confabulator",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=769",
        "prereq": "expert in Deception",
        "benefits": "Reduce the bonuses against your repeated lies",
        "text": ["Even when caught in falsehoods, you pile lie upon lie. Reduce the circumstance bonus a target gains for your previous attempts to Create a Diversion or Lie to it from +4 to +2. If you\u2019re a master in Deception, reduce the bonus to +1, and if you\u2019re legendary, your targets don\u2019t get these bonuses at all."]
    }, {
        "name": "Connections",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=770",
        "prereq": "expert in Society, Courtly Graces",
        "benefits": "Leverage your connections for favors and meetings",
        "text": ["You have social connections you can leverage to trade favors or meet important people. When you\u2019re in an area with connections (typically a settlement where you\u2019ve spent downtime building connections, or possibly another area in the same nation), you can attempt a Society check to arrange a meeting with an important political figure or ask for a favor in exchange for a later favor of your contact\u2019s choice. The GM decides the DC based on the difficulty of the favor and the figure\u2019s prominence."]
    }, {
        "name": "Continual Recovery",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=771",
        "prereq": "expert in Medicine",
        "benefits": "Treat Wounds on a patient more often",
        "text": ["You zealously monitor a patient\u2019s progress to administer treatment faster. When you Treat Wounds, your patient becomes immune for only 10 minutes instead of 1 hour. This applies only to your Treat Wounds activities, not any other the patient receives."]
    }, {
        "name": "Eye of the Arclords",
        "level": "2",
        "traits": ["General", " Skill", " Uncommon"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=870",
        "prereq": "expert in Arcana, Arcane\r\nSense; ",
        "benefits": "The Arclords of Nex have achieved a\r\nunique mastery of magic.",
        "text": ["You open an incandescent third eye\r\nupon your forehead. The eye can remain\r\nopen for 1 minute, and you can close it\r\nbefore then with a single action with the\r\nconcentrate trait. It can remain open for\r\n2 minutes if you\u2019re a master in Arcana,\r\nor 5 minutes if you\u2019re legendary. While\r\nthe eye is open, you gain the following\r\nbenefits: you gain the effects of the\r\ndetect magic arcane innate spell from\r\nyour Arcane Sense at the start of each\r\nof your turns without needing to cast\r\nthe spell; you gain darkvision; you gain\r\na +2 status bonus to Perception checks\r\nto Seek undetected and hidden creatures\r\nand to your Perception DC against Hide\r\nand Sneak. After your third eye closes,\r\nyou are dazzled for an amount of time\r\nequal to how long you had it open."]
    }, {
        "name": "Glad-Hand",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=787",
        "prereq": "expert in Diplomacy",
        "benefits": "Make an Impression on a target you've just met",
        "text": ["First impressions are your strong suit. When you meet someone in a casual or social situation, you can immediately attempt a Diplomacy check to Make an Impression on that creature rather than needing to converse for 1 minute. You take a \u20135 penalty to the check. If you fail or critically fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result."]
    }, {
        "name": "Godless Healing",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=869",
        "prereq": "Battle Medicine, can\u2019t have a patron deity",
        "benefits": "With limited access to divine healing magic, Rahadoumi often become adept at\r\nusing ordinary medicine for when dangerous situations arise.",
        "text": ["You recover an additional 5 Hit Points from a successful attempt to Treat your Wounds or\r\nuse Battle Medicine on you. After you or an ally use Battle Medicine on you, you become\r\ntemporarily immune to that Battle Medicine for\r\nonly 1 hour, instead of 1 day."]
    }, {
        "name": "Intimidating Prowess",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=797",
        "prereq": "Strength 16, expert in Intimidation",
        "benefits": "Gain a bonus to physically Demoralize a target",
        "text": ["In situations where you can physically menace the target when you Coerce or Demoralize, you gain a +1 circumstance bonus to your Intimidation check and you ignore the penalty for not sharing a language. If your Strength score is 20 or higher and you are a master in Intimidation, this bonus increases to +2."]
    }, {
        "name": "Lasting Coercion",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=800",
        "prereq": "expert in Intimidation",
        "benefits": "Coerce a target into helping you longer",
        "text": ["When you successfully Coerce someone, the maximum time they comply increases to a week, still determined by the GM. If you\u2019re legendary, the maximum increases to a month."]
    }, {
        "name": "Magical Crafting",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=812",
        "prereq": "expert in Crafting",
        "benefits": "Craft magic items",
        "text": ["You can Craft magic items, though some have other requirements, as listed in Chapter 11. When you select this feat, you gain formulas for four common magic items of 2nd level or lower."]
    }, {
        "name": "Magical Shorthand",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=813",
        "prereq": "expert in Arcana, Nature, Occultism, or Religion",
        "benefits": "Expert in Arcana, Nature, Occultism, Learn spells quickly and at a reduced cost",
        "text": ["Learning spells comes easily to you. If you\u2019re an expert in a tradition\u2019s associated skill, you take 10 minutes per spell level to learn a spell of that tradition, rather than 1 hour per spell level. If you fail to learn the spell, you can try again after 1 week or after you gain a level, whichever comes first. If you\u2019re a master in the tradition\u2019s associated skill, learning a spell takes 5 minutes per spell level, and if you\u2019re legendary, it takes 1 minute per spell level. You can use downtime to learn and inscribe new spells. This works as if you were using Earn Income with the tradition\u2019s associated skill, but instead of gaining money, you choose a spell available to you to learn and gain a discount on learning it, learning it for free if your earned income equals or exceeds its cost."]
    }, {
        "name": "Nimble Crawl",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=816",
        "prereq": "expert in Acrobatics",
        "benefits": "Crawl at a faster rate",
        "text": ["You can Crawl incredibly swiftly\u2014up to half your Speed, rather than 5 feet. If you\u2019re a master in Acrobatics, you can Crawl at full Speed, and if you\u2019re legendary, you aren\u2019t flat-footed while prone."]
    }, {
        "name": "Powerful Leap",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=820",
        "prereq": "expert in Athletics",
        "benefits": "Jump farther and higher",
        "text": ["When you Leap, you can jump 5 feet up with a vertical Leap, and you increase the distance you can jump horizontally by 5 feet."]
    }, {
        "name": "Quick Disguise",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=823",
        "prereq": "expert in Deception",
        "benefits": "Set up a disguise in only half the time",
        "text": ["You can set up a disguise in half the usual time (generally 5 minutes). If you\u2019re a master, it takes one-tenth the usual time (usually 1 minute). If you\u2019re legendary, you can create a full disguise and Impersonate as a 3-action activity."]
    }, {
        "name": "Quiet Allies",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=831",
        "prereq": "expert in Stealth",
        "benefits": "Roll a single Stealth check when sneaking with allies",
        "text": ["You\u2019re skilled at moving with a group. When you are Avoiding Notice and your allies Follow the Expert, you and those allies can roll a single Stealth check, using the lowest modifier, instead of rolling separately. This doesn\u2019t apply for initiative rolls."]
    }, {
        "name": "Rapid Mantel",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=832",
        "prereq": "expert in Athletics",
        "benefits": "Pull yourself onto ledges quickly",
        "text": ["You easily pull yourself onto ledges. When you Grab an Edge, you can pull yourself onto that surface and stand. You can use Athletics instead of a Reflex save to Grab an Edge."]
    }, {
        "name": "Robust Recovery",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=836",
        "prereq": "expert in Medicine",
        "benefits": "Greater benef ts from Treat Disease and Treat Poison",
        "text": ["You learned folk medicine to help recover from diseases and poison, and using it diligently has made you especially resilient. When you Treat a Disease or a Poison, or someone else uses one of these actions on you, increase the circumstance bonus granted on a success to +4, and if the result of the patient\u2019s saving throw is a success, the patient gets a critical success."]
    }, {
        "name": "Tweak Appearances",
        "level": "2",
        "traits": ["General", " Skill", " Uncommon"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=927",
        "prereq": "expert in Crafting",
        "benefits": "You can alter a creature's clothing to improve their social impact.",
        "text": ["You spend 1 minute making quick adjustments to someone\u2019s clothing and appearance, causing their words to carry more weight with an audience of your choice. While speaking to that audience, the target gains a +1 item bonus to ", " and ", " checks. If you have master proficiency in ", ", the bonus increases to +2; if you have legendary proficiency in Crafting, the bonus increases to +3. This bonus lasts until this ability is used on the target again, the situation they were prepared for ends, or they next change their outfit."]
    }, {
        "name": "Unmistakable Lore",
        "level": "2",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=860",
        "prereq": "expert in Lore",
        "benefits": "Recall Knowledge about your Lore more effectively",
        "text": ["You never get information about your areas of expertise wrong. When you Recall Knowledge using any Lore subcategory in which you\u2019re trained, if you roll a critical failure, you get a failure instead. If you\u2019re a master in a Lore subcategory, on a critical success, you gain even more information or context than usual."]
    }, {
        "name": "Ward Medic",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=864",
        "prereq": "expert in Medicine",
        "benefits": "Treat several patients at once",
        "text": ["You\u2019ve studied in large medical wards, treating several patients at once and tending to all their needs. When you use Treat Disease or Treat Wounds, you can treat up to two targets. If you\u2019re a master in Medicine, you can treat up to four targets, and if you\u2019re legendary, you can treat up to eight targets."]
    }, {
        "name": "Wary Disarmament",
        "level": "2",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=865",
        "prereq": "expert in Thievery",
        "benefits": "+2 to AC or saves against devices or traps you trigger while disarming",
        "text": ["If you trigger a device or set off a trap while disarming it, you gain a +2 circumstance bonus to your AC or saving throw against the device or trap. This applies only to attacks or effects triggered by your failed attempt, not to any later ones, such as additional attacks from a complex trap."]
    }, {
        "name": "Wilderness Spotter",
        "level": "2",
        "traits": ["General", " Skill", " Uncommon"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=868",
        "prereq": "expert in Survival",
        "benefits": "Use Survival for your Initiative when in a specific terrain",
        "text": ["Select one type of terrain from the following list: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground. You can use ", " in place of Perception to roll initiative when in the selected terrain in a natural location (not a structure) even if you weren\u2019t tracking or otherwise using ", " before the encounter. You can also use ", " instead of Perception to notice traps in natural locations in the chosen terrain; if you find a snare in this way, you can also use ", " instead of ", " to Disable the Device.", " You can select this feat more than once. Each time you select it, the feat applies to a new type of terrain."]
    }, {
        "name": "Ancestral Paragon",
        "level": "3",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=753",
        "prereq": "",
        "benefits": "Gain a 1st-level ancestry feat",
        "text": ["Whether through instinct, study, or magic, you feel a deeper connection to your ancestry. You gain a 1st-level ancestry feat."]
    }, {
        "name": "Untrained Improvisation",
        "level": "3",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=861",
        "prereq": "",
        "benefits": "Become more adept at using untrained skills",
        "text": ["You\u2019ve learned how to handle situations when you\u2019re out of your depth. Your proficiency bonus to untrained skill checks is equal to half your level instead of +0. If you\u2019re 7th level or higher, the bonus increases to your full level instead. This doesn\u2019t allow you to use the skill\u2019s trained actions."]
    }, {
        "name": "Battle Cry",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=759",
        "prereq": "master in Intimidation",
        "benefits": "Demoralizes foes when you roll for initiative",
        "text": ["When you roll initiative, you can yell a mighty battle cry and Demoralize an observed foe as a free action. If you\u2019re legendary in Intimidation, you can use a reaction to Demoralize your foe when you critically succeed at an attack roll."]
    }, {
        "name": "Bizarre Magic",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=761",
        "prereq": "master in Occultism",
        "benefits": "Your magic becomes more difficult to identify",
        "text": ["You can draw upon strange variations in your spellcasting, whether or not you can cast occult spells. The DCs to Recognize Spells you cast and Identify Magic you use increase by 5."]
    }, {
        "name": "Expeditious Search",
        "level": "7",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=777",
        "prereq": "master in Perception",
        "benefits": "Search areas in half the time",
        "text": ["You have a system that lets you search at great speed, finding details and secrets twice as quickly as others can. When Searching, you take half as long as usual to Search a given area. This means that while exploring, you double the Speed you can move while ensuring you\u2019ve Searched an area before walking into it (up to half your Speed). If you\u2019re legendary in Perception, you instead Search areas four times as quickly."]
    }, {
        "name": "Foil Senses",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=785",
        "prereq": "master in Stealth",
        "benefits": "Take precautions against special senses",
        "text": ["You are adept at foiling creatures\u2019 special senses and cautious enough to safeguard against them at all times. Whenever you use the Avoid Notice, Hide, or Sneak actions, you are always considered to be taking precautions against special senses (see the Detecting with Other Senses sidebar on page 465)."]
    }, {
        "name": "Impeccable Crafter",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=792",
        "prereq": "master in Crafting, Specialty Crafting",
        "benefits": "Specialty Crafting Craft items more efficiently",
        "text": ["You craft flawless creations with great efficiency. Whenever you roll a success at a Crafting check to make an item of the type you chose with Specialty Crafting, you get a critical success instead."]
    }, {
        "name": "Inventor",
        "level": "7",
        "traits": ["General", " Downtime", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=798",
        "prereq": "master in Crafting",
        "benefits": "Use Crafting to create item formulas",
        "text": ["You are a genius at Crafting, easily able to determine how things are made and create new inventions. You can spend downtime to invent a common formula that you don\u2019t know. This works just like the Craft activity: you spend half the Price of the formula up front, attempt a Crafting check, and on a success either finish the formula by paying the difference or work for longer to decrease the Price. The difference is that you spend the additional time in research, design, and development, rather than in creating an item. Once it\u2019s complete, you add the new formula you invented to your formula book."]
    }, {
        "name": "Kip Up",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=799",
        "prereq": "master in Acrobatics",
        "benefits": "Stand up for free without triggering reactions",
        "text": ["You stand up. This movement doesn\u2019t trigger reactions."]
    }, {
        "name": "Planar Survival",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=819",
        "prereq": "master in Survival",
        "benefits": "Use Survival to Subsist on different planes",
        "text": ["You can Subsist using Survival on different planes, even those without resources or natural phenomena you normally need. For instance, you can forage for food even if the plane lacks food that could normally sustain you. A success on your check to Subsist can also reduce the damage dealt by the plane, at the GM\u2019s discretion."]
    }, {
        "name": "Quick Climber",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=821",
        "prereq": "master in Athletics",
        "benefits": "Climb swiftly",
        "text": ["When Climbing, you move 5 more feet on a success and 10 more feet on a critical success, to a maximum of your Speed. If you\u2019re legendary in Athletics, you gain a climb Speed equal to your Speed."]
    }, {
        "name": "Quick Recognition",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=826",
        "prereq": "master in Arcana, Nature, Occultism, or Religion; Recognize Spell",
        "benefits": "Master in Arcana, Nature, Occultism, Identify spells as a free action",
        "text": ["You Recognize Spells swiftly. Once per round, you can Recognize a Spell using a skill in which you\u2019re a master as a free action."]
    }, {
        "name": "Quick Swim",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=829",
        "prereq": "master in Athletics",
        "benefits": "Swim quickly",
        "text": ["You Swim 5 feet farther on a success and 10 feet farther on a critical success, to a maximum of your Speed. If you\u2019re legendary in Athletics, you gain a swim Speed equal to your Speed."]
    }, {
        "name": "Quick Unlock",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=830",
        "prereq": "master in Thievery",
        "benefits": "Pick a Lock with 1 action",
        "text": ["You can Pick a Lock using 1 action instead of 2."]
    }, {
        "name": "Shameless Request",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=838",
        "prereq": "master in Diplomacy",
        "benefits": "Make Requests of others with lesser consequences",
        "text": ["You can downplay the consequences or outrageousness of your requests using sheer brazenness and charm. When you Request something, you reduce any DC increases for making an outrageous request by 2, and if you roll a critical failure for your Request, you get a failure instead. While this means you can never cause your target to reduce their attitude toward you by making a Request, they eventually tire of requests, even though they still have a positive attitude toward you."]
    }, {
        "name": "Slippery Secrets",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=842",
        "prereq": "master in Deception",
        "benefits": "Evade attempts to uncover your true nature",
        "text": ["You elude and evade attempts to uncover your true nature or intentions. When a spell or magical effect tries to read your mind, detect whether you are lying, or reveal your alignment, you can attempt a Deception check against the spell or effect\u2019s DC. If you succeed, the effect reveals nothing."]
    }, {
        "name": "Swift Sneak",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=850",
        "prereq": "master in Stealth",
        "benefits": "Move your full Speed while you Sneak",
        "text": ["You can move your full Speed when you Sneak. You can use Swift Sneak while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Terrified Retreat",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=853",
        "prereq": "master in Intimidation",
        "benefits": "Cause foes you Demoralize to flee",
        "text": ["When you critically succeed at the Demoralize action, if the target\u2019s level is lower than yours, the target is fleeing for 1 round."]
    }, {
        "name": "Wall Jump",
        "level": "7",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=863",
        "prereq": "master in Athletics",
        "benefits": "Jump of walls",
        "text": ["You can use your momentum from a jump to propel yourself off a wall. If you\u2019re adjacent to a wall at the end of a jump (whether performing a High Jump, Long Jump, or Leap), you don\u2019t fall as long as your next action is another jump. Furthermore, since your previous jump gives you momentum, you can use High Jump or Long Jump as a single action, but you don\u2019t get to Stride as part of the activity.", " You can use Wall Jump only once in a turn, unless you\u2019re legendary in Athletics, in which case you can use Wall Jump as many times as you can use consecutive jump actions in that turn."]
    }, {
        "name": "Incredible Investiture",
        "level": "11",
        "traits": ["General"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=795",
        "prereq": "Charisma 16",
        "benefits": "Invest up to 12 magic items",
        "text": ["You have an incredible ability to invest more magic items. Increase your limit on invested items from 10 to 12."]
    }, {
        "name": "Cloud Jump",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=767",
        "prereq": "legendary in Athletics",
        "benefits": "Jump impossible distances",
        "text": ["Your unparalleled athletic skill allows you to jump impossible distances. Triple the distance you Long Jump (so you could jump 60 feet on a successful DC 20 check). When you High Jump, use the calculation for a Long Jump but don\u2019t triple the distance.", " When you Long Jump or High Jump, you can also increase the number of actions you use (up to the number of actions you have remaining in your turn) to jump even further. For each extra action, add your Speed to the maximum distance you jump."]
    }, {
        "name": "Craft Anything",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=773",
        "prereq": "legendary in Crafting",
        "benefits": "Ignore most requirements for crafting items",
        "text": ["You can find ways to craft just about anything, despite restrictions. As long as you have the appropriate Crafting skill feat (such as ", " for magic items) and meet the item\u2019s level and proficiency requirement, you ignore just about any other requirement, such as being of a specific ancestry or providing spells. The only exceptions are requirements that add to the item\u2019s cost, including castings of spells that themselves have a cost, and requirements of special items such as the ", " that have exclusive means of access and Crafting. The GM decides whether you can ignore a requirement."]
    }, {
        "name": "Divine Guidance",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=775",
        "prereq": "legendary in Religion",
        "benefits": "Find guidance in the writings of your faith",
        "text": ["You\u2019re so immersed in divine scripture that you find meaning and guidance in your texts in any situation. Spend 10 minutes Deciphering Writing on religious scriptures of your deity or philosophy while thinking about a particular problem or conundrum you face, and then attempt a Religion check (DC determined by the GM). If you succeed, you unearth a relevant passage, parable, or aphorism that can help you move forward or change your thinking to help solve your conundrum. For example, the GM might provide you with a cryptic poem or hint that can guide you to the next step of solving your problem."]
    }, {
        "name": "Legendary Codebreaker",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=801",
        "prereq": "legendary in Society",
        "benefits": "Quickly Decipher Writing using Society",
        "text": ["Your skill with languages and codes is so great that you can decipher information with little more than a quick read through a text. You can Decipher Writing using Society while reading at normal speed. If you slow down and spend the full amount of time that\u2019s ordinarily required and roll a success, you get a critical success; if you critically succeed while spending the normal amount of time, you gain a nearly word-for-word understanding of the document."]
    }, {
        "name": "Legendary Linguist",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=802",
        "prereq": "legendary in Society, Multilingual",
        "benefits": "Create pidgin languages to communicate with anyone",
        "text": ["You\u2019re so skilled with languages you can create a pidgin instantly. You can always talk to any creature that has a language\u2014even a language you don\u2019t know \u2014by creating a new pidgin language that uses simplified terms and conveys basic concepts. To do so, you must first understand at least what medium of communication the creature uses (speech, sign language, and so on)."]
    }, {
        "name": "Legendary Medic",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=803",
        "prereq": "legendary in Medicine",
        "benefits": "Remove disease or the blinded, deafened, doomed, or drained condition",
        "text": ["You\u2019ve discovered medical breakthroughs or techniques that achieve miraculous results. Once per day for each target, you can spend 1 hour treating that target and attempt a Medicine check to remove a disease or the blinded, deafened, doomed, or drained condition. Use the DC of the disease or of the spell or effect that created the condition. If the effect\u2019s source is an artifact, above 20th level, or similarly powerful, increase the DC by 10."]
    }, {
        "name": "Legendary Negotiation",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=804",
        "prereq": "legendary in Diplomacy",
        "benefits": "Quickly parley with foes",
        "text": ["You can negotiate incredibly quickly in adverse situations. You attempt to Make an Impression and then Request your opponent cease their current activity and engage in negotiations. You take a \u20135 penalty to your Diplomacy check. The GM sets the DC of the Request based on the circumstances\u2014it\u2019s generally at least a very hard DC of the creature\u2019s level. Some creatures might simply refuse, and even those who agree to parley might ultimately find your arguments lacking and return to violence."]
    }, {
        "name": "Legendary Performer",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=805",
        "prereq": "legendary in Performance, Virtuosic Performer",
        "benefits": "Gain renown for your Performance Virtuosic Performer",
        "text": ["Your fame has spread throughout the lands. NPCs who succeed at a DC 10 Society check to Recall Knowledge have heard of you and usually have an attitude toward you one step better than normal, depending on your reputation and the NPC\u2019s disposition. For instance, if you\u2019re well-known for cruel and demanding behavior, creatures might be intimidated by you, rather than be friendly toward you. When you Earn Income with Performance, you attract higher-level audiences than your location would allow, as audiences flock to see you. For instance, rulers and angels might travel to your small tower in the woods to hear you perform. Typically, this increases the audiences available by 2 levels or more, determined by the GM."]
    }, {
        "name": "Legendary Professional",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=806",
        "prereq": "legendary in Lore",
        "benefits": "Gain renown for your Lore",
        "text": ["Your fame has spread throughout the lands (for instance, if you have Warfare Lore, you might be a legendary general or tactician). This works as ", ", except you gain higher-level jobs when you Earn Income with Lore."]
    }, {
        "name": "Legendary Sneak",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=807",
        "prereq": "legendary in Stealth, Swift Sneak",
        "benefits": "Hide and Sneak without cover or being concealed",
        "text": ["You\u2019re always sneaking unless you choose to be seen, even when there\u2019s nowhere to hide. You can Hide and Sneak even without cover or being concealed. When you employ an exploration tactic other than Avoiding Notice, you also gain the benefits of Avoiding Notice unless you choose not to. See page 479 for more information about exploration tactics."]
    }, {
        "name": "Legendary Survivalist",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=808",
        "prereq": "legendary in Survival",
        "benefits": "Survive extreme conditions",
        "text": ["You can survive indefinitely without food or water and can endure severe, extreme, and incredible cold and heat without taking damage from doing so."]
    }, {
        "name": "Legendary Thief",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=809",
        "prereq": "legendary in Thievery, Pickpocket",
        "benefits": "Steal what would normally be impossible to steal",
        "text": ["Your ability to Steal defies belief. You can attempt to Steal something that is actively wielded or that would be extremely noticeable or time consuming to remove (like worn shoes or armor). You must do so slowly and carefully, spending at least 1 minute (and significantly longer for items that are normally time consuming to remove, like armor). Throughout this duration you must have some means of staying hidden, such as the cover of darkness or a bustling crowd. You take a \u20135 penalty to your Thievery check. Even if you succeed, if the item is extremely prominent\u2014like a suit of full plate armor\u2014onlookers will quickly notice it\u2019s gone after you steal it."]
    }, {
        "name": "Reveal Machinations",
        "level": "15",
        "traits": ["General", " Rare", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=924",
        "prereq": "legendary in Deception",
        "benefits": "You convince a creature that you played a minor but recurring role in its life.",
        "text": ["You reveal that you played a minor but recurring role in another humanoid\u2019s life\u2014or at least convince them that\u2019s the case. Attempt a ", " check against the target\u2019s Will DC. On a success, the revelation makes them ", " 2, and on a critical success they are frightened 3. In addition, you gain information about the subject as though you had attempted to ", " about them using an appropriate skill and received the same result on your roll. You can\u2019t use this ability against the same humanoid again until 1 day has passed and you\u2019ve also successfully disguised yourself as a different person."]
    }, {
        "name": "Scare to Death",
        "level": "15",
        "traits": ["General", " Death", " Emotion", " Fear", " Incapacitation", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=837",
        "prereq": "legendary in Intimidation",
        "benefits": "Scare a target so much, they might die",
        "text": ["You can frighten foes so much, they might die. Attempt an Intimidation check against the Will DC of a living creature within 30 feet of you that you sense or observe and who can sense or observe you. If the target can\u2019t hear you or doesn\u2019t understand the language you are speaking, you take a \u20134 circumstance penalty. The creature is temporarily immune for 1 minute.", " The target must succeed at a Fortitude save against your Intimidation DC or die. If the target succeeds at its save, it becomes frightened 2 and is fleeing for 1 round; it suffers no effect on a critical success. ", " The target becomes frightened 2.", " The target becomes frightened 1.", " The target is unaffected."]
    }, {
        "name": "Unified Theory",
        "level": "15",
        "traits": ["General", " Skill"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=859",
        "prereq": "legendary in Arcana",
        "benefits": "Use Arcana for checks for all magical traditions",
        "text": ["You\u2019ve started to make a meaningful connection about the common underpinnings of the four traditions of magic and magical essences, allowing you to understand them all through an arcane lens. Whenever you use an action or a skill feat that requires a Nature, Occultism, or Religion check, depending on the magic tradition, you can use Arcana instead. If you would normally take a penalty or have a higher DC for using Arcana on other magic (such as when using Identify Magic), you no longer do so."]
    }, {
        "name": "Alchemical Familiar",
        "level": "1",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=92",
        "prereq": "",
        "benefits": "You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood.",
        "text": ["You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood. This alchemical familiar appears to be a small creature of flesh and blood, though it might have some unusual or distinguishing aspects depending on your creative process. Like other familiars, your alchemical familiar assists you in your laboratory and on adventures. The familiar uses your Intelligence modifier to determine its Perception, Acrobatics, and Stealth modifiers (see ", " for more information)."]
    }, {
        "name": "Alchemical Savant",
        "level": "1",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=93",
        "prereq": "trained in Crafting",
        "benefits": "You can identify alchemical items quickly.",
        "text": ["You can identify alchemical items quickly. When using the Crafting skill to Identify Alchemy on an alchemical item you hold, you can do so as a single action, which has the concentrate and manipulate traits, instead of spending 10 minutes. If you have the formula for the item you are attempting to identify, you gain a +2 circumstance bonus to your check, and if you roll a critical failure, you get a failure instead."]
    }, {
        "name": "Far Lobber",
        "level": "1",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=94",
        "prereq": "",
        "benefits": "You\u2019ve learned how to throw a longer distance.",
        "text": ["You\u2019ve learned how to throw a longer distance. When you throw an alchemical bomb, it has a range increment of 30 feet instead of the usual 20 feet."]
    }, {
        "name": "Quick Bomber",
        "level": "1",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=95",
        "prereq": "",
        "benefits": "You keep your bombs in easy-to-reach pouches from which you draw without thinking.",
        "text": ["You keep your bombs in easy-to-reach pouches from which you draw without thinking. You Interact to draw a bomb, then Strike with it."]
    }, {
        "name": "Poison Resistance",
        "level": "2",
        "traits": ["Alchemist", " Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=96",
        "prereq": "",
        "benefits": "Repeated exposure to toxic reagents has fortified your body against poisons of all kinds.",
        "text": ["Your body has become fortified against toxins. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons."]
    }, {
        "name": "Revivifying Mutagen",
        "level": "2",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=97",
        "prereq": "",
        "benefits": "While under the effect of a mutagen, you can metabolize that mutagen\u2019s power to heal yourself.",
        "text": ["While under the effect of a mutagen, you can metabolize that mutagen\u2019s power to heal yourself. This uses a single action, which has the concentrate and manipulate traits. Once the action is complete, you regain 1d6 Hit Points for every 2 item levels of the mutagen (minimum 1d6), but the mutagen\u2019s duration immediately ends, even if you are under the effect of Persistent Mutagen."]
    }, {
        "name": "Smoke Bomb",
        "level": "2",
        "traits": ["Alchemist", " Additive 1"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=98",
        "prereq": "",
        "benefits": "You cause the bomb to create a cloud of thick smoke, in addition to its normal effects.",
        "text": ["You cause the bomb to create a cloud of thick smoke, in addition to its normal effects. When thrown, the bomb creates a cloud of smoke in a 10-foot-radius burst. You choose which corner of the target\u2019s space (or the space in which the bomb lands) the cloud is centered on. Creatures within that area have the concealed condition, and all other creatures are concealed to them. The smoke lasts for 1 minute or until dissipated by a strong wind."]
    }, {
        "name": "Calculated Splash",
        "level": "4",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=99",
        "prereq": "",
        "benefits": "You have calculated all the angles to maximize a bomb\u2019s splash.",
        "text": ["You have calculated all the angles to maximize a bomb\u2019s splash. When you throw an alchemical bomb with the ", " trait, you can cause the bomb to deal splash damage equal to your Intelligence modifier (minimum 0) instead of the normal amount."]
    }, {
        "name": "Efficient Alchemy",
        "level": "4",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=100",
        "prereq": "",
        "benefits": "Thanks to the time you\u2019ve spent studying and experimenting, you know how to scale your formulas into larger batches that don\u2019t require any additional attention.",
        "text": ["Thanks to the time you\u2019ve spent studying and experimenting, you know how to scale your formulas into larger batches that don\u2019t require any additional attention. When spending downtime to Craft alchemical items, you can produce twice as many alchemical items in a single batch without spending additional preparatory time. For instance, if you are creating elixirs of life, you can craft up to eight elixirs in a single batch using downtime, rather than four. This does not reduce the amount of alchemical reagents required or other ingredients needed to craft each item, nor does it increase your rate of progress for days past the base downtime spent. This also does not change the number of items you can create in a batch using advanced alchemy."]
    }, {
        "name": "Enduring Alchemy",
        "level": "4",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=101",
        "prereq": "",
        "benefits": "You\u2019ve learned how to make your personal energy last just a little bit longer when quickly brewing ad hoc concoctions.",
        "text": ["You\u2019ve learned how to make your personal energy last just a little bit longer when quickly brewing ad hoc concoctions. When using ", " to create an alchemical tool or elixir, that tool or elixir remains potent until the end of your next turn, instead of losing its potency at the start of your next turn."]
    }, {
        "name": "Combine Elixirs",
        "level": "6",
        "traits": ["Alchemist", " Additive 2"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=102",
        "prereq": "",
        "benefits": "You\u2019ve discovered how to mix two elixirs into a single hybrid concoction.",
        "text": ["You\u2019ve discovered how to mix two elixirs into a single hybrid concoction. You can spend 2 additional batches of infused reagents to add a second elixir to the one you\u2019re crafting. The second elixir must also be at least 2 levels lower than your advanced alchemy level, and the combination elixir is an alchemical item two levels higher than the higher of the two elixirs\u2019 levels. When this combination elixir is consumed, both the constituent elixirs take effect. For example, you can combine two ", " to create a combined elixir that heals twice the normal amount, or you can combine a ", " with a ", " to both gain darkvision and find secret doors."]
    }, {
        "name": "Debilitating Bomb",
        "level": "6",
        "traits": ["Alchemist", " Additive 2"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=103",
        "prereq": "",
        "benefits": "Your bombs impose additional effects on your enemies.",
        "text": ["Your bombs impose additional effects on your enemies. You mix a substance into the bomb that causes one of the following: dazzled, deafened, flat-footed, or a \u20135-foot status penalty to Speeds. If the attack with that bomb hits, the target must succeed at a Fortitude saving throw or suffer that effect until the start of your next turn. Use your class DC for this saving throw (even if someone else throws the bomb)."]
    }, {
        "name": "Directional Bombs",
        "level": "6",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=104",
        "prereq": "",
        "benefits": "You can lob bombs with great force and a precise trajectory to angle the splash in a cone spraying in a single direction. ",
        "text": ["You can lob bombs with great force and a precise trajectory to angle the splash in a cone spraying in a single direction. When throwing an alchemical bomb with the ", " trait, instead of splashing all squares adjacent to the target, you can treat the target\u2019s space as the first affected square of a 15-foot cone directed away from you, potentially allowing you to avoid allies and splash deeper into enemy lines. If the target takes up more than a single square, the target\u2019s square closest to you is the first affected square of the cone."]
    }, {
        "name": "Feral Mutagen",
        "level": "8",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=105",
        "prereq": "",
        "benefits": "Your bestial mutagen brings out the beast lurking within you.",
        "text": ["Your ", " brings out the beast lurking within you, granting you especially sharp claws and teeth as well as a ferocious appearance. Whenever you\u2019re affected by a bestial mutagen you created, you gain the mutagen\u2019s item bonus to your Intimidation checks. In addition, your claws and jaws are increasingly vicious, and they gain the ", " trait. Finally, you can increase the mutagen\u2019s penalty to AC from \u20131 to \u20132 and, in exchange, increase the damage die size of your claws and jaws by one step."]
    }, {
        "name": "Powerful Alchemy",
        "level": "8",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=106",
        "prereq": "",
        "benefits": "Alchemical items you create on the fly are particularly potent.",
        "text": ["Alchemical items you create on the fly are particularly potent. When you use Quick Alchemy to create an infused alchemical item that allows a saving throw, you can change its DC to your class DC."]
    }, {
        "name": "Sticky Bomb",
        "level": "8",
        "traits": ["Alchemist", " Additive 2"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=107",
        "prereq": "",
        "benefits": "You mix in an additive to make your bomb\u2019s contents adhere to the target and continue to deal damage.",
        "text": ["You mix in an additive to make your bomb\u2019s contents adhere to the target and continue to deal damage. A creature that takes a direct hit from one of your sticky bombs also takes persistent damage equal to and of the same type as the bomb\u2019s splash damage. If the bomb already deals persistent damage, combine the two amounts."]
    }, {
        "name": "Elastic Mutagen",
        "level": "10",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=108",
        "prereq": "",
        "benefits": "You can cause your body to twist and flow like the quicksilver within your mutagens.",
        "text": ["You can cause your body to twist and flow like the quicksilver within your mutagens. Whenever you are under the effects of a ", " you created, you can stretch your legs and Step up to 10 feet, and you can squish and compress your body, allowing you to make it through tight spaces as if you were one size smaller, in addition to any effect from Squeezing."]
    }, {
        "name": "Expanded Splash",
        "level": "10",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=109",
        "prereq": "Calculated Splash",
        "benefits": "The particularly volatile compounds that you brew into your bombs result in them creating especially large and powerful explosions.",
        "text": ["The particularly volatile compounds that you brew into your bombs result in them creating especially large and powerful explosions. When you throw an alchemical bomb you created and that bomb has the ", " trait, you can add your Intelligence modifier to the bomb\u2019s usual splash damage, and it deals splash damage to every creature within 10 feet of the target."]
    }, {
        "name": "Greater Debilitating Bomb",
        "level": "10",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=110",
        "prereq": "Debilitating Bomb",
        "benefits": "You have learned enhanced techniques and alchemical secrets that allow you to expand the range of effects you can impose with your bombs.",
        "text": ["You have learned enhanced techniques and alchemical secrets that allow you to expand the range of effects you can impose with your bombs. When you use ", ", add the following to the list you can choose from: clumsy 1, enfeebled 1, stupefied 1, or \u201310-foot status penalty to Speeds."]
    }, {
        "name": "Merciful Elixir",
        "level": "10",
        "traits": ["Alchemist", " Additive 2"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=111",
        "prereq": "",
        "benefits": "You mix a special additive into your elixir that calms the drinker\u2019s body and mind.",
        "text": ["You mix a special additive into your elixir that calms the drinker\u2019s body and mind. The elixir of life attempts to counteract one fear effect or one effect imposing the paralyzed condition on the drinker."]
    }, {
        "name": "Potent Poisoner",
        "level": "10",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=112",
        "prereq": "Powerful Alchemy",
        "benefits": "By concentrating your poisons\u2019 toxic components, you make them harder for victims to resist.",
        "text": ["By concentrating your poisons\u2019 toxic components, you make them harder for victims to resist. When you craft an alchemical item with the ", " trait by any means, the DC is increased by up to 4, to a maximum of your class DC."]
    }, {
        "name": "Extend Elixir",
        "level": "12",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=113",
        "prereq": "",
        "benefits": "Integrating your own personal energy into the elixirs you create causes them to affect you for longer.",
        "text": ["Integrating your own personal energy into the elixirs you create causes them to affect you for longer. When you consume one of your alchemical items that has the ", " and ", " traits and a duration of 1 minute or longer, that elixir\u2019s duration is doubled."]
    }, {
        "name": "Invincible Mutagen",
        "level": "12",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=114",
        "prereq": "",
        "benefits": "The fortifying additives you brew into your mutagens make your juggernaut form impervious.",
        "text": ["The fortifying additives you brew into your mutagens make your juggernaut form impervious. Whenever you\u2019re affected by a ", " you created, you gain resistance to all physical damage equal to your Intelligence modifier (minimum 0)."]
    }, {
        "name": "Uncanny Bombs",
        "level": "12",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=115",
        "prereq": "Far Lobber",
        "benefits": "You lob bombs unerringly, despite obstructions or distance.",
        "text": ["You lob bombs unerringly, despite obstructions or distance. When you throw an alchemical item with the ", " trait, its range increment increases to 60 feet, you reduce any circumstance bonus to the target\u2019s AC from cover by 1, and you automatically succeed at the flat check when targeting a concealed creature."]
    }, {
        "name": "Glib Mutagen",
        "level": "14",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=116",
        "prereq": "",
        "benefits": "Your silvertongue mutagen transcends languages and plausibility.",
        "text": ["Your ", " transcends languages and plausibility. When affected by a silvertongue mutagen you have created, you ignore circumstance penalties to Deception, Diplomacy, Intimidation, and Performance checks. In addition, your words transcend linguistic barriers; everyone listening to you speak hears your words as if you were speaking in their own language (though you do not actually speak that language, nor does this ability allow you to understand any additional languages)."]
    }, {
        "name": "Greater Merciful Elixir",
        "level": "14",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=117",
        "prereq": "Merciful Elixir",
        "benefits": "Your additives contain panaceas that can remedy a plethora of maladies.",
        "text": ["Your additives contain panaceas that can remedy a plethora of maladies. When you use ", ", your elixir can instead attempt to counteract the blinded, deafened, sickened, or slowed condition."]
    }, {
        "name": "True Debilitating Bomb",
        "level": "14",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=118",
        "prereq": "Greater Debilitating Bomb",
        "benefits": "Ever inventive, you have discovered increasingly devastating ways for your bombs to impede and hamper your foes.",
        "text": ["Ever inventive, you have discovered increasingly devastating ways for your bombs to impede and hamper your foes. When you use ", ", add the following to the list of effects you can choose from: enfeebled 2, stupefied 2, or a \u201315-foot status penalty to Speeds. If you instead apply one of the effects listed in Debilitating Bomb, the target avoids the effect only if the result of its saving throw is a critical success."]
    }, {
        "name": "Eternal Elixir",
        "level": "16",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=119",
        "prereq": "Extend Elixir",
        "benefits": "Your body readily accepts and retains minor changes.",
        "text": ["Your body readily accepts and retains minor changes. When you drink one of your alchemical items that has the ", " and ", " traits and a duration of 1 minute or more, you can make the elixir\u2019s duration indefinite. You can do so only if the elixir\u2019s level is half your level or lower. If you later consume a different elixir and make it indefinite, the effect of the previous indefinite elixir ends."]
    }, {
        "name": "Exploitive Bomb",
        "level": "16",
        "traits": ["Alchemist", " Additive 2"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=120",
        "prereq": "",
        "benefits": "You mix a substance into the bomb to foil resistances.",
        "text": ["You mix a substance into the bomb to foil resistances. The\r\nbomb reduces any resistance the enemy has to its damage\r\ntype by an amount equal to your level, but only for that attack."]
    }, {
        "name": "Genius Mutagen",
        "level": "16",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=121",
        "prereq": "",
        "benefits": "Specialized tweaks to your formula that supplements your genius considerably broaden the benefits you gain from cognitive mutagens.",
        "text": ["Specialized tweaks to your formula that supplements your genius considerably broaden the benefits you gain from cognitive mutagens. When you\u2019re affected by a ", " you created, you also gain the mutagen\u2019s item bonus to Deception, Diplomacy, Intimidation, Medicine, Nature, Performance, Religion, and Survival checks. In addition, you can communicate telepathically with creatures within 60 feet with whom you share a language. The communication is two-way once you establish it, so a creature you contact can also communicate with you."]
    }, {
        "name": "Persistent Mutagen",
        "level": "16",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=122",
        "prereq": "Extend Elixir",
        "benefits": "You\u2019ve trained your physical form to remain stable within the a given altered state.",
        "text": ["You\u2019ve trained your physical form to remain stable within the a given altered state. Once per day, when you consume an alchemical item with the ", " and ", " traits that you have crafted, you can retain its effects until the next time you make your daily preparations instead of its normal duration."]
    }, {
        "name": "Improbable Elixirs",
        "level": "18",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=123",
        "prereq": "",
        "benefits": "Your mastery of alchemical secrets enables you to replicate effects most believe can be achieved only via magic.",
        "text": ["Your mastery of alchemical secrets enables you to replicate effects most believe can be achieved only via magic. Select a number of potions equal to your Intelligence modifier (minimum 1) of 9th level or lower. You gain formulas to Craft these potions as alchemical items with the ", " trait. When Crafting these alchemical elixirs, you can substitute alchemical reagents for an equal value of magical components, and you can use ", " instead of any other required tool kits. Other than that, the formula does not change. Once you\u2019ve chosen the potion formulas, they can\u2019t be changed."]
    }, {
        "name": "Mindblank Mutagen",
        "level": "18",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=124",
        "prereq": "",
        "benefits": "With a minor adjustment of ratios in the formula for your serene mutagen, you gain mental protections.",
        "text": ["With a minor adjustment of ratios in the formula for your ", ", you gain mental protections. When you\u2019re affected by a serene mutagen you created, ", ", ", ", and ", " effects of 9th level or lower detect nothing from you or your possessions and auras. For instance, ", " would still detect other magic in the area, but not any magic on you."]
    }, {
        "name": "Miracle Worker",
        "level": "18",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=125",
        "prereq": "",
        "benefits": "Your alchemical mastery can resuscitate the recently slain.",
        "text": ["Your alchemical mastery can resuscitate the recently slain. You can administer a ", " to a creature who has been dead for no more than 2 rounds. When you do, that creature is immediately returned to life with 1 Hit Point and becomes wounded 1."]
    }, {
        "name": "Perfect Debilitation",
        "level": "18",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=126",
        "prereq": "",
        "benefits": "You have perfected the formulas for bombs that impede your enemies.",
        "text": ["You have perfected the formulas for bombs that impede your enemies. When you use ", ", your target avoids the condition the bomb imposes only if it critically succeeds at its saving throw."]
    }, {
        "name": "Craft Philosopher's Stone",
        "level": "20",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=127",
        "prereq": "",
        "benefits": "Your research has paid off, culminating in the legendary philosopher\u2019s stone.",
        "text": ["Your research has paid off, culminating in the legendary philosopher\u2019s stone. You learn the formula for the ", " and can add it to your formula book."]
    }, {
        "name": "Mega Bomb",
        "level": "20",
        "traits": ["Alchemist", " Additive 3"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=128",
        "prereq": "Expanded Splash",
        "benefits": "You add an incredibly powerful additive to a held bomb to create a mega bomb.",
        "text": ["You add an incredibly powerful additive to a held bomb to create a mega bomb, greatly increasing its area and power. You use an Interact action to throw the mega bomb, rather than Strike, and you don\u2019t make an attack roll. The mega bomb affects creatures in a 30-foot-radius burst, centered within 60 feet of you. The bomb deals damage as if each creature were the primary target, with a basic Reflex save. On a failed save, a creature also takes any extra effects that affect a primary target (such as flat-footed from ", "). While all targets in the area take splash damage as primary targets, there is no further splash beyond that area. If your next action after creating a mega bomb isn\u2019t an Interact action to throw it, the mega bomb denatures and loses all effects."]
    }, {
        "name": "Perfect Mutagen",
        "level": "20",
        "traits": ["Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=129",
        "prereq": "",
        "benefits": "You have enhanced the formulas for your mutagens, aligning them perfectly to your physiology.",
        "text": ["You have enhanced the formulas for your ", ", aligning them perfectly to your physiology. When under the effect of a mutagen you crafted, you do not suffer its drawback."]
    }, {
        "name": "Acute Vision",
        "level": "1",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=130",
        "prereq": "",
        "benefits": "Your sense improve when you are raging.",
        "text": ["When you are raging, your visual senses improve, granting you darkvision."]
    }, {
        "name": "Moment of Clarity",
        "level": "1",
        "traits": ["Barbarian", " Concentrate", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=131",
        "prereq": "",
        "benefits": "You push back your rage for a moment in order to think clearly.",
        "text": ["You push back your rage for a moment in order to think clearly. Until the end of this turn, you can use actions with the ", " trait even if those actions don\u2019t have the ", " trait."]
    }, {
        "name": "Raging Intimidation",
        "level": "1",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=132",
        "prereq": "",
        "benefits": "Your fury fills your foes with fear.",
        "text": ["Your fury fills your foes with fear. While you are raging, your Demoralize and Scare to Death actions (from the Intimidation skill and an Intimidation skill feat, respectively) gain the rage trait, allowing you to use them while raging. As soon as you meet the prerequisites for the skill feats ", " and ", ", you gain these feats."]
    }, {
        "name": "Raging Thrower",
        "level": "1",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=133",
        "prereq": "",
        "benefits": "Thrown weapons become especially deadly in your fury.",
        "text": ["Thrown weapons become especially deadly in your fury. You apply the additional damage from Rage to your thrown weapon attacks. If you have the ", " feat or the devastator class feature, apply their benefits to thrown weapon attacks."]
    }, {
        "name": "Sudden Charge",
        "level": "1",
        "traits": ["Barbarian", " Fighter", " Flourish", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=134",
        "prereq": "",
        "benefits": "With a quick sprint, you dash up to your foe and swing.",
        "text": ["With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Acute Scent",
        "level": "2",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=135",
        "prereq": "Acute Vision or darkvision",
        "benefits": "When you Rage, your sense of smell improves.",
        "text": ["When you Rage, your sense of smell improves. You gain imprecise scent with a range of 30 feet."]
    }, {
        "name": "Furious Finish",
        "level": "2",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=136",
        "prereq": "",
        "benefits": "Desperate to finish the fight, you pour all your rage into one final blow.",
        "text": ["Desperate to finish the fight, you pour all your rage into one final blow. Make a Strike. If it hits, you gain a circumstance bonus to damage equal to the number of rounds remaining in your Rage (maximum 10). After this Strike, your Rage immediately ends, and you are fatigued until you rest for at least 10 minutes."]
    }, {
        "name": "No Escape",
        "level": "2",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=137",
        "prereq": "",
        "benefits": "You keep pace with a retreating foe.",
        "text": ["You keep pace with a retreating foe. Stride up to your Speed, following the foe and keeping it in reach throughout its movement until it stops moving or you\u2019ve moved your full Speed. You can use No Escape to Burrow, Climb, Fly, or Swim instead of Stride if you have the corresponding movement type."]
    }, {
        "name": "Second Wind",
        "level": "2",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=138",
        "prereq": "",
        "benefits": "You can enter a second rage, but afterward you need to catch your breath",
        "text": ["You can enter a second rage, but afterward you need to catch your breath. You can Rage without waiting for 1 minute after the previous Rage (or 1 round, with quick rage), but when you end this second Rage, you\u2019re fatigued until you rest for 10 minutes."]
    }, {
        "name": "Shake it Off",
        "level": "2",
        "traits": ["Barbarian", " Concentrate", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=139",
        "prereq": "",
        "benefits": "You concentrate on your rage, overcoming fear and fighting back sickness.",
        "text": ["You concentrate on your rage, overcoming fear and fighting back sickness. Reduce your frightened condition value by 1, and attempt a Fortitude save to recover from the sickened condition as if you had spent an action retching; you reduce your sickened condition value by 1 on a failure (but not on a critical failure), by 2 on a success, or by 3 on a critical success."]
    }, {
        "name": "Fast Movement",
        "level": "4",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=140",
        "prereq": "",
        "benefits": "Your rage is a frenzy of rapid movements.",
        "text": ["Your rage is a frenzy of rapid movements. While you are raging, you gain a +10-foot status bonus to your Speed."]
    }, {
        "name": "Raging Athlete",
        "level": "4",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=141",
        "prereq": "expert in Athletics",
        "benefits": "Physical obstacles can\u2019t hold back your fury. ",
        "text": ["Physical obstacles can\u2019t hold back your fury. While you are raging, you gain a climb Speed and swim Speed equal to your land Speed, the DC of High Jumps and Long Jumps decreases by 10, and your Leap distance increases by 5 feet when you jump horizontally and by 2 feet when you jump vertically."]
    }, {
        "name": "Swipe",
        "level": "4",
        "traits": ["Barbarian", " Fighter", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=142",
        "prereq": "",
        "benefits": "You make a wide, arcing swing. ",
        "text": ["You make a wide, arcing swing. Make a single melee Strike and compare the attack roll result to the ACs of up to two foes, each of whom must be within your melee reach and adjacent to the other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty. If you\u2019re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks."]
    }, {
        "name": "Wounded Rage",
        "level": "4",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=143",
        "prereq": "",
        "benefits": "You roar in pain, awakening the rage within you.",
        "text": ["You roar in pain, awakening the rage within you. You Rage."]
    }, {
        "name": "Animal Skin",
        "level": "6",
        "traits": ["Barbarian", " Instinct", " Morph", " Primal", " Transmutation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=144",
        "prereq": "animal instinct",
        "benefits": "Your proficiency in unarmored defense increases to expert.",
        "text": ["Your proficiency in unarmored defense increases to expert. While you are raging and unarmored, your skin transforms into a thick hide resembling your animal\u2019s skin. You gain a +1 status bonus to AC instead of taking a \u20131 penalty to AC; if you have the greater juggernaut class feature, this status bonus increases to +2. The thickness of your hide gives you a Dexterity modifier cap to your AC of +3."]
    }, {
        "name": "Attack of Opportunity",
        "level": "6",
        "traits": ["Barbarian", " Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=145",
        "prereq": "",
        "benefits": "You swat a foe that leaves an opening. ",
        "text": ["You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a ", " action, you disrupt that action. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike."]
    }, {
        "name": "Brutal Bully",
        "level": "6",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=146",
        "prereq": "expert in Athletics",
        "benefits": "You push your foes around and leave bruises.",
        "text": ["You push your foes around and leave bruises. While raging, when you successfully Disarm, Grapple, Shove, or Trip a foe, you deal that foe bludgeoning damage equal to your Strength modifier; add this to the damage from a critical success to Trip."]
    }, {
        "name": "Cleave",
        "level": "6",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=147",
        "prereq": "",
        "benefits": "You swing clear through one foe and into another.",
        "text": ["You swing clear through one foe and into another. Make a melee Strike against the second foe."]
    }, {
        "name": "Dragon's Rage Breath",
        "level": "6",
        "traits": ["Barbarian", " Arcane", " Concentrate", " Evocation", " Instinct", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=148",
        "prereq": "dragon instinct",
        "benefits": "You exhale powerful draconic energy ",
        "text": ["You breathe deeply and exhale powerful energy in a 30-foot cone or 60-foot line, dealing 1d6 damage per level. The area and damage type match those of your dragon (see Table 3\u20134. If you used this ability in the last hour, the area and the damage are halved (15-foot cone or 30-foot line; 1d6 damage for every 2 levels). Each creature in the area must attempt a basic Reflex save."]
    }, {
        "name": "Giant's Stature",
        "level": "6",
        "traits": ["Barbarian", " Instinct", " Polymorph", " Primal", " Rage", " Transmutation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=149",
        "prereq": "giant instinct",
        "benefits": "You grow to incredible size.",
        "text": ["You grow to incredible size. You become Large, increasing your reach by 5 feet and gaining the clumsy 1 condition (page 618) until you stop raging. Your equipment grows with you."]
    }, {
        "name": "Spirits' Interference",
        "level": "6",
        "traits": ["Barbarian", " Instinct", " Necromancy", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=150",
        "prereq": "spirit instinct",
        "benefits": "You call forth protective spirits to ward off ranged attacks.",
        "text": ["You call forth protective spirits to ward off ranged attacks. Until your rage ends, anyone making a ranged attack against you must succeed at a DC 5 flat check or the attack misses with no effect."]
    }, {
        "name": "Animal Rage",
        "level": "8",
        "traits": ["Barbarian", " Concentrate", " Instinct", " Polymorph", " Primal", " Rage", " Transmutation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=151",
        "prereq": "animal instinct",
        "benefits": "You transform into your animal.",
        "text": ["You transform into your animal. You gain the effects of the 3rd-level ", " spell except you use your own statistics, temporary Hit Points, and unarmed attacks instead of those granted by animal form. You also retain the constant abilities of your gear. If your animal is a frog, your tongue\u2019s reach increases to 15 feet. Dismissing the transformation gains the rage trait."]
    }, {
        "name": "Furious Bully",
        "level": "8",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=152",
        "prereq": "master in Athletics",
        "benefits": "You bully foes across the battlefield.",
        "text": ["You bully foes across the battlefield. While raging, you gain a +2 circumstance bonus to Athletics checks for attack actions."]
    }, {
        "name": "Renewed Vigor",
        "level": "8",
        "traits": ["Barbarian", " Concentrate", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=153",
        "prereq": "",
        "benefits": "You pause to recover your raging vigor.",
        "text": ["You pause to recover your raging vigor. You gain temporary Hit Points equal to half your level plus your Constitution modifier."]
    }, {
        "name": "Share Rage",
        "level": "8",
        "traits": ["Barbarian", " Auditory", " Rage", " Visual"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=154",
        "prereq": "",
        "benefits": "You stoke an ally\u2019s fury.",
        "text": ["You stoke an ally\u2019s fury. While you are raging, one willing creature within 30 feet gains the effects of the Rage action, except it can still use ", " actions."]
    }, {
        "name": "Sudden Leap",
        "level": "8",
        "traits": ["Barbarian", " Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=155",
        "prereq": "",
        "benefits": "You swing at a foe while mid-leap.",
        "text": ["You make an impressive leap and swing while you soar. Make a Leap, High Jump, or Long Jump and attempt one melee Strike at any point during your jump. Immediately after the Strike, you fall to the ground if you\u2019re in the air, even if you haven\u2019t reached the maximum distance of your jump. If the distance you fall is no more than the height of your jump, you take no damage and land upright.", " When attempting a High Jump or Long Jump during a Sudden Leap, determine the DC using the Long Jump DCs, and increase your maximum distance to double your Speed.", " If you have ", ", you can spend 3 actions to make a Sudden Leap and use Felling Strike instead of a normal Strike."]
    }, {
        "name": "Thrash",
        "level": "8",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=156",
        "prereq": "",
        "benefits": "You thrash the grabbed foe around.",
        "text": ["You thrash the grabbed foe around. It takes bludgeoning damage equal to your Strength modifier plus your ferocious specialization damage plus your Rage damage. The foe must attempt a basic Fortitude save against your class DC."]
    }, {
        "name": "Come and Get Me",
        "level": "10",
        "traits": ["Barbarian", " Concentrate", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=157",
        "prereq": "",
        "benefits": "You open yourself to attacks so you can respond in turn. ",
        "text": ["You open yourself to attacks so you can respond in turn. Until your rage ends, you are flat-footed, and damage rolls against you gain a +2 circumstance bonus. If a creature hits you, that creature is flat-footed to you until the end of your next turn. If you hit it before the end of your next turn, you gain temporary Hit Points equal to your Constitution modifier, or double that on a critical hit. These temporary Hit Points last until the end of your rage."]
    }, {
        "name": "Furious Sprint",
        "level": "10",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=158",
        "prereq": "",
        "benefits": "You rush forward.",
        "text": ["You rush forward. Stride up to five times your Speed in a straight line. You can increase the number of actions this activity takes to 3 to Stride up to eight times your Speed in a straight line instead."]
    }, {
        "name": "Great Cleave",
        "level": "10",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=159",
        "prereq": "Cleave",
        "benefits": "Your fury carries your weapon through multiple foes.",
        "text": ["Your fury carries your weapon through multiple foes. When you ", ", if your Strike also kills or knocks the target unconscious, you can continue to make melee Strikes until you make a Strike that doesn\u2019t kill or knock a creature unconscious, or until there are no creatures adjacent to the most recent creature you attacked while Cleaving, whichever comes first."]
    }, {
        "name": "Knockback",
        "level": "10",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=160",
        "prereq": "",
        "benefits": "The weight of your swing drives your enemy back.",
        "text": ["The weight of your swing drives your enemy back. You push the foe back 5 feet, with the effects of a successful Shove. You can follow the foe as normal for a successful Shove."]
    }, {
        "name": "Terrifying Howl",
        "level": "10",
        "traits": ["Barbarian", " Auditory", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=161",
        "prereq": "Intimidating Glare",
        "benefits": "You unleash a terrifying howl.",
        "text": ["You unleash a terrifying howl. Attempt Intimidate checks to Demoralize each creature within 30 feet. Regardless of the results of your checks, each creature is then temporarily immune to Terrifying Howl for 1 minute."]
    }, {
        "name": "Dragon's Rage Wings",
        "level": "12",
        "traits": ["Barbarian", " Instinct", " Morph", " Primal", " Rage", " Transmutation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=162",
        "prereq": "dragon instinct",
        "benefits": "You sprout dragon wings from your back.",
        "text": ["You sprout dragon wings from your back of the same color as your chosen dragon. While you are raging, you gain a fly Speed equal to your land Speed. If you are flying when your rage ends, you start to fall but the transformation only completes at the last moment, so you take no damage from the fall and land standing up."]
    }, {
        "name": "Furious Grab",
        "level": "12",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=163",
        "prereq": "",
        "benefits": "You grab your foe while it\u2019s distracted by your attack.",
        "text": ["You grab your foe while it\u2019s distracted by your attack. The foe you hit becomes grabbed, as if you had succeeded at an Athletics check to Grapple the foe."]
    }, {
        "name": "Predator's Pounce",
        "level": "12",
        "traits": ["Barbarian", " Flourish", " Instinct", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=164",
        "prereq": "animal instinct",
        "benefits": "You close the distance to your prey in a blur",
        "text": ["You close the distance to your prey in a blur, pouncing on the creature before it can react. You Stride up to your Speed and make a Strike at the end of your movement."]
    }, {
        "name": "Spirit's Wrath",
        "level": "12",
        "traits": ["Barbarian", " Attack", " Concentrate", " Instinct", " Open", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=165",
        "prereq": "spirit instinct",
        "benefits": "You call forth an ephemeral apparition.",
        "text": ["You call forth an ephemeral apparition, typically the ghost of an ancestor or a nature spirit, which takes the form of a wisp. The spirit wisp makes a melee wisp rush unarmed attack against an enemy within 120 feet of you. The wisp\u2019s attack modifier is equal to your proficiency bonus for martial weapons plus your Strength modifier plus a +2 item bonus, and it applies the same circumstance and status bonuses and penalties that you have. On a hit, the wisp deals damage equal to 4d8 plus your Constitution modifier. The damage is your choice of negative or positive damage; don\u2019t apply your Rage damage or your weapon specialization damage, but circumstance and status bonuses and penalties that would also affect the wisp\u2019s damage apply. If your wisp\u2019s Strike is a critical hit, the target becomes frightened 1. This attack uses and counts toward your multiple attack penalty as if you were the one attacking."]
    }, {
        "name": "Titan's Stature",
        "level": "12",
        "traits": ["Barbarian", " Instinct", " Polymorph", " Transmutation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=166",
        "prereq": "giant instinct, Giant\u2019s Stature",
        "benefits": "You grow to even greater size.",
        "text": ["You grow to even greater size. When using ", ", you can instead become Huge (increasing your reach by 10 feet if you were Medium or smaller) while you are raging. You have the clumsy 1 condition (page 618) as long as you are Huge."]
    }, {
        "name": "Awesome Blow",
        "level": "14",
        "traits": ["Barbarian", " Concentrate", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=167",
        "prereq": "Knockback",
        "benefits": "Your attacks are so powerful, they can flatten your opponents.",
        "text": ["Your attacks are so powerful, they can flatten your opponents. When you use ", ", you can attempt an Athletics check against your target\u2019s Fortitude DC.", " You gain the critical success effect of a Shove, then the critical success effect of a Trip against the target. ", " You gain the success effect of a Shove, then the success effect of a Trip against the target.", " You gain the normal effect of Knockback."]
    }, {
        "name": "Giant's Lunge",
        "level": "14",
        "traits": ["Barbarian", " Concentrate", " Instinct"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=168",
        "prereq": "giant instinct",
        "benefits": "You extend your body and prepare to attack foes outside your normal reach.",
        "text": ["You extend your body and prepare to attack foes outside your normal reach. Until your rage ends, all your melee weapons and unarmed attacks gain reach 10. This doesn\u2019t increase the reach of any weapon or unarmed attack that already has the reach trait, but it does combine with abilities that increase your reach due to increased size, such as ", "."]
    }, {
        "name": "Vengeful Strike",
        "level": "14",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=169",
        "prereq": "Come and Get Me",
        "benefits": "When struck by an enemy, you respond in turn.",
        "text": ["When struck by an enemy, you respond in turn. Make a melee Strike against the triggering creature. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike."]
    }, {
        "name": "Whirlwind Strike",
        "level": "14",
        "traits": ["Barbarian", " Fighter", " Flourish", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=170",
        "prereq": "",
        "benefits": "You attack all nearby adversaries.",
        "text": ["You attack all nearby adversaries. Make a melee Strike against each enemy within your melee reach. Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks."]
    }, {
        "name": "Collateral Thrash",
        "level": "16",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=171",
        "prereq": "Thrash",
        "benefits": "When you Thrash a grabbed foe, you smack that foe into another nearby.",
        "text": ["When you ", " a grabbed foe, you smack that foe into another nearby. Another foe adjacent to the grabbed foe also takes your Thrash damage, with a basic Reflex save against your class DC."]
    }, {
        "name": "Dragon Transformation",
        "level": "16",
        "traits": ["Barbarian", " Concentrate", " Instinct", " Polymorph", " Primal", " Rage", " Transmutation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=172",
        "prereq": "dragon instinct, Dragon\u2019s Rage Wings",
        "benefits": "You transform into a ferocious large dragon.",
        "text": ["You transform into a ferocious Large dragon, gaining the effects of 6th-level ", " except that you use your own AC and attack modifier; you also apply your extra damage from Rage. The action to Dismiss the transformation gains the rage trait.", " At 18th level, you gain a +20-foot status bonus to your fly Speed, your damage bonus with dragon Strikes increases to +12, your breath weapon DC increases to 30, and you gain a +14 status bonus to your breath weapon damage."]
    }, {
        "name": "Reckless Abandon",
        "level": "16",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=173",
        "prereq": "",
        "benefits": "Your blood boils when you take a beating, and you throw caution to the wind to finish the fight.",
        "text": ["Your blood boils when you take a beating, and you throw caution to the wind to finish the fight. You gain a +2 circumstance bonus to attack rolls, a \u20132 penalty to AC, and a \u20131 penalty to saves. These bonuses and penalties last until your Rage ends or until you are above half Hit Points, whichever comes first."]
    }, {
        "name": "Brutal Critical",
        "level": "18",
        "traits": ["Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=174",
        "prereq": "",
        "benefits": "Your critical hits are particularly devastating.",
        "text": ["Your critical hits are particularly devastating. On a critical hit, add one extra damage die. This is in addition to any extra dice you gain if the weapon is deadly or fatal. The target also takes persistent bleed damage equal to two damage dice."]
    }, {
        "name": "Perfect Clarity",
        "level": "18",
        "traits": ["Barbarian", " Concentrate", " Fortune", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=175",
        "prereq": "",
        "benefits": "You burn out all of your rage to ensure that your attack lands and your mind remains free.",
        "text": ["You burn out all of your rage to ensure that your attack lands and your mind remains free. Reroll the triggering attack roll or Will save with a +2 circumstance bonus, use the better result, and resolve the effect. You then immediately stop raging."]
    }, {
        "name": "Vicious Evisceration",
        "level": "18",
        "traits": ["Barbarian", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=176",
        "prereq": "",
        "benefits": "You make a vicious attack that maims your enemy.",
        "text": ["You make a vicious attack that maims your enemy. Make a melee Strike. If the Strike hits and deals damage, the target is drained 1, or drained 2 on a critical success."]
    }, {
        "name": "Contagious Rage",
        "level": "20",
        "traits": ["Barbarian", " Auditory", " Rage", " Visual"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=177",
        "prereq": "Share Rage",
        "benefits": "You can drive your allies into a frenzy, granting them incredible benefits.",
        "text": ["You can drive your allies into a frenzy, granting them incredible benefits. You can ignore the requirements on ", ", using it multiple times in a Rage. Allies affected by Share Rage who accept your anathema for the duration of the Rage gain your instinct ability and the specialization ability it gains from weapon specialization, but not greater weapon specialization."]
    }, {
        "name": "Quaking Stomp",
        "level": "20",
        "traits": ["Barbarian", " Manipulate", " Rage"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=178",
        "prereq": "",
        "benefits": "You stomp the ground with such force that it creates a minor earthquake",
        "text": ["You stomp the ground with such force that it creates a minor earthquake, with the effects of the ", " spell."]
    }, {
        "name": "Bardic Lore",
        "level": "1",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=179",
        "prereq": "enigma muse",
        "benefits": "Your studies make you informed on every subject.",
        "text": ["Your studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can\u2019t increase your proficiency rank in Bardic Lore by any other means."]
    }, {
        "name": "Lingering Composition",
        "level": "1",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=180",
        "prereq": "maestro muse, focus pool",
        "benefits": "By adding a flourish, you make your compositions last longer.",
        "text": ["By adding a flourish, you make your compositions last longer. You learn the ", " focus spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Reach Spell",
        "level": "1",
        "traits": ["Bard", " Cleric", " Concentrate", " Druid", " Metamagic", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
        "prereq": "",
        "benefits": "You can extend your spells\u2019 range",
        "text": ["You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."]
    }, {
        "name": "Versatile Performance",
        "level": "1",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=182",
        "prereq": "polymath muse",
        "benefits": "You can rely on the grandeur of your performances rather than ordinary social skills.",
        "text": ["You can rely on the grandeur of your performances rather than ordinary social skills. You can use Performance instead of Diplomacy to Make an Impression and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate. You can use your proficiency rank in Performance to meet the requirements of skill feats that require a particular rank in Deception, Diplomacy, or Intimidation."]
    }, {
        "name": "Cantrip Expansion",
        "level": "2",
        "traits": ["Bard", " Cleric", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
        "prereq": "",
        "benefits": "Study broadens your range of simple spells",
        "text": ["A greater understanding of your magic broadens your range of simple spells.", ": You can prepare two additional cantrips each day.", ": Add two additional cantrips from your spell list to your repertoire. "]
    }, {
        "name": "Esoteric Polymath",
        "level": "2",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=184",
        "prereq": "polymath muse",
        "benefits": "You keep a book of occult spells, similar to a wizard\u2019s spellbook.",
        "text": ["You keep a book of occult spells, similar to a wizard\u2019s spellbook, and can use its spells to supplement your spell repertoire. Add all the spells in your repertoire to this book for free. You can use the Occultism skill to Learn Spells (page 238) and add them to your spellbook by paying the appropriate cost, similar to a wizard.", " During your daily preparations, choose any one spell from your book of occult spells. If that spell is already in your spell repertoire, you can treat it as an additional signature spell that day. If it isn\u2019t in your repertoire, treat it as though it were until your next daily preparations."]
    }, {
        "name": "Inspire Competence",
        "level": "2",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=185",
        "prereq": "maestro muse",
        "benefits": "You learn to aid your allies\u2019 skills with your performance.",
        "text": ["You learn the ", " composition cantrip, which aids your allies\u2019 skills."]
    }, {
        "name": "Loremaster's Etude",
        "level": "2",
        "traits": ["Bard", " Fortune"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=186",
        "prereq": "enigma muse, focus pool",
        "benefits": "You magically unlock memories, making them easier to recall.",
        "text": ["You magically unlock memories, making them easier to recall. You learn the ", " composition spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Multifarious Muse",
        "level": "2",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=187",
        "prereq": "",
        "benefits": "Your muse doesn\u2019t fall into a single label.",
        "text": ["Your muse doesn\u2019t fall into a single label. Choose a type of muse other than that of your own. You gain a 1st-level feat that requires that muse, and your muse is now also a muse of that type, allowing you to take feats with the other muse as a prerequisite. You don\u2019t gain any of the other effects of the muse you chose.", " You can take this feat multiple times. Each time you do, you must choose a different type of muse other than that of your own."]
    }, {
        "name": "Inspire Defense",
        "level": "4",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=188",
        "prereq": "maestro muse",
        "benefits": "You learn to protect yourself and your allies with your performance",
        "text": ["You learn the ", " composition cantrip (page 386), which protects you and allies."]
    }, {
        "name": "Melodious Spell",
        "level": "4",
        "traits": ["Bard", " Concentrate", " Manipulate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=189",
        "prereq": "",
        "benefits": "You subtly weave your spellcasting into your performance.",
        "text": ["You subtly weave your spellcasting into your performance. If the next action you take is to Cast a Spell, attempt a Performance check against all observers\u2019 Perception DCs. If your Performance check is successful against an observer\u2019s Perception DC, that observer doesn\u2019t notice that you are Casting a Spell, even though normally spells have sensory manifestations that would make spellcasting obvious to those around you, and verbal, somatic, and material components are extremely overt. You hide all of these as part of an ordinary performance.", " This hides only the spell\u2019s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish."]
    }, {
        "name": "Triple Time",
        "level": "4",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=190",
        "prereq": "",
        "benefits": "You learn to speed up yourelf and your allies with your performance",
        "text": ["You learn the ", " composition cantrip, which speeds up you and your allies for a round."]
    }, {
        "name": "Versatile Signature",
        "level": "4",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=191",
        "prereq": "polymath muse",
        "benefits": "You\u2019re always tweaking your available repertoire.",
        "text": ["While most bards are known for certain signature performances and spells, you\u2019re always tweaking your available repertoire. When you make your daily preparations, you can change one of your signature spells to a different spell of that level from your repertoire."]
    }, {
        "name": "Dirge of Doom",
        "level": "6",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=192",
        "prereq": "",
        "benefits": "You learn to frighten your enemies with your performance",
        "text": ["You learn the ", " composition cantrip, which frightens your enemies."]
    }, {
        "name": "Harmonize",
        "level": "6",
        "traits": ["Bard", " Concentrate", " Manipulate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=193",
        "prereq": "maestro muse",
        "benefits": "You can perform multiple compositions simultaneously.",
        "text": ["You can perform multiple compositions simultaneously. If your next action is to cast a composition, it becomes a harmonized composition. Unlike a normal composition, a harmonized composition doesn\u2019t end if you cast another composition, and you can cast another composition on the same turn as a harmonized one. Casting another harmonized composition ends any harmonized composition you have in effect."]
    }, {
        "name": "Steady Spellcasting",
        "level": "6",
        "traits": ["Bard", " Cleric", " Druid", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
        "prereq": "",
        "benefits": "You don\u2019t lose spells easily",
        "text": ["Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 fiat check. If you succeed, your action isn\u2019t disrupted."]
    }, {
        "name": "Eclectic Skill",
        "level": "8",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=195",
        "prereq": "polymath muse, master in Occultism",
        "benefits": "Your broad experiences translate to a range of skills.",
        "text": ["Your broad experiences translate to a range of skills. You add your level to all skill checks in which you are untrained. You can attempt any skill check that normally requires you to be trained, even if you are untrained. If you have legendary proficiency in Occultism, you can attempt any skill check that normally requires you to have expert proficiency, even if untrained or trained."]
    }, {
        "name": "Inspire Heroics",
        "level": "8",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=196",
        "prereq": "maestro muse, focus pool",
        "benefits": "Your performances inspire even greater deeds in your allies.",
        "text": ["Your performances inspire even greater deeds in your allies. You learn the ", " metamagic focus spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Know-It-All",
        "level": "8",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=197",
        "prereq": "enigma muse",
        "benefits": "Your knowledge of the world expands beyond what you have read",
        "text": ["When you succeed at a Knowledge check, you gain additional information or context. When you critically succeed at a Knowledge check, at the GM\u2019s discretion you might gain even more additional information or context than normal."]
    }, {
        "name": "House of Imaginary Walls",
        "level": "10",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=198",
        "prereq": "",
        "benefits": "You erect an imaginary barrier others believe to be real.",
        "text": ["You erect an imaginary barrier others believe to be real. You learn the ", " composition cantrip."]
    }, {
        "name": "Quickened Casting",
        "level": "10",
        "traits": ["Bard", " Concentrate", " Metamagic", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=199",
        "prereq": "",
        "benefits": "You are able to quickly cast a spell",
        "text": ["If your next action is to cast a cantrip or a spell that is at least 2 levels lower than the highest level spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action). ", " This can only be used on a cantrip or spell from the class matching the one you gained this feat from."]
    }, {
        "name": "Unusual Composition",
        "level": "10",
        "traits": ["Bard", " Concentrate", " Manipulate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=200",
        "prereq": "polymath muse",
        "benefits": "You can translate the emotion and power of a composition to other mediums.",
        "text": ["You can translate the emotion and power of a composition to other mediums. If your next action is to cast a composition spell, you can use a different kind of performance than usual for the composition to change any of its somatic components to verbal components or vice versa. As usual for composition spells, this changes whether the composition is auditory or visual."]
    }, {
        "name": "Eclectic Polymath",
        "level": "12",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=201",
        "prereq": "Esoteric Polymath",
        "benefits": "Your flexible mind can quickly shift spells.",
        "text": ["Your flexible mind can quickly shift spells. If you add a spell to your repertoire during your daily preparations using ", ", when you prepare again, you can choose to keep the new spell from Esoteric Polymath in your repertoire and instead lose access to another spell of the same level in your repertoire."]
    }, {
        "name": "Inspirational Focus",
        "level": "12",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=202",
        "prereq": "",
        "benefits": "Your connection to your muse has granted you unusual focus.",
        "text": ["Your connection to your muse has granted you unusual focus. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Silver's Refrain",
        "level": "12",
        "traits": ["Bard", " Rare"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=926",
        "prereq": "",
        "benefits": "Learn the silver's refrain composition cantrip.",
        "text": ["You learn the ", " composition cantrip, which aids you when fighting ", "."]
    }, {
        "name": "Allegro",
        "level": "14",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=203",
        "prereq": "",
        "benefits": "You can quicken your allies with a fast-paced performance.",
        "text": ["You can quicken your allies with a fast-paced performance. You learn the ", " composition cantrip."]
    }, {
        "name": "Soothing Ballad",
        "level": "14",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=204",
        "prereq": "focus pool",
        "benefits": "You soothe your allies\u2019 wounds with the power of your performance.",
        "text": ["You soothe your allies\u2019 wounds with the power of your performance. You learn the ", " composition spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "True Hypercognition",
        "level": "14",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=205",
        "prereq": "enigma muse",
        "benefits": "Your mind works at an incredible pace.",
        "text": ["Your mind works at an incredible pace. You instantly use up to five Recall Knowledge actions. If you have any special abilities or free actions that would normally be triggered when you Recall Knowledge, you can\u2019t use them for these actions."]
    }, {
        "name": "Effortless Concentration",
        "level": "16",
        "traits": ["Bard", " Druid", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
        "prereq": "",
        "benefits": "You can maintain a spell with hardly a thought.",
        "text": ["You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "]
    }, {
        "name": "Studious Capacity",
        "level": "16",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=207",
        "prereq": "enigma muse, legendary in Occultism",
        "benefits": "Your continued study of occult magic has increased your magical capacity.",
        "text": ["Your continued study of occult magic has increased your magical capacity, allowing you to cast spells even when it seems impossible. You can cast one spell each day even after you\u2019ve run out of spell slots of the appropriate spell level, but you can\u2019t use this ability to cast a spell of your highest spell level."]
    }, {
        "name": "Deep Lore",
        "level": "18",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=208",
        "prereq": "enigma muse, legendary in Occultism",
        "benefits": "Your repertoire is vast, containing far more spells than usual.",
        "text": ["Your repertoire is vast, containing far more spells than usual. Add one spell to your repertoire of each level you can cast."]
    }, {
        "name": "Eternal Composition",
        "level": "18",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=209",
        "prereq": "maestro muse",
        "benefits": "The world is a stage upon which you are always playing. ",
        "text": ["The world is a stage upon which you are always playing. You are permanently quickened; you can use your extra action only to cast a composition cantrip that requires 1 action to cast. While in exploration mode, you can declare that you are performing an eligible composition cantrip while using any exploration tactic. Even before your first turn in a combat encounter, that cantrip is active as if you had cast it on your previous turn."]
    }, {
        "name": "Impossible Polymath",
        "level": "18",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=210",
        "prereq": "trained in Arcana, Nature, or Religion, Esoteric Polymath",
        "benefits": "Your esoteric formulas are so unusual that they allow you to dabble in magic from diverse traditions.",
        "text": ["Your esoteric formulas are so unusual that they allow you to dabble in magic from diverse traditions that other bards don\u2019t understand. As long as you\u2019re trained in Arcana, you can add arcane spells to your book from ", "; as long as you\u2019re trained in Nature, you can add primal spells to your book; and as long as you are trained in Religion, you can add divine spells to your book.", " Like your other spells in your book, you can add one of these spells from another tradition to your repertoire as an occult spell each day using Esoteric Polymath, but you can\u2019t retain any spells from another tradition when you prepare again, even if you have Eclectic Polymath."]
    }, {
        "name": "Fatal Aria",
        "level": "20",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=211",
        "prereq": "focus pool",
        "benefits": "Your songs overwhelm the target with unbearable emotion.",
        "text": ["Your songs overwhelm the target with unbearable emotion, potentially striking them dead on the spot. You learn the ", " composition spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Perfect Encore",
        "level": "20",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=212",
        "prereq": "magnum opus",
        "benefits": "You develop another incredible creation.",
        "text": ["You develop another incredible creation. You gain an additional 10th-level spell slot."]
    }, {
        "name": "Symphony of the Muses",
        "level": "20",
        "traits": ["Bard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=213",
        "prereq": "Harmonize",
        "benefits": "You are able to weave countless performances together into a solo symphony.",
        "text": ["You are able to weave countless performances together into a solo symphony. You are no longer limited to a single composition each turn or a single composition at a time; when you use a new composition, all previous compositions\u2019 effects continue for their remaining duration."]
    } , {
        "name": "Deity's Domain",
        "level": "1",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=214",
        "prereq": "",
        "benefits": "You embody an aspect of your deity.",
        "text": ["You embody an aspect of your deity. Choose one of your deity\u2019s domains from those listed on page 441. You gain the domain\u2019s initial domain spell as a devotion spell."]
    }, {
        "name": "Ranged Reprisal",
        "level": "1",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=215",
        "prereq": "paladin cause",
        "benefits": "You can use Retributive Strike with a ranged weapon.",
        "text": ["You can use ", " with a ranged weapon. In addition, if the foe that triggered your reaction is within 5 feet of your reach but not in your reach, as part of your reaction you can Step to put the foe in your reach before making a melee Retributive Strike."]
    }, {
        "name": "Unimpeded Step",
        "level": "1",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=216",
        "prereq": "liberator cause",
        "benefits": "With a burst of divine liberation, your spur your ally\u2019s movement.",
        "text": ["With a burst of divine liberation, your ally\u2019s movement from your ", " is unaffected by difficult terrain, greater difficult terrain, narrow surfaces, and uneven ground."]
    }, {
        "name": "Weight of Guilt",
        "level": "1",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=217",
        "prereq": "redeemer cause",
        "benefits": "Guilt clouds the minds of those who ignore your Glimpse of Redemption.",
        "text": ["Guilt clouds the minds of those who ignore your ", ". Instead of making the triggering creature enfeebled 2, you can make it stupefied 2 for the same duration."]
    }, {
        "name": "Divine Grace",
        "level": "2",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=218",
        "prereq": "",
        "benefits": "You call upon your deity\u2019s grace.",
        "text": ["You call upon your deity\u2019s grace, gaining a +2 circumstance bonus to the save."]
    }, {
        "name": "Dragonslayer Oath",
        "level": "2",
        "traits": ["Champion", " Oath"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=219",
        "prereq": "tenets of good",
        "benefits": "You\u2019ve sworn to slay evil dragons.",
        "text": ["You\u2019ve sworn to slay evil dragons. Add the following tenet to your code after the others: \u201cYou must slay evil dragons you encounter as long as you have a reasonable chance of success.\u201d ", "Your Retributive Strike gains a +4 circumstance bonus to damage against an evil dragon, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption\u2019s resistance against damage from an evil dragon is 7 + your level. If you use Liberating Step triggered by an evil dragon, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.", " You don\u2019t consider evil dragons to be legitimate authorities, even in nations they rule."]
    }, {
        "name": "Fiendsbane Oath",
        "level": "2",
        "traits": ["Champion", " Oath"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=220",
        "prereq": "tenets of good",
        "benefits": "You\u2019ve sworn an oath to banish the corruption of fiends to the dark planes they call home.",
        "text": ["You\u2019ve sworn an oath to banish the corruption of fiends to the dark planes they call home. Add the following tenet to your champion\u2019s code after the other tenets: \u201cYou must banish or slay fiends you come across as long as you have a reasonable chance of success; in the incredibly unlikely event you find a good fiend, you don\u2019t have to banish or kill it.\u201d", " Your Retributive Strike gains a +4 circumstance bonus to damage against a fiend, or a +6 circumstance bonus if you have master proficiency with the weapon you used. Your Glimpse of Redemption\u2019s resistance against damage from a fiend is 7 + your level. If you use Liberating Step triggered by a fiend, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.", " You don\u2019t consider fiends to be legitimate authorities, even in nations ruled by fiends."]
    }, {
        "name": "Shining Oath",
        "level": "2",
        "traits": ["Champion", " Oath"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=221",
        "prereq": "tenets of good",
        "benefits": "You\u2019ve sworn an oath to put the undead to rest.",
        "text": ["You\u2019ve sworn an oath to put the undead to rest. Add the following tenet to your champion\u2019s code after the other tenets: \u201cYou must end the existence of undead you encounter as long as you have a reasonable chance of success; in the unlikely event you find a good undead, you can try to work out a more peaceful way to help it recover from its undead state rather than destroying it in combat, such as helping it complete its unfinished business and find peace.\u201d", " Your Retributive Strike gains a +4 circumstance bonus to damage against an undead, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption\u2019s resistance against damage from an undead is 7 + your level. If you use Liberating Step triggered by an undead, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.", " You don\u2019t consider undead to be legitimate authorities, even in nations ruled by undead."]
    }, {
        "name": "Vengeful Oath",
        "level": "2",
        "traits": ["Champion", " Oath"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=222",
        "prereq": "paladin cause",
        "benefits": "You\u2019ve sworn an oath to hunt down wicked evildoers and bring them to judgment.",
        "text": ["You\u2019ve sworn an oath to hunt down wicked evildoers and bring them to judgment. Add the following tenet to your code after the others: \u201cYou must hunt down and exterminate evil creatures that have committed heinous atrocities as long as you have a reasonable chance of success and aren\u2019t engaged in a mission that would prevent your doing so.\u201d", " You can use ", " to damage a creature you witness harming an innocent or a good ally as if it were undead; in this case, lay on hands deals good damage instead of positive damage and gains the good trait. This good damage can affect non-evil creatures. This doesn\u2019t prevent you from healing such a creature with ", "; you choose whether to heal or harm."]
    }, {
        "name": "Aura of Courage",
        "level": "4",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=223",
        "prereq": "tenets of good",
        "benefits": "You stand strong in the face of danger and inspire your allies to do the same.",
        "text": ["You stand strong in the face of danger and inspire your allies to do the same. Whenever you become frightened, reduce the condition value by 1 (to a minimum of 0). At the end of your turn when you would reduce your frightened condition value by 1, you also reduce the value by 1 for all allies within 15 feet."]
    }, {
        "name": "Divine Health",
        "level": "4",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=224",
        "prereq": "tenets of good",
        "benefits": "Your faith makes you resistant to disease.",
        "text": ["Your faith makes you resistant to disease, protecting you as you offer succor to the ill. You gain a +1 status bonus to saves against diseases. In addition, if you roll a success on a save against a disease, you get a critical success instead."]
    }, {
        "name": "Mercy",
        "level": "4",
        "traits": ["Champion", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=225",
        "prereq": "",
        "benefits": "Your touch relieves fear and restores movement.",
        "text": ["Your touch relieves fear and restores movement. If the next action you use is to cast ", ", you can attempt to counteract a fear effect or an effect imposing the paralyzed condition on the target, in addition to the other benefits of ", "."]
    }, {
        "name": "Attack of Opportunity",
        "level": "6",
        "traits": ["Champion", " Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=145",
        "prereq": "",
        "benefits": "You swat a foe that leaves an opening. ",
        "text": ["You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a ", " action, you disrupt that action. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike."]
    }, {
        "name": "Litany Against Wrath",
        "level": "6",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=227",
        "prereq": "devotion spells, tenets of good",
        "benefits": "You excoriate a foe for its wrath against goodly creatures.",
        "text": ["You excoriate a foe for its wrath against goodly creatures. You can cast the ", " devotion spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Loyal Warhorse",
        "level": "6",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=228",
        "prereq": "divine ally (steed)",
        "benefits": "You and your mount have grown closer, and your loyalty to each other is unbreakable.",
        "text": ["You and your mount have grown closer, and your loyalty to each other is unbreakable. The mount you gained through the divine ally class feature is now a mature animal companion (page 214). In addition, your mount never attacks you, even if it is magically compelled to do so."]
    }, {
        "name": "Shield Warden",
        "level": "6",
        "traits": ["Champion", " Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=229",
        "prereq": "[Champion] divine ally (shield), tenets of good; [Fighter] shield block",
        "benefits": "You use your shield to protect your allies as well as yourself.",
        "text": ["You use your shield to protect your allies. When you have a shield raised, you can use your Shield Block reaction when an attack is made against an ally adjacent to you. If you do, the shield prevents that ally from taking damage instead of preventing you from taking damage, following the normal rules for Shield Block."]
    }, {
        "name": "Smite Evil",
        "level": "6",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=230",
        "prereq": "divine ally (blade)",
        "benefits": "Your blade ally becomes an even more powerful tool against evildoers.",
        "text": ["Your blade ally becomes an even more powerful tool against evildoers. Select one foe you can see. Until the start of your next turn, your Strikes with the weapon your blade ally inhabits against that foe deal an extra 4 good damage, increasing to 6 if you have master proficiency with this weapon.", " If the foe attacks one of your allies, the duration extends to the end of that foe\u2019s next turn. If the foe continues to attack your allies each turn, the duration continues to extend."]
    }, {
        "name": "Advanced Deity's Domain",
        "level": "8",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=231",
        "prereq": "Deity\u2019s Domain",
        "benefits": "Through your conviction, you have glimpsed the deeper secrets of your deity\u2019s domain. ",
        "text": ["Through your conviction, you have glimpsed the deeper secrets of your deity\u2019s domain. You gain an advanced domain spell from the domain you chose with Deity\u2019s Domain. You can cast that spell as a devotion spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Greater Mercy",
        "level": "8",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=232",
        "prereq": "Mercy",
        "benefits": "Your faith enhances your ability to remove conditions.",
        "text": ["Your faith enhances your ability to remove conditions. When you use Mercy, you can instead attempt to counteract the blinded, deafened, sickened, or slowed conditions."]
    }, {
        "name": "Heal Mount",
        "level": "8",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=233",
        "prereq": "divine ally (steed)",
        "benefits": "Your devotion to your mount manifests as a surge of positive energy.",
        "text": ["Your devotion to your mount manifests as a surge of positive energy. When you cast ", " on your mount, you can restore 10 Hit Points, plus 10 for each heightened level."]
    }, {
        "name": "Quick Block",
        "level": "8",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=234",
        "prereq": "",
        "benefits": "You can block with your shield instinctively.",
        "text": ["You can block with your shield instinctively. At the start of each of your turns, you gain an additional reaction that you can use only to perform a Shield Block."]
    }, {
        "name": "Second Ally",
        "level": "8",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=235",
        "prereq": "divine ally",
        "benefits": "Your inner grace attracts the attention of a second protective spirit.",
        "text": ["Your inner grace attracts the attention of a second protective spirit. Choose a second type of divine ally and gain its benefits."]
    }, {
        "name": "Sense Evil",
        "level": "8",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=236",
        "prereq": "tenets of good",
        "benefits": "You sense evil as a queasy or foreboding feeling.",
        "text": ["You sense evil as a queasy or foreboding feeling. When in the presence of an aura of evil that is powerful or overwhelming (page 328), you eventually detect the aura, though you might not do so instantly, and you can\u2019t pinpoint the location. This acts as a vague sense, similar to humans\u2019 sense of smell. An evil creature using a disguise or otherwise trying to hide its presence attempts a Deception check against your Perception DC to hide its aura from you. If the creature succeeds at its Deception check, it is then temporarily immune to your Sense Evil for 1 day."]
    }, {
        "name": "Devoted Focus",
        "level": "10",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=237",
        "prereq": "devotion spells",
        "benefits": "Your devotion is strong enough to increase your focus to incredible heights.",
        "text": ["Your devotion is strong enough to increase your focus to incredible heights. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Imposing Destrier",
        "level": "10",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=238",
        "prereq": "divine ally (steed), Loyal Warhorse",
        "benefits": "Under your care, your mount has realized its innate potential.",
        "text": ["Under your care, your mount has realized its innate potential. The mount you gained through the divine ally class feature is now a nimble or savage animal companion (page 214). During an encounter, even if you don\u2019t use the Command an Animal action, your mount can still use 1 action on your turn to Stride or Strike."]
    }, {
        "name": "Litany Against Sloth",
        "level": "10",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=239",
        "prereq": "devotion spells, tenets of good",
        "benefits": "You rail against the sin of sloth, turning a foe\u2019s laziness against it.",
        "text": ["You rail against the sin of sloth, turning a foe\u2019s laziness against it. You can cast the ", " devotion spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Radiant Blade Spirit",
        "level": "10",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=240",
        "prereq": "divine ally (blade)",
        "benefits": "Your divine ally radiates power, enhancing your chosen weapon.",
        "text": ["Your divine ally radiates power, enhancing your chosen weapon. When you choose the weapon for your blade ally during your daily preparations, add the following property runes to the list of effects you can choose from: ", " and any aligned properties (", ", ", ", ", ", or ", ") that match your cause\u2019s alignment."]
    }, {
        "name": "Shield of Reckoning",
        "level": "10",
        "traits": ["Champion", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=241",
        "prereq": "champion\u2019s reaction, divine ally (shield), tenets of good, Shield Warden",
        "benefits": "When you shield your ally against an attack, you call upon your power to protect your ally further. ",
        "text": ["When you shield your ally against an attack, you call upon your power to protect your ally further. You use the Shield Block reaction to prevent damage to an ally and also use your champion\u2019s reaction against the foe that attacked your ally."]
    }, {
        "name": "Affliction Mercy",
        "level": "12",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=242",
        "prereq": "Mercy",
        "benefits": "The divine grace that flows through you grants reprieve from an affliction.",
        "text": ["The divine grace that flows through you grants reprieve from an affliction. When you use Mercy, you can instead attempt to counteract a curse, disease, or poison."]
    }, {
        "name": "Aura of Faith",
        "level": "12",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=243",
        "prereq": "tenets of good",
        "benefits": "You radiate an aura of pure belief that imbues your attacks and those of nearby allies with holy power.",
        "text": ["You radiate an aura of pure belief that imbues your attacks and those of nearby allies with holy power. Your Strikes deal an extra 1 good damage against evil creatures. Also, each good-aligned ally within 15 feet gains this benefit on their first Strike that hits an evil creature each round."]
    }, {
        "name": "Blade of Justice",
        "level": "12",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=244",
        "prereq": "paladin cause",
        "benefits": "You call upon divine power and make a weapon or unarmed Strike against a foe you have witnessed harming an ally or innocent.",
        "text": ["You call upon divine power and make a weapon or unarmed Strike against a foe you have witnessed harming an ally or innocent. The Strike deals two extra weapon damage dice if the target of your Strike is evil. Whether or not the target is evil, the Strike applies all effects that normally apply on a Retributive Strike (such as divine smite), and you can convert all the physical damage from the attack into good damage."]
    }, {
        "name": "Champion's Sacrifice",
        "level": "12",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=245",
        "prereq": "tenets of good",
        "benefits": "You can suffer so that others might live.",
        "text": ["You can suffer so that others might live. You can cast the ", " devotion spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Divine Wall",
        "level": "12",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=246",
        "prereq": "You are wielding a shield.",
        "benefits": "You use your shield to harry your enemies, preventing them from stepping away from or around you.",
        "text": ["You use your shield to harry your enemies, preventing them from stepping away from or around you. All spaces adjacent to you are difficult terrain for your enemies."]
    }, {
        "name": "Lasting Doubt",
        "level": "12",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=247",
        "prereq": "redeemer cause",
        "benefits": "When you cast doubt upon your foes, the effect lasts longer than usual.",
        "text": ["When you cast doubt upon your foes, the effect lasts longer than usual. After being enfeebled 2 by your Glimpse of Redemption, the foe is enfeebled 1 for 1 minute. If you have Weight of Guilt, after being stupefied 2 by your Glimpse of Redemption, the foe is stupefied 1 for 1 minute or until the flat check from stupefied causes it to lose a spell, whichever comes first."]
    }, {
        "name": "Liberating Stride",
        "level": "12",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=248",
        "prereq": "liberator cause",
        "benefits": "Your allies can move farther when you release them from harm",
        "text": ["Instead of you taking a Step at the end of your Liberating Step, the triggering ally can Stride up to half their Speed. Even if you have exalt, only the triggering ally gains this benefit."]
    }, {
        "name": "Anchoring Aura",
        "level": "14",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=249",
        "prereq": "Fiendsbane Oath",
        "benefits": "Your aura hampers fiends\u2019 teleportation.",
        "text": ["Your aura hampers fiends\u2019 teleportation. Your aura attempts to counteract teleportation spells cast by fiends within 15 feet, using the spell level and DC of your devotion spells."]
    }, {
        "name": "Aura of Life",
        "level": "14",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=250",
        "prereq": "Shining Oath",
        "benefits": "Your aura protects against necromantic effects.",
        "text": ["Your aura protects against necromantic effects. You and all allies within 15 feet gain resistance 5 to negative energy and a +1 status bonus to saves against necromancy effects."]
    }, {
        "name": "Aura of Righteousness",
        "level": "14",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=251",
        "prereq": "tenets of good",
        "benefits": "Your righteous aura dampens evil\u2019s might.",
        "text": ["Your righteous aura dampens evil\u2019s might. You and all allies within 15 feet gain evil resistance 5."]
    }, {
        "name": "Aura of Vengeance",
        "level": "14",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=252",
        "prereq": "exalt, Vengeful Oath",
        "benefits": "When you call upon others to take retribution, you also guide their aim.",
        "text": ["When you call upon others to take retribution, you also guide their aim. When you use Retributive Strike, your allies who make Strikes take only a \u20132 penalty, instead of a \u20135 penalty."]
    }, {
        "name": "Divine Reflexes",
        "level": "14",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=253",
        "prereq": "",
        "benefits": "You can use your champion's reaction more",
        "text": ["At the start of each of your turns, you gain an additional reaction that you can use only for your champion\u2019s reaction."]
    }, {
        "name": "Litany of Righteousness",
        "level": "14",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=254",
        "prereq": "tenets of good",
        "benefits": "You call upon righteousness to expose an evil foe\u2019s weakness.",
        "text": ["You call upon righteousness to expose an evil foe\u2019s weakness. You can cast the ", " devotion spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Wyrmbane Aura",
        "level": "14",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=255",
        "prereq": "Dragonslayer Oath",
        "benefits": "Your aura protects against destructive energies and dragons\u2019 breath.",
        "text": ["Your aura protects against destructive energies and dragons\u2019 breath. You and all allies within 15 feet gain resistance equal to your Charisma modifier to acid, cold, electricity, fire, and poison. If the source of one of these types of damage is a dragon\u2019s breath, increase the resistance to half your level."]
    }, {
        "name": "Auspicious Mount",
        "level": "16",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=256",
        "prereq": "divine ally (steed), Imposing Destrier",
        "benefits": "Guided by your ongoing care, your steed has developed incredible intelligence and skill.",
        "text": ["Guided by your ongoing care, your steed has developed incredible intelligence and skill. The mount you gained through the divine ally class feature is now a specialized animal companion (page 217). You can select one of the usual specializations or the auspice specialization.", " Auspice mounts gain the following benefits: Your companion is marked by your deity\u2019s religious symbol as a sacred creature of your deity. Its proficiency rank in Religion increases to expert, it can speak the language associated with your deity\u2019s servitors (Celestial for champions who follow the tenets of good), and its Intelligence modifier increases by 2 and its Wisdom modifier by 1."]
    }, {
        "name": "Instrument of Zeal",
        "level": "16",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=257",
        "prereq": "divine ally (blade), tenets of good",
        "benefits": "Divine energy fills your weapon.",
        "text": ["Divine energy fills your weapon. Whenever you critically hit a foe with Smite Evil or a Retributive Strike, your attack adds an extra damage die, and the target is slowed 1 on its next turn."]
    }, {
        "name": "Shield of Grace",
        "level": "16",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=258",
        "prereq": "Shield Warden",
        "benefits": "You protect an ally with both your shield and your body.",
        "text": ["You protect an ally with both your shield and your body. Whenever you use the Shield Block reaction to prevent damage to an ally, you can evenly split the remaining damage after the Shield Block between the ally and yourself."]
    }, {
        "name": "Celestial Form",
        "level": "18",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=259",
        "prereq": "tenets of good",
        "benefits": "You take on a celestial countenance, appearing like a type of celestial who serves your deity.",
        "text": ["You take on a celestial countenance, appearing like a type of celestial who serves your deity; for example, as an angel, you would gain a halo and feathery wings. You gain a fly Speed equal to your Speed. You gain darkvision if you don\u2019t already have it, and you gain the celestial trait and the trait appropriate to the type of servitor you\u2019ve become (archon, angel, or azata, for example)."]
    }, {
        "name": "Ultimate Mercy",
        "level": "18",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=260",
        "prereq": "Mercy",
        "benefits": "Your mercy transcends the bounds of life and death.",
        "text": ["Your mercy transcends the bounds of life and death. When you use Mercy, you can cast ", " on a creature that died since your last turn to return it to life. The target returns to life with 1 hit point and becomes wounded 1. You can\u2019t use Ultimate Mercy if the triggering effect was ", " or a death effect."]
    }, {
        "name": "Celestial Mount",
        "level": "20",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=261",
        "prereq": "divine ally (steed), tenets of good",
        "benefits": "Your steed gains incredible celestial powers granted by your deity.",
        "text": ["Your steed gains incredible celestial powers granted by your deity. It gains darkvision, its maximum Hit Points increase by 40, and it gains weakness 10 to evil damage.", " Additionally, it grows wings appropriate to a servitor of your deity (such as metallic wings for an archon), granting it a fly Speed equal to its Speed. It gains the ", " trait and the trait appropriate to the type of servitor it has become (", ", ", ", or ", ", for example)."]
    }, {
        "name": "Radiant Blade Master",
        "level": "20",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=262",
        "prereq": "divine ally (blade), Radiant Blade Spirit",
        "benefits": "Your divine ally turns your chosen weapon into a paragon of its type. ",
        "text": ["Your divine ally turns your chosen weapon into a paragon of its type. When you choose the weapon for your blade divine ally during your preparations, add the following property runes to the list of effects you can choose from: ", ", ", ", and ", "."]
    }, {
        "name": "Shield Paragon",
        "level": "20",
        "traits": ["Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=263",
        "prereq": "divine ally (shield)",
        "benefits": "Your shield is a vessel of divine protection.",
        "text": ["Your shield is a vessel of divine protection. When you\u2019re wielding your chosen shield, it is always raised, even without you using the Raise a Shield action. Your chosen shield doubles its HP and BT, rather than increasing them by half. If it would be destroyed, it vanishes to your deity\u2019s realm instead, where your divine ally repairs it. During your next daily preparations, the shield returns to you fully repaired."]
    }, {
        "name": "Deadly Simplicity",
        "level": "1",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=264",
        "prereq": "deity with a simple favored weapon, trained with your deity\u2019s favored weapon",
        "benefits": "Your deity\u2019s weapon is especially powerful in your hands.",
        "text": ["Your deity\u2019s weapon is especially powerful in your hands. When you are wielding your deity\u2019s favored weapon, increase the damage die size of that weapon by one step. If your deity\u2019s favored weapon is an unarmed attack (such as a fist, if you worship ", ") and its damage die is smaller than d6, instead increase its damage die size to d6."]
    }, {
        "name": "Domain Initiate",
        "level": "1",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=265",
        "prereq": "",
        "benefits": "Your deity bestows a special spell related to their powers.",
        "text": ["Your deity bestows a special spell related to their powers. Select one domain\u2014a subject of particular interest to you within your religion\u2014from your deity\u2019s list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics. Each domain\u2019s theme and domain spells appear in Table 8\u20132: Domains on page 441.", " Domain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to pray to your deity or do service toward their causes.", " Focus spells are automatically heightened to half your level rounded up. Focus spells don\u2019t require spell slots, nor can you cast them using spell slots. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points. The full rules for focus spells appear on page 300.", " You can select this feat multiple times, selecting a different domain each time and gaining its domain spell."]
    }, {
        "name": "Harming Hands",
        "level": "1",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=266",
        "prereq": "harmful font",
        "benefits": "The mordant power of your negative energy grows.",
        "text": ["The mordant power of your negative energy grows. When you cast ", ", you roll d10s instead of d8s."]
    }, {
        "name": "Healing Hands",
        "level": "1",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=267",
        "prereq": "healing font",
        "benefits": "Your positive energy is even more vibrant and restorative.",
        "text": ["Your positive energy is even more vibrant and restorative. When you cast ", ", you roll d10s instead of d8s."]
    }, {
        "name": "Holy Castigation",
        "level": "1",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=268",
        "prereq": "good alignment",
        "benefits": "You combine holy energy with positive energy to damage demons, devils, and their evil ilk.",
        "text": ["You combine holy energy with positive energy to damage demons, devils, and their evil ilk. ", " spells you cast damage fiends as though they were undead."]
    }, {
        "name": "Reach Spell",
        "level": "1",
        "traits": ["Cleric", " Bard", " Concentrate", " Druid", " Metamagic", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
        "prereq": "",
        "benefits": "You can extend your spells\u2019 range",
        "text": ["You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."]
    }, {
        "name": "Cantrip Expansion",
        "level": "2",
        "traits": ["Cleric", " Bard", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
        "prereq": "",
        "benefits": "Study broadens your range of simple spells",
        "text": ["A greater understanding of your magic broadens your range of simple spells.", ": You can prepare two additional cantrips each day.", ": Add two additional cantrips from your spell list to your repertoire. "]
    }, {
        "name": "Communal Healing",
        "level": "2",
        "traits": ["Cleric", " Healing", " Positive"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=271",
        "prereq": "",
        "benefits": "You\u2019re a conduit for positive energy, and as you channel it through you, it heals some of your minor injuries. ",
        "text": ["You\u2019re a conduit for positive energy, and as you cit through you, it heals some of your minor injuries. When you cast the ", " spell to heal a single creature other than yourself, you regain Hit Points equal to the spell level of the ", " spell."]
    }, {
        "name": "Emblazon Armament",
        "level": "2",
        "traits": ["Cleric", " Exploration"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=272",
        "prereq": "",
        "benefits": "Carefully etching a sacred image into a physical object, you steel yourself for battle.",
        "text": ["Carefully etching a sacred image into a physical object, you steel yourself for battle. You can spend 10 minutes emblazoning a symbol of your deity upon a weapon or shield. The symbol doesn\u2019t fade until 1 year has passed, but if you Emblazon an Armament, any symbol you previously emblazoned and any symbol already emblazoned on that item instantly disappears. The item becomes a religious symbol of your deity and can be used as a divine focus while emblazoned, and it gains another benefit determined by the type of item. This benefit applies only to followers of the deity the symbol represents. "]
    }, {
        "name": "Sap Life",
        "level": "2",
        "traits": ["Cleric", " Healing"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=273",
        "prereq": "",
        "benefits": "You draw the life force out of your enemies to heal your own wounds.",
        "text": ["You draw the life force out of your enemies to heal your own wounds. When you cast a ", " spell and damage at least one living creature, you regain Hit Points equal to the spell level of your ", " spell. If you aren\u2019t a living creature, you gain no benefit from this feat."]
    }, {
        "name": "Turn Undead",
        "level": "2",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=274",
        "prereq": "",
        "benefits": "Undead harmed by your positive energy might flee, compelled by an innate aversion to the force opposite undeath.",
        "text": ["Undead harmed by your positive energy might flee, compelled by an innate aversion to the force opposite undeath. When you use a ", " spell to damage undead, each undead of your level or lower that critically fails its save gains the fleeing condition for 1 round."]
    }, {
        "name": "Versatile Font",
        "level": "2",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=275",
        "prereq": "harmful font or healing font, deity that allows clerics to have both fonts",
        "benefits": "As you explore your deity\u2019s aspects, you move beyond restrictions on healing or harming. ",
        "text": ["As you explore your deity\u2019s aspects, you move beyond restrictions on healing or harming. You can prepare either ", " or ", " in the spell slots gained from the harmful font or healing font."]
    }, {
        "name": "Channel Smite",
        "level": "4",
        "traits": ["Cleric", " Divine", " Necromancy"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=276",
        "prereq": "harmful font or healing font",
        "benefits": "You siphon the destructive energies of positive or negative energy through a melee attack and into your foe. ",
        "text": ["You siphon the destructive energies of positive or negative energy through a melee attack and into your foe. Make a melee Strike and add the spell\u2019s damage to the Strike\u2019s damage. This is negative damage if you expended a ", " spell or positive damage if you expended a ", " spell. The spell is expended with no effect if your Strike fails or hits a creature that isn\u2019t damaged by that energy type (such as if you hit a non-undead creature with a ", " spell)."]
    }, {
        "name": "Command Undead",
        "level": "4",
        "traits": ["Cleric", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=277",
        "prereq": "harmful font, evil alignment",
        "benefits": "You grasp the animating force within an undead creature and bend it to your will.",
        "text": ["You grasp the animating force within an undead creature and bend it to your will. If the next action you use is to cast ", " targeting one undead creature, you transform the effects of that ", " spell. Instead of ", " normal effects, the target becomes controlled by you if its level is equal to or lower than your level \u2013 3. It can attempt a Will saving throw to resist being controlled by you. If the target is already under someone else\u2019s command, the controlling creature also rolls a saving throw, and the undead uses the better result. ", " The target is unaffected and is temporarily immune for 24 hours.", " The target is unaffected.", " The undead creature becomes a minion under your control. The spell gains a duration of 1 minute, but it is dismissed if you or an ally attacks the minion undead.", " As failure, but the duration is 1 hour."]
    }, {
        "name": "Directed Channel",
        "level": "4",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=278",
        "prereq": "",
        "benefits": "You can shape the energy you channel in a single direction, reaching farther and in a more directed fashion.",
        "text": ["You can shape the energy you channel in a single direction, reaching farther and in a more directed fashion. When you cast a version of ", " or ", " that has an area, you can make its area a 60-foot cone instead of a 30-foot emanation."]
    }, {
        "name": "Improved Communal Healing",
        "level": "4",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=279",
        "prereq": "Communal Healing",
        "benefits": "You can direct excess channeled energy outward to benefit an ally.",
        "text": ["You can direct excess channeled energy outward to benefit an ally. You can grant the Hit Points you would regain from Communal Healing to any one creature within the range of your ", " spell instead of yourself. You can also use Communal Healing when you target only yourself with a ", " spell, though if you do, you must grant the additional healing to someone other than yourself."]
    }, {
        "name": "Necrotic Infusion",
        "level": "4",
        "traits": ["Cleric", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=280",
        "prereq": "harmful font, evil alignment",
        "benefits": "You pour negative energy into your undead subject to empower its attacks.",
        "text": ["You pour negative energy into your undead subject to empower its attacks. If the next action you use is to cast ", " to restore Hit Points to a single undead creature, the target then deals an additional 1d6 negative damage with its melee weapons and unarmed attacks until the end of its next turn. If the ", " spell is at least 5th level, this damage increases to 2d6, and if the ", " spell is at least 8th level, the damage increases to 3d6."]
    }, {
        "name": "Cast Down",
        "level": "6",
        "traits": ["Cleric", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=281",
        "prereq": "harmful font or healing font",
        "benefits": "The sheer force of your faith can bring a foe crashing down.",
        "text": ["The sheer force of your faith can bring a foe crashing down. If the next action you use is to cast ", " or ", " to damage one creature, the target is knocked prone if it takes any damage from the spell. If the target critically fails its save against the spell, it also takes a \u201310-foot status penalty to its Speed for 1 minute."]
    }, {
        "name": "Divine Weapon",
        "level": "6",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=282",
        "prereq": "",
        "benefits": "You siphon residual spell energy into a weapon you\u2019re wielding.",
        "text": ["You siphon residual spell energy into a weapon you\u2019re wielding. Until the end of your turn, the weapon deals an additional 1d4 force damage. You can instead deal an additional 1d6 damage of an alignment type that matches one of your deity\u2019s alignment components. As usual for aligned damage, this can damage only creatures of the opposite alignment."]
    }, {
        "name": "Selective Energy",
        "level": "6",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=283",
        "prereq": "",
        "benefits": "As you call down divine power, you can prevent some enemies from benefiting or some allies from being hurt.",
        "text": ["As you call down divine power, you can prevent some enemies from benefiting or some allies from being hurt. When you cast a version of ", " or ", " that has an area, you can designate a number of creatures equal to your Charisma modifier (minimum 1) that are not targeted by the spell."]
    }, {
        "name": "Steady Spellcasting",
        "level": "6",
        "traits": ["Cleric", " Bard", " Druid", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
        "prereq": "",
        "benefits": "You don\u2019t lose spells easily",
        "text": ["Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 fiat check. If you succeed, your action isn\u2019t disrupted."]
    }, {
        "name": "Advanced Domain",
        "level": "8",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=285",
        "prereq": "Domain Initiate",
        "benefits": "Your studies or prayers have unlocked deeper secrets of your deity\u2019s domain.",
        "text": ["Your studies or prayers have unlocked deeper secrets of your deity\u2019s domain. You gain an advanced domain spell from one of your domains (as listed in Table 8\u20132: Domains on page 441). Increase the number of Focus Points in your focus pool by 1.", " You can select this feat multiple times. Each time, you must select a different advanced domain spell from a domain for which you have an initial domain spell."]
    }, {
        "name": "Align Armament",
        "level": "8",
        "traits": ["Cleric", " Divine", " Evocation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=286",
        "prereq": "chaotic, evil, good, or lawful deity",
        "benefits": "You bring a weapon into metaphysical concordance with your deity\u2019s beliefs.",
        "text": ["You bring a weapon into metaphysical concordance with your deity\u2019s beliefs. When you select this feat, choose chaotic, evil, good, or lawful. Your choice must match one of your deity\u2019s alignment components. This action has the trait corresponding to the chosen alignment component.", " When you use this action, you touch a weapon. For 1 round, that weapon deals an additional 1d6 damage of the chosen type to creatures of the opposed alignment. For example, if you chose good, the weapon would deal an extra 1d6 good damage to evil creatures. If you Align an Armament again, any previously aligned armament loses its additional damage.", " You can select this feat a second time, choosing your deity\u2019s other alignment component. When you Align an Armament, you can choose either alignment component."]
    }, {
        "name": "Channeled Succor",
        "level": "8",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=287",
        "prereq": "healing font",
        "benefits": "You can remove conditions with divine grace.",
        "text": ["You can remove conditions with divine grace. You can sacrifice one ", " spell you\u2019ve prepared in your extra slots from healing font to cast one of the following spells instead: ", ", ", ", ", ", or ", ". The spell is heightened to the same level as the ", " spell you sacrificed."]
    }, {
        "name": "Cremate Undead",
        "level": "8",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=288",
        "prereq": "",
        "benefits": "Your positive energy sets undead alight.",
        "text": ["Your positive energy sets undead alight. When you use a ", " spell to damage undead, each undead that takes damage also takes persistent fire damage equal to the spell\u2019s level."]
    }, {
        "name": "Emblazon Energy",
        "level": "8",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=289",
        "prereq": "",
        "benefits": "With elemental forces, you make your emblazoned symbols more potent.",
        "text": ["With elemental forces, you make your emblazoned symbols more potent. When you Emblazon an Armament, you can choose from the following effects instead of the effects listed in that feat. These effects have the same restrictions as the base options. "]
    }, {
        "name": "Castigating Weapon",
        "level": "10",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=290",
        "prereq": "Holy Castigation",
        "benefits": "The force of your deity\u2019s castigation strengthens your body so you can strike down the wicked. ",
        "text": ["The force of your deity\u2019s castigation strengthens your body so you can strike down the wicked. After you damage a fiend using a ", " spell, your weapon or unarmed Strikes deal extra good damage to fiends equal to half the level of the ", " spell until the end of your next turn. This is cumulative with any good damage the weapon already deals (such as from a holy rune)."]
    }, {
        "name": "Heroic Recovery",
        "level": "10",
        "traits": ["Cleric", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=291",
        "prereq": "healing font, good alignment",
        "benefits": "The restorative power of your healing invigorates the recipient.",
        "text": ["The restorative power of your healing invigorates the recipient. If the next action you use is to cast ", " targeting a single living creature and the target regains Hit Points from the spell, it also gains three bonuses until the end of its next turn: a +5-foot status bonus to its Speed, a +1 status bonus to attack rolls, and a +1 status bonus to damage rolls."]
    }, {
        "name": "Improved Command Undead",
        "level": "10",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=292",
        "prereq": "harmful font, Command Undead, evil alignment",
        "benefits": "Undead creatures find it all but impossible to resist your commands.",
        "text": ["Undead creatures find it all but impossible to resist your commands. When you use Command Undead, if the undead succeeds at its save but doesn\u2019t critically succeed, it is your minion for 1 round. If the undead fails its save, it is your minion for 10 minutes. If it critically fails, it is your minion for 24 hours."]
    }, {
        "name": "Replenishment of War",
        "level": "10",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=293",
        "prereq": "expert in your deity\u2019s favored weapon",
        "benefits": "Striking out against your enemies draws praise and protection from your deity.",
        "text": ["Striking out against your enemies draws praise and protection from your deity. When you damage a creature with a Strike using your deity\u2019s favored weapon, you gain a number of temporary Hit Points equal to half your level, or equal to your level if the Strike was a critical hit. These temporary Hit Points last until the start of your next turn."]
    }, {
        "name": "Defensive Recovery",
        "level": "12",
        "traits": ["Cleric", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=294",
        "prereq": "harmful font or healing font",
        "benefits": "Your faith provides temporary protection in addition to healing.",
        "text": ["Your faith provides temporary protection in addition to healing. If the next action you use is to cast ", " or ", " on a single target and the target regains Hit Points from the spell, it also gains a +2 status bonus to AC and saving throws for 1 round."]
    }, {
        "name": "Domain Focus",
        "level": "12",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=295",
        "prereq": "one or more domain spells",
        "benefits": "Your devotion to your deity\u2019s domains grows greater, and so does the power granted to you.",
        "text": ["Your devotion to your deity\u2019s domains grows greater, and so does the power granted to you. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Emblazon Antimagic",
        "level": "12",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=296",
        "prereq": "Emblazon Armament",
        "benefits": "Your deity\u2019s symbol protects against offensive magic.",
        "text": ["Your deity\u2019s symbol protects against offensive magic. When you Emblazon an Armament, you can choose from the following effects instead of the effects listed in that feat. These effects have the same restrictions as the base options. "]
    }, {
        "name": "Shared Replenishment",
        "level": "12",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=297",
        "prereq": "Replenishment of War",
        "benefits": "When your deity blesses your warlike acts, you can extend that favor to your allies.",
        "text": ["When your deity blesses your warlike acts, you can extend that favor to your allies. You can grant the temporary Hit Points from Replenishment of War to an ally within 10 feet instead of gaining them yourself. You can grant these temporary Hit Points to a different ally each time, meaning you might be able to grant them to multiple creatures in a single turn."]
    }, {
        "name": "Deity's Protection",
        "level": "14",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=298",
        "prereq": "Advanced Domain",
        "benefits": "When you call upon your deity\u2019s power to fulfill the promise of their domain, you gain divine protection.",
        "text": ["When you call upon your deity\u2019s power to fulfill the promise of their domain, you gain divine protection. After you cast a domain spell, you gain resistance to all damage until the start of your next turn. The amount of resistance is equal to the level of the domain spell you cast."]
    }, {
        "name": "Extend Armament Alignment",
        "level": "14",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=299",
        "prereq": "Align Armament",
        "benefits": "The alignment you impose on a weapon lasts much longer. ",
        "text": ["The alignment you impose on a weapon lasts much longer. The duration of Align Armament increases to 1 minute."]
    }, {
        "name": "Fast Channel",
        "level": "14",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=300",
        "prereq": "harmful font or healing font",
        "benefits": "Divine power is always at your fingertips, swiftly responding to your call.",
        "text": ["Divine power is always at your fingertips, swiftly responding to your call. When you cast ", " or ", " by spending 2 actions, you can get the effects of the 3-action version instead of the 2-action version.", " You can do this with ", " if you have harmful font or ", " if you have healing font (or both if you have Versatile Font)."]
    }, {
        "name": "Swift Banishment",
        "level": "14",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=301",
        "prereq": "",
        "benefits": "The force of your blow sends your victim back to its home plane.",
        "text": ["The force of your blow sends your victim back to its home plane. You expend a ", " spell you have prepared, affecting the creature you critically hit without needing to cast the spell. The creature can attempt to resist the spell as normal."]
    }, {
        "name": "Eternal Bane",
        "level": "16",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=302",
        "prereq": "evil alignment",
        "benefits": "A life of evil has made you a nexus for your deity\u2019s vile power.",
        "text": ["A life of evil has made you a nexus for your deity\u2019s vile power. You\u2019re continuously surrounded by a ", " spell with a spell level equal to half your level (rounded up). The radius is 15 feet, and you can\u2019t increase it. You can Dismiss the spell; if you do, it returns automatically after 1 minute."]
    }, {
        "name": "Eternal Blessing",
        "level": "16",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=303",
        "prereq": "good alignment",
        "benefits": "Your good deeds have brought your deity\u2019s grace to you for all of eternity.",
        "text": ["Your good deeds have brought your deity\u2019s grace to you for all of eternity. You\u2019re continuously surrounded by a ", " spell with a spell level equal to half your level (rounded up). The radius is 15 feet, and you can\u2019t increase it. You can Dismiss the spell; if you do, it returns automatically after 1 minute."]
    }, {
        "name": "Resurrectionist",
        "level": "16",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=304",
        "prereq": "",
        "benefits": "You can cause a creature you bring back from the brink of death to thrive and continue healing.",
        "text": ["You can cause a creature you bring back from the brink of death to thrive and continue healing. When you restore Hit Points to a dying creature or bring a dead creature back to life and restore Hit Points to it, you grant that creature fast healing 5 for 1 minute. This fast healing ends if the creature is knocked unconscious."]
    }, {
        "name": "Domain Wellspring",
        "level": "18",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=305",
        "prereq": "Domain Focus",
        "benefits": "The intensity of your focus grows from the investment you\u2019ve placed in your domains.",
        "text": ["The intensity of your focus grows from the investment you\u2019ve placed in your domains. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Echoing Channel",
        "level": "18",
        "traits": ["Cleric", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=306",
        "prereq": "",
        "benefits": "When you pull forth positive or negative energy, you also create a smaller pocket of that energy. ",
        "text": ["When you pull forth positive or negative energy, you also create a smaller pocket of that energy. If the next action you use is to cast a 2-action ", " or ", " to heal or damage a single creature, choose one additional creature adjacent to either you or the target. Target that creature with a 1-action version of the same spell. This spell is the same level as the 2-action ", " or ", " you cast and doesn\u2019t cost another spell slot."]
    }, {
        "name": "Improved Swift Banishment",
        "level": "18",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=307",
        "prereq": "Swift Banishment",
        "benefits": "You easily banish creatures with your weapon.",
        "text": ["You easily banish creatures with your weapon. You can use Swift Banishment as long as you have a spell slot of 5th level or higher remaining, even if you don\u2019t have ", " prepared. You must sacrifice a prepared spell of 5th level or higher, and the ", " effect you create is heightened to the level of that spell. Your weapon serves as the special material component of ", ", causing the target to take the \u20132 penalty to its save against any ", " you cast using Swift Banishment."]
    }, {
        "name": "Avatar's Audience",
        "level": "20",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=308",
        "prereq": "",
        "benefits": "Your extensive service has made you a lesser herald of your deity, which affords you certain privileges.",
        "text": ["Your extensive service has made you a lesser herald of your deity, which affords you certain privileges. First, any creature you encounter knows instinctively that you speak for your deity. Second, if you conduct the ", " ritual to contact your deity, you don\u2019t have to pay any cost and you automatically get a critical success. Third, once per day, you can cast ", " as a divine innate spell, but only to travel to the realm of your deity. When you cast it this way, its casting time is 1 minute, your religious symbol is a sufficient tuning fork for this spell, and you appear exactly where you want to be. If you\u2019re in your deity\u2019s realm due to this spell, you can return to the point you left when you cast it by spending a single action, which has the concentrate and divine traits."]
    }, {
        "name": "Maker of Miracles",
        "level": "20",
        "traits": ["Cleric"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=309",
        "prereq": "miraculous spell",
        "benefits": "You are a conduit for truly deific power. ",
        "text": ["You are a conduit for truly deific power. You gain an additional 10th-level spell slot."]
    }, {
        "name": "Metamagic Channel",
        "level": "20",
        "traits": ["Cleric", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=310",
        "prereq": "",
        "benefits": "Deep understanding of divine revelations into the nature of vital essence allows you to freely manipulate the effects of your positive or negative energy.",
        "text": ["Deep understanding of divine revelations into the nature of vital essence allows you to freely manipulate the effects of your positive or negative energy. Use 1 metamagic action that you can perform that normally takes 1 action and can be applied to the ", " or ", " spell. If you use it in this way, its effects apply only to a ", " or ", " spell."]
    }, {
        "name": "Animal Companion",
        "level": "1",
        "traits": ["Druid", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=311",
        "prereq": "[Druid] animal order",
        "benefits": "You gain the service of a young animal companion that travels with you.",
        "text": ["You gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See Animal Companions on page 214 for more information.", ": When you Hunt Prey, your animal companion gains the action\u2019s benefits and your hunter\u2019s edge benefit if you have one."]
    }, {
        "name": "Leshy Familiar",
        "level": "1",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=312",
        "prereq": "leaf order",
        "benefits": "You gain a leshy familiar, a tiny plant that embodies one of the many spirits of nature.",
        "text": ["You gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature. Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars, which are detailed on page 217."]
    }, {
        "name": "Reach Spell",
        "level": "1",
        "traits": ["Druid", " Bard", " Cleric", " Concentrate", " Metamagic", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
        "prereq": "",
        "benefits": "You can extend your spells\u2019 range",
        "text": ["You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."]
    }, {
        "name": "Storm Born",
        "level": "1",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=314",
        "prereq": "storm order",
        "benefits": "You are at home out in the elements, reveling in the power of nature unleashed.",
        "text": ["You are at home out in the elements, reveling in the power of nature unleashed. You do not take circumstance penalties to ranged spell attacks or Perception checks caused by weather, and your targeted spells don\u2019t require a flat check to succeed against a target concealed by weather (such as fog)."]
    }, {
        "name": "Widen Spell",
        "level": "1",
        "traits": ["Druid", " Manipulate", " Metamagic", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=315",
        "prereq": "",
        "benefits": "You manipulate the energy of your spell, causing it to spread out and affect a wider area.",
        "text": ["You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."]
    }, {
        "name": "Wild Shape",
        "level": "1",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=316",
        "prereq": "wild order",
        "benefits": "You are one with the wild, always changing and adapting to meet any challenge.",
        "text": ["You are one with the wild, always changing and adapting to meet any challenge. You gain the ", " order spell, which lets you transform into a variety of forms that you can expand with druid feats."]
    }, {
        "name": "Call of the Wild",
        "level": "2",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=317",
        "prereq": "",
        "benefits": "You call upon the creatures of nature to come to your aid.",
        "text": ["You call upon the creatures of nature to come to your aid. You can spend 10 minutes in concert with nature to replace one of the spells you\u2019ve prepared in one of your druid spell slots with a ", " or ", " spell of the same level."]
    }, {
        "name": "Enhanced Familiar",
        "level": "2",
        "traits": ["Druid", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=318",
        "prereq": "a familiar",
        "benefits": "You infuse your familiar with additional primal energy, increasing its abilities.",
        "text": ["You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.", " (Wizard) If your arcane thesis is improved familiar attunement, your familiar\u2019s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four."]
    }, {
        "name": "Order Explorer",
        "level": "2",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=319",
        "prereq": "",
        "benefits": "You have learned the secrets of another druidic order.",
        "text": ["You have learned the secrets of another druidic order, passing whatever rites of initiation that order requires and gaining access to its secrets. Choose an order other than your own. You gain a 1st-level feat that lists that order as a prerequisite, and you are now a member of that order for the purpose of meeting feat prerequisites. If you commit acts anathema to your new order, you lose all feats and abilities requiring that order but retain your other druid feats and abilities. You don\u2019t gain any of the other benefits of the order you chose.", " You can take this feat multiple times. Each time you do, you must choose a different order other than your own."]
    }, {
        "name": "Poison Resistance",
        "level": "2",
        "traits": ["Druid", " Alchemist"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=96",
        "prereq": "",
        "benefits": "Repeated exposure to toxic reagents has fortified your body against poisons of all kinds.",
        "text": ["Your body has become fortified against toxins. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons."]
    }, {
        "name": "Form Control",
        "level": "4",
        "traits": ["Druid", " Manipulate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=321",
        "prereq": "Strength 14, Wild Shape",
        "benefits": "With additional care and effort, you can take on an alternate form for a longer period of time.",
        "text": ["With additional care and effort, you can take on an alternate form for a longer period of time. If your next action is to cast ", ", ", " spell level is 2 lower than normal (minimum 1st level), but you can remain transformed for up to 1 hour or the listed duration (whichever is longer). You can still Dismiss the form at any time, as permitted by the spell."]
    }, {
        "name": "Mature Animal Companion (Druid)",
        "level": "4",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=322",
        "prereq": "Animal Companion",
        "benefits": "Your animal companion grows up, becoming a mature animal companion, which grants it additional capabilities.",
        "text": ["Your animal companion grows up, becoming a mature animal companion, which grants it additional capabilities. See the animal companion rules on page 214 for more information. Your animal companion is better trained than most. During an encounter, even if you don\u2019t use the Command an Animal action, your animal companion can still use 1 action on your turn that round to Stride or Strike."]
    }, {
        "name": "Order Magic",
        "level": "4",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=323",
        "prereq": "Order Explorer",
        "benefits": "You have delved deeper into the teaching of a new order, gaining access to a coveted order spell.",
        "text": ["You have delved deeper into the teaching of a new order, gaining access to a coveted order spell. Choose an order you have selected with Order Explorer. You gain the initial order spell from that order.", " You can take this feat multiple times. Each time you do, you must choose a different order you have selected with Order Explorer."]
    }, {
        "name": "Thousand Faces",
        "level": "4",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=324",
        "prereq": "Wild Shape",
        "benefits": "Your form is as mutable as the weather, changing to meet your whim.",
        "text": ["Your form is as mutable as the weather, changing to meet your whim. You add the forms listed in ", " to your ", " list."]
    }, {
        "name": "Woodland Stride",
        "level": "4",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=325",
        "prereq": "leaf order",
        "benefits": "You can always find a path, almost as if foliage parted before you.",
        "text": ["You can always find a path, almost as if foliage parted before you. You ignore any difficult terrain caused by plants, such as bushes, vines, and undergrowth. Even plants manipulated by magic don\u2019t impede your progress."]
    }, {
        "name": "Green Empathy",
        "level": "6",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=326",
        "prereq": "leaf order",
        "benefits": "You can communicate with plants on a basic level and use Diplomacy to Make an Impression on them and to make very simple Requests of them.",
        "text": ["You can communicate with plants on a basic level and use Diplomacy to Make an Impression on them and to make very simple Requests of them. Non-creature plants typically can\u2019t fulfill most requests you might ask of them unless you have access to other magic such as speak with plants. Because of your affiliation with the leaf order, plants have a sense that you support them, so you gain a +2 circumstance bonus on your check to Make a Request of a plant using Green Empathy."]
    }, {
        "name": "Insect Shape",
        "level": "6",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=327",
        "prereq": "Wild Shape",
        "benefits": "Your understanding of life expands, allowing you to mimic a wider range of creatures.",
        "text": ["Your understanding of life expands, allowing you to mimic a wider range of creatures. Add the forms in ", " to your ", " list. Whenever you use ", " to polymorph into the non-flying insect form listed in ", ", the duration is 24 hours instead of 10 minutes."]
    }, {
        "name": "Steady Spellcasting",
        "level": "6",
        "traits": ["Druid", " Bard", " Cleric", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
        "prereq": "",
        "benefits": "You don\u2019t lose spells easily",
        "text": ["Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 fiat check. If you succeed, your action isn\u2019t disrupted."]
    }, {
        "name": "Storm Retribution",
        "level": "6",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=329",
        "prereq": "storm order, tempest surge order spell",
        "benefits": "You lash out, directing a burst of storming fury toward a creature that has harmed you. ",
        "text": ["You lash out, directing a burst of storming fury toward a creature that has harmed you. You cast ", " on the triggering opponent and push that creature, moving it 5 feet away from you if it fails its Reflex save, or 10 feet if it critically fails. This movement is forced movement."]
    }, {
        "name": "Ferocious Shape",
        "level": "8",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=330",
        "prereq": "Wild Shape",
        "benefits": "You have mastered the shape of ferocious dinosaurs.",
        "text": ["You have mastered the shape of ferocious dinosaurs. Add the forms listed in ", " to your ", " list. Whenever you use ", " to take a form that grants you a specific Athletics modifier, you gain a +1 status bonus to your Athletics checks."]
    }, {
        "name": "Fey Caller",
        "level": "8",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=331",
        "prereq": "",
        "benefits": "You have learned some of the tricks the fey use to bend primal magic toward illusions and trickery.",
        "text": ["You have learned some of the tricks the fey use to bend primal magic toward illusions and trickery. Add ", ", ", ", ", ", and ", " to your spell list as primal spells."]
    }, {
        "name": "Incredible Companion (Druid)",
        "level": "8",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=332",
        "prereq": "Mature Animal Companion",
        "benefits": "Your animal companion continues to grow and develop.",
        "text": ["Your animal companion continues to grow and develop. It becomes a nimble or savage animal companion (your choice), gaining additional capabilities determined by the type of companion (page 214)."]
    }, {
        "name": "Soaring Shape",
        "level": "8",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=333",
        "prereq": "Wild Shape",
        "benefits": "Wings free you from the shackles of the ground below.",
        "text": ["Wings free you from the shackles of the ground below. Add the bat and bird forms in ", " to your ", " list. If you have ", ", you also add the wasp form to your ", " list. If you have ", ", you also add the pterosaur form to your ", " list. Whenever you use ", " to gain a form that grants you a specific Acrobatics modifier, you gain a +1 status bonus to Acrobatics checks."]
    }, {
        "name": "Wind Caller",
        "level": "8",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=334",
        "prereq": "storm order",
        "benefits": "You bid the winds to lift and carry you through the air.",
        "text": ["You bid the winds to lift and carry you through the air. You gain the ", " order spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Elemental Shape",
        "level": "10",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=335",
        "prereq": "Wild Shape",
        "benefits": "You understand the fundamental elements of nature such that you can imbue them into your body",
        "text": ["You understand the fundamental elements of nature such that you can imbue them into your body and manifest as a living embodiment of those elements. Add the forms in ", " to your ", " list. Whenever you\u2019re polymorphed into another form using ", ", you gain resistance 5 to fire."]
    }, {
        "name": "Healing Transformation",
        "level": "10",
        "traits": ["Druid", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=336",
        "prereq": "",
        "benefits": "You can take advantage of shapechanging magic to close wounds and patch injuries.",
        "text": ["You can take advantage of shapechanging magic to close wounds and patch injuries. If your next action is to cast a non-cantrip polymorph spell that targets only one creature, your polymorph spell also restores 1d6 Hit Points per spell level to that creature. This is a healing effect."]
    }, {
        "name": "Overwhelming Energy",
        "level": "10",
        "traits": ["Druid", " Manipulate", " Metamagic", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=337",
        "prereq": "",
        "benefits": "You alter your spells to overcome resistances.",
        "text": ["You alter your spells to overcome resistances. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\u2019s resistance to acid, cold, electricity, fire, or sonic damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell, such as the wall created by ", ". A creature\u2019s immunities are unaffected."]
    }, {
        "name": "Plant Shape",
        "level": "10",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=338",
        "prereq": "leaf order or Wild Shape",
        "benefits": "You can take the form of a plant creature.",
        "text": ["You can take the form of a plant creature. Add the forms listed in ", " to your ", " list; if you don\u2019t have ", ", you can instead cast ", " once per day, heightened to the highest spell level you can cast. Whenever you\u2019re polymorphed into another form using ", ", you gain resistance 5 to poison."]
    }, {
        "name": "Side by Side (Druid)",
        "level": "10",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=339",
        "prereq": "Animal Companion",
        "benefits": "You and your animal companion fight in tandem, distracting your foes and keeping them off balance.",
        "text": ["You and your animal companion fight in tandem, distracting your foes and keeping them off balance. Whenever you and your animal companion are adjacent to the same foe, you are both flanking that foe with each other, regardless of your actual positions."]
    }, {
        "name": "Dragon Shape",
        "level": "12",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=340",
        "prereq": "Soaring Shape",
        "benefits": "You can take on the form of some of the world\u2019s most fearsome creatures.",
        "text": ["You can take on the form of some of the world\u2019s most fearsome creatures. Add the forms listed in ", " to your ", " list. Whenever you\u2019re polymorphed into another form using ", ", you gain resistance 5 to your choice of acid, cold, electricity, fire, or poison."]
    }, {
        "name": "Green Tongue",
        "level": "12",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=341",
        "prereq": "Green Empathy",
        "benefits": "You share a special kinship with all things green and living.",
        "text": ["You share a special kinship with all things green and living. You (and your leshy familiar, if you have one) are constantly under the effects of speak with plants. Most non-creature plants recognize you as a druid of the leaf order and are friendly to you."]
    }, {
        "name": "Primal Focus",
        "level": "12",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=342",
        "prereq": "",
        "benefits": "Your connection to nature is particularly strong, and the spirits of nature flock around you, helping you replenish your focus",
        "text": ["Your connection to nature is particularly strong, and the spirits of nature flock around you, helping you replenish your focus. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Primal Summons",
        "level": "12",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=343",
        "prereq": "Call of the Wild",
        "benefits": "Whenever you summon an ally, you can empower it with the elemental power of air, earth, fire, or water. ",
        "text": ["Whenever you summon an ally, you can empower it with the elemental power of air, earth, fire, or water. You gain the ", " order spell."]
    }, {
        "name": "Specialized Companion (Druid)",
        "level": "14",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=344",
        "prereq": "Incredible Companion",
        "benefits": "Your animal companion continues to grow in power and ability, and it is now cunning enough to become specialized.",
        "text": ["Your animal companion continues to grow in power and ability, and it is now cunning enough to become specialized. Your animal companion gains one specialization of your choice. (See the Animal Companion section on page 214.)", " You can select this feat up to three times. Each time, add a different specialization to your companion."]
    }, {
        "name": "Timeless Nature",
        "level": "14",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=345",
        "prereq": "",
        "benefits": "With primal magic sustaining you, you cease aging.",
        "text": ["With primal magic sustaining you, you cease aging. The overflowing primal energy gives you a +2 status bonus to saves against diseases and primal magic."]
    }, {
        "name": "Verdant Metamorphosis",
        "level": "14",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=346",
        "prereq": "leaf order",
        "benefits": "You transform into a plant version of yourself. ",
        "text": ["You transform into a plant version of yourself. You gain the plant trait and lose any trait that\u2019s inappropriate for your new form (typically humanoid for a PC, but also possibly animal or fungus). You can change from a form that looks mostly like your old self into a tree or any other non-creature plant as a single action, which has the concentrate trait. This has the same effect as ", ", except you can turn into any kind of non-creature plant and your AC is 30.", " If you rest for 10 minutes while transformed into a non-creature plant during daylight hours under direct sunlight, you recover half your maximum Hit Points. If you take your daily rest in this way, the rest restores you to maximum Hit Points and removes all non-permanent drained, enfeebled, clumsy, and stupefied conditions, as well as all poisons and diseases of 19th level or lower."]
    }, {
        "name": "Effortless Concentration",
        "level": "16",
        "traits": ["Druid", " Bard", " Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
        "prereq": "",
        "benefits": "You can maintain a spell with hardly a thought.",
        "text": ["You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "]
    }, {
        "name": "Impaling Briars",
        "level": "16",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=348",
        "prereq": "leaf order",
        "benefits": "You can fill an area with devastating briars that impale and impede your foes.",
        "text": ["You can fill an area with devastating briars that impale and impede your foes. You gain the ", " order spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Monstrosity Shape",
        "level": "16",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=349",
        "prereq": "Wild Shape",
        "benefits": "You can transform into a powerful magical creature.",
        "text": ["You can transform into a powerful magical creature. Add the purple worm and sea serpent forms listed in ", " to your ", " list. If you have ", ", add the phoenix form listed in ", " to your wild shape list."]
    }, {
        "name": "Invoke Disaster",
        "level": "18",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=350",
        "prereq": "Wind Caller",
        "benefits": "You can invoke nature\u2019s fury upon your foes.",
        "text": ["You can invoke nature\u2019s fury upon your foes. You gain the ", " order spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Perfect Form Control",
        "level": "18",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=351",
        "prereq": "Form Control, Strength 18",
        "benefits": "Thanks to magic and muscle memory, you can stay in your alternate forms indefinitely.",
        "text": ["Thanks to magic and muscle memory, you can stay in your alternate forms indefinitely; you may have even forgotten your original form. When you use Form Control, instead of lasting 1 hour, ", " is permanent until you Dismiss it."]
    }, {
        "name": "Primal Wellspring",
        "level": "18",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=352",
        "prereq": "Wild Focus",
        "benefits": "Your reservoir of Focus Points is a deep wellspring.",
        "text": ["Your reservoir of Focus Points is a deep wellspring. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Hierophant's Power",
        "level": "20",
        "traits": ["Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=353",
        "prereq": "legendary in Nature",
        "benefits": "You have entwined yourself with the natural world, and its full power flows through you.",
        "text": ["You have entwined yourself with the natural world, and its full power flows through you. You gain an additional 10th-level spell slot."]
    }, {
        "name": "Leyline Conduit",
        "level": "20",
        "traits": ["Druid", " Concentrate", " Manipulate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=354",
        "prereq": "",
        "benefits": "You can cast your spells effortlessly by tapping into the leylines of the world.",
        "text": ["You can cast your spells effortlessly by tapping into the leylines of the world. If your next action is to Cast a Spell of 5th level or lower that has no duration, you don\u2019t expend the prepared spell as you cast it."]
    }, {
        "name": "True Shapeshifter",
        "level": "20",
        "traits": ["Druid", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=355",
        "prereq": "Dragon Shape, Wild Shape",
        "benefits": "You transcend the limitations of form.",
        "text": ["You transcend the limitations of form. While under the effects of ", ", you can change into any other form on your ", " list; if the durations of the forms would vary, use the shorter of the two durations.", " Once per day, you can transform into a kaiju, with the effects of ", "; if you have ", ", you can instead transform into a green man."]
    }, {
        "name": "Double Slice",
        "level": "1",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=356",
        "prereq": "",
        "benefits": "You lash out at your foe with both weapons. ",
        "text": ["You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn\u2019t have the agile trait, it takes a \u20132 penalty.", " If both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty."]
    }, {
        "name": "Exacting Strike",
        "level": "1",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=357",
        "prereq": "",
        "benefits": "You make a controlled attack, fully accounting for your momentum.",
        "text": ["You make a controlled attack, fully accounting for your momentum. Make a Strike. The Strike gains the following failure effect.", " This attack does not count toward your multiple attack penalty."]
    }, {
        "name": "Point-Blank Shot",
        "level": "1",
        "traits": ["Fighter", " Open", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=358",
        "prereq": "",
        "benefits": "You take aim to pick off nearby enemies quickly.",
        "text": ["You take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don\u2019t take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn\u2019t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon\u2019s first range increment."]
    }, {
        "name": "Power Attack",
        "level": "1",
        "traits": ["Fighter", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=359",
        "prereq": "",
        "benefits": "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady.",
        "text": ["You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you\u2019re at least 10th level, increase this to two extra dice, and if you\u2019re at least 18th level, increase it to three extra dice."]
    }, {
        "name": "Reactive Shield",
        "level": "1",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=360",
        "prereq": "",
        "benefits": "You can snap your shield into place just as you would take a blow, avoiding the hit at the last second.",
        "text": ["You can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the Raise a Shield action and gain your shield\u2019s bonus to AC. The circumstance bonus from the shield applies to your AC when you\u2019re determining the outcome of the triggering attack."]
    }, {
        "name": "Snagging Strike",
        "level": "1",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=361",
        "prereq": "",
        "benefits": "You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach.",
        "text": ["You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a Strike while keeping one hand free. If this Strike hits, the target is flat-footed until the start of your next turn or until it\u2019s no longer within the reach of your hand, whichever comes first."]
    }, {
        "name": "Sudden Charge",
        "level": "1",
        "traits": ["Fighter", " Barbarian", " Flourish", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=134",
        "prereq": "",
        "benefits": "With a quick sprint, you dash up to your foe and swing.",
        "text": ["With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Aggressive Block",
        "level": "2",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=363",
        "prereq": "",
        "benefits": "You push back as you block the attack, knocking your foe away or off balance.",
        "text": ["You push back as you block the attack, knocking your foe away or off balance. You use your shield to push the triggering creature, either automatically Shoving it 5 feet or causing it to become flat-footed until the start of your next turn. The triggering creature chooses whether to be moved or become flat-footed. If it chooses to be moved, you choose the direction. If the Shove would cause it to hit a solid object, enter a square of difficult terrain, or enter another creature\u2019s space, it must become flat-footed instead of being moved."]
    }, {
        "name": "Assisting Shot",
        "level": "2",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=364",
        "prereq": "",
        "benefits": "With a quick shot, you interfere with a foe in combat.",
        "text": ["With a quick shot, you interfere with a foe in combat. You can use the Aid action with a ranged weapon you wield. Instead of being within reach of the target, you must be within maximum range of the target. An Assisting Shot uses ammunition and incurs penalties just like any other attack."]
    }, {
        "name": "Brutish Shove",
        "level": "2",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=365",
        "prereq": "",
        "benefits": "Throwing your weight behind your attack, you hit you opponent hard enough to make it stumble back.",
        "text": ["Throwing your weight behind your attack, you hit your opponent hard enough to make it stumble back. Make a Strike with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is flat-footed until the end of your current turn, and you can automatically Shove it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn\u2019t trigger reactions.", " This Strike has the following failure effect. ", " The target becomes flat-footed until the end of your current turn."]
    }, {
        "name": "Combat Grab",
        "level": "2",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=366",
        "prereq": "",
        "benefits": "You swipe at your opponent and grab at them.",
        "text": ["You swipe at your opponent and grab at them. Make a melee Strike while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains grabbed until the end of your next turn or until it Escapes, whichever comes first."]
    }, {
        "name": "Dueling Parry",
        "level": "2",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=367",
        "prereq": "",
        "benefits": "You can parry attacks against you with your one-handed weapon.",
        "text": ["You can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to AC until the start of your next turn as long as you continue to meet the requirements."]
    }, {
        "name": "Intimidating Strike",
        "level": "2",
        "traits": ["Fighter", " Emotion", " Fear", " Mental"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=368",
        "prereq": "",
        "benefits": "Your blow not only wounds creatures but also shatters their confidence.",
        "text": ["Your blow not only wounds creatures but also shatters their confidence. Make a melee Strike. If you hit and deal damage, the target is frightened 1, or frightened 2 on a critical hit."]
    }, {
        "name": "Lunge",
        "level": "2",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=369",
        "prereq": "",
        "benefits": "Extending your body to its limits, you attack an enemy that would normally be beyond your reach.",
        "text": ["Extending your body to its limits, you attack an enemy that would normally be beyond your reach. Make a Strike with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike."]
    }, {
        "name": "Double Shot",
        "level": "4",
        "traits": ["Fighter", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=370",
        "prereq": "",
        "benefits": "You shoot twice in blindingly fast succession.",
        "text": ["You shoot twice in blindingly fast succession. Make two Strikes, each against a separate target and with a \u20132 penalty. Both attacks count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you\u2019ve made both of them."]
    }, {
        "name": "Dual-Handed Assault",
        "level": "4",
        "traits": ["Fighter", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=371",
        "prereq": "",
        "benefits": "You snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. ",
        "text": ["You snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. Make a Strike with the required weapon. You quickly switch your grip during the Strike in order to make the attack with two hands. If the weapon doesn\u2019t normally have the two-hand trait, increase its weapon damage die by one step for this attack. (Rules on increasing die size appear on page 279.) If the weapon has the two-hand trait, you gain the benefit of that trait and a circumstance bonus to damage equal to the weapon\u2019s number of damage dice. When the Strike is complete, you resume gripping the weapon with only one hand. This action doesn\u2019t end any stance or fighter feat effect that requires you to have one hand free."]
    }, {
        "name": "Knockdown",
        "level": "4",
        "traits": ["Fighter", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=372",
        "prereq": "trained in Athletics",
        "benefits": "You make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. ",
        "text": ["You make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. Make a melee Strike. If it hits and deals damage, you can attempt an Athletics check to Trip the creature you hit. If you\u2019re wielding a two-handed melee weapon, you can ignore Trip\u2019s requirement that you have a hand free. Both attacks count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you\u2019ve made both of them."]
    }, {
        "name": "Powerful Shove",
        "level": "4",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=373",
        "prereq": "Aggressive Block or Brutish Shove",
        "benefits": "You can push larger foes around with your attack.",
        "text": ["You can push larger foes around with your attack. You can use Aggressive Block or Brutish Shove against a creature up to two sizes larger than you.", " When a creature you Shove has to stop moving because it would hit an object, it takes damage equal to your Strength modifier (minimum 1). This happens regardless of how you Shoved the creature."]
    }, {
        "name": "Quick Reversal",
        "level": "4",
        "traits": ["Fighter", " Flourish", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=374",
        "prereq": "",
        "benefits": "You turn your foes\u2019 flanking against them with a quick reverse.",
        "text": ["You turn your foes\u2019 flanking against them with a quick reverse. Make a melee Strike against one of the flanking enemies and make a second Strike with the same weapon or unarmed attack against a different enemy that is flanking you. This second Strike has the same multiple attack penalty of the initial attack and doesn\u2019t count toward your multiple attack penalty."]
    }, {
        "name": "Shielded Stride",
        "level": "4",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=375",
        "prereq": "",
        "benefits": "When your shield is up, your enemies\u2019 blows can\u2019t touch\u00a0you.",
        "text": ["When your shield is up, your enemies\u2019 blows can\u2019t touch you. hen you have your shield raised, you can Stride to move half your Speed without triggering reactions that are triggered by your movement (such as Attacks of Opportunity). You can use Shielded Stride while Flying or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Swipe",
        "level": "4",
        "traits": ["Fighter", " Barbarian", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=142",
        "prereq": "",
        "benefits": "You make a wide, arcing swing. ",
        "text": ["You make a wide, arcing swing. Make a single melee Strike and compare the attack roll result to the ACs of up to two foes, each of whom must be within your melee reach and adjacent to the other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty. If you\u2019re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks."]
    }, {
        "name": "Twin Parry",
        "level": "4",
        "traits": ["Fighter", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=377",
        "prereq": "",
        "benefits": "You use your two weapons to parry attacks.",
        "text": ["You use your two weapons to parry attacks. You gain a +1 circumstance bonus to AC until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat\u2019s requirement."]
    }, {
        "name": "Advanced Weapon Training",
        "level": "6",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=378",
        "prereq": "",
        "benefits": "You\u2019ve studied the art of wielding an advanced weapon.",
        "text": ["You\u2019ve studied the art of wielding an advanced weapon. Choose a weapon group. You gain proficiency with all advanced weapons in that group as if they were martial weapons of their weapon group."]
    }, {
        "name": "Advantageous Assault",
        "level": "6",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=379",
        "prereq": "",
        "benefits": "When an enemy\u2019s movement is compromised, you deliver a more deadly blow.",
        "text": ["When an enemy\u2019s movement is compromised, you deliver a more deadly blow. Make a Strike against a creature that is grabbed, prone, or restrained. You gain a circumstance bonus to damage on this Strike equal to the number of weapon damage dice, or that number + 2 if you\u2019re wielding the weapon in two hands. The Strike gains the following failure effect. ", " You deal damage to the target equal to the number of weapon damage dice, or that number + 2 if you\u2019re wielding the weapon in two hands. This damage has the same damage type as the weapon."]
    }, {
        "name": "Disarming Stance",
        "level": "6",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=380",
        "prereq": "trained in Athletics",
        "benefits": "You adopt a fencing stance that improves your control over your weapon.",
        "text": ["You adopt a fencing stance that improves your control over your weapon. While you are in this stance, you gain a +1 circumstance bonus to Athletics checks to Disarm and a +2 circumstance bonus to your Reflex DC when defending against checks to Disarm you. In addition, you can attempt to Disarm creatures up to two sizes larger than you."]
    }, {
        "name": "Furious Focus",
        "level": "6",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=381",
        "prereq": "Power Attack",
        "benefits": "You\u2019ve learned to maintain your balance even when swinging furiously. ",
        "text": ["You\u2019ve learned to maintain your balance even when swinging furiously. When you make a Power Attack with a melee weapon you\u2019re wielding in two hands, it counts as one attack toward your multiple attack penalty instead of two."]
    }, {
        "name": "Guardian's Deflection",
        "level": "6",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=382",
        "prereq": "",
        "benefits": "You use your weapon to deflect the attack against your ally.",
        "text": ["You use your weapon to deflect the attack against your ally, granting a +2 circumstance bonus to their Armor Class against the triggering attack. This turns the triggering critical hit into a hit, or the triggering hit into a miss."]
    }, {
        "name": "Reflexive Shield",
        "level": "6",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=383",
        "prereq": "",
        "benefits": "You can use your shield to fend off the worst of area effects and other damage.",
        "text": ["You can use your shield to fend off the worst of area effects and other damage. When you Raise your Shield, you gain your shield\u2019s circumstance bonus to Reflex saves. If you have the Shield Block reaction, damage you take as a result of a Reflex save can trigger that reaction, even if the damage isn\u2019t physical damage."]
    }, {
        "name": "Revealing Stab",
        "level": "6",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=384",
        "prereq": "",
        "benefits": "You drive your piercing weapon into an imperceptible foe, revealing its location to your allies.",
        "text": ["You drive your piercing weapon into an imperceptible foe, revealing its location to your allies. Make a Strike with the required melee weapon. You don\u2019t have to attempt a flat check to hit a concealed creature, and you have to succeed at only a DC 5 flat check to target a hidden creature. If you hit and deal damage, you can drive the required weapon into a corporeal target, revealing its current position. You Release the weapon, and it becomes lodged in the target. If the target is concealed, other creatures don\u2019t need to succeed at a flat check to hit it. If the target is hidden, other creatures have to succeed at only a DC 5 flat check to target it. The creatures need to be able to see your weapon to gain any of these benefits, and the target can\u2019t become undetected to anyone who sees your weapon. If the target is invisible, the weapon remains visible while lodged in it.", " This benefit lasts until the weapon is removed from the creature. An adjacent creature or the target can remove the weapon with 2 Interact actions."]
    }, {
        "name": "Shatter Defenses",
        "level": "6",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=385",
        "prereq": "",
        "benefits": "Your offense exploits your enemy\u2019s fear. Make a melee Strike against a frightened creature. ",
        "text": ["Your offense exploits your enemy\u2019s fear. Make a melee Strike against a frightened creature. If you hit and deal damage, the target becomes flat-footed until its frightened condition ends. If the target was already flat-footed to you when you damaged it with this Strike, it can\u2019t reduce its frightened value below 1 until the start of your next turn."]
    }, {
        "name": "Shield Warden",
        "level": "6",
        "traits": ["Fighter", " Champion"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=229",
        "prereq": "[Champion] divine ally (shield), tenets of good; [Fighter] shield block",
        "benefits": "You use your shield to protect your allies as well as yourself.",
        "text": ["You use your shield to protect your allies. When you have a shield raised, you can use your Shield Block reaction when an attack is made against an ally adjacent to you. If you do, the shield prevents that ally from taking damage instead of preventing you from taking damage, following the normal rules for Shield Block."]
    }, {
        "name": "Triple Shot",
        "level": "6",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=387",
        "prereq": "Double Shot",
        "benefits": "You can quickly fire multiple shots with greater control.",
        "text": ["You can quickly fire multiple shots with greater control. When you use Double Shot, you can make the attacks against the same target. You can add an additional action to Double Shot to make three ranged Strikes instead of two. If you do, the penalty is \u20134. All attacks count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you\u2019ve made all of them."]
    }, {
        "name": "Blind-Fight",
        "level": "8",
        "traits": ["Fighter", " Ranger", " Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=388",
        "prereq": "master in Perception",
        "benefits": "Your battle instincts make you more aware of concealed and invisible opponents.",
        "text": ["Your battle instincts make you more aware of concealed and invisible opponents. You don\u2019t need to succeed at a flat check to target concealed creatures. You\u2019re not flat-footed to creatures that are hidden from you (unless you\u2019re flat-footed to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.", " While you\u2019re adjacent to an undetected creature of your level or lower, it is instead only hidden from you."]
    }, {
        "name": "Dueling Riposte",
        "level": "8",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=389",
        "prereq": "Dueling Parry",
        "benefits": "You riposte against your flailing enemy. ",
        "text": ["You riposte against your flailing enemy. Make a melee Strike against or attempt to Disarm the triggering creature."]
    }, {
        "name": "Felling Strike",
        "level": "8",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=390",
        "prereq": "",
        "benefits": "Your attack can ground an airborne foe.",
        "text": ["Your attack can ground an airborne foe. Make a Strike. If it hits and deals damage to a flying target, the target falls up to 120 feet. The fall is gradual enough that if it causes the target to hit the ground, the target takes no damage from the fall. If the attack is a critical hit, the target can\u2019t Fly, Leap, levitate, or otherwise leave the ground until the end of your next turn."]
    }, {
        "name": "Incredible Aim",
        "level": "8",
        "traits": ["Fighter", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=391",
        "prereq": "",
        "benefits": "By spending a moment to focus, you can ensure your attack strikes true. ",
        "text": ["By spending a moment to focus, you can ensure your attack strikes true. Make a ranged weapon Strike. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore the target\u2019s concealed condition."]
    }, {
        "name": "Mobile Shot Stance",
        "level": "8",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=392",
        "prereq": "",
        "benefits": "Your shots become nimble and deadly.",
        "text": ["Your shots become nimble and deadly. While you\u2019re in this stance, your ranged Strikes don\u2019t trigger Attacks of Opportunity or other reactions that are triggered by a ranged attack. If you have Attack of Opportunity, you can use it with a loaded ranged weapon you\u2019re wielding. The triggering creature must be within 5 feet of you for you to do so."]
    }, {
        "name": "Positioning Assault",
        "level": "8",
        "traits": ["Fighter", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=393",
        "prereq": "",
        "benefits": "With punishing blows, you force your opponent into position.",
        "text": ["With punishing blows, you force your opponent into position. Make a Strike with the required weapon. If you hit, you move the target 5 feet into a space in your reach. This follows the forced movement rules found on page 475."]
    }, {
        "name": "Quick Shield Block",
        "level": "8",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=394",
        "prereq": "shield block, Reactive Shield",
        "benefits": "You can bring your shield into place with hardly a thought.",
        "text": ["You can bring your shield into place with hardly a thought. At the start of each of your turns, you gain an additional reaction that you can use only to Shield Block."]
    }, {
        "name": "Sudden Leap",
        "level": "8",
        "traits": ["Fighter", " Barbarian"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=155",
        "prereq": "",
        "benefits": "You swing at a foe while mid-leap.",
        "text": ["You make an impressive leap and swing while you soar. Make a Leap, High Jump, or Long Jump and attempt one melee Strike at any point during your jump. Immediately after the Strike, you fall to the ground if you\u2019re in the air, even if you haven\u2019t reached the maximum distance of your jump. If the distance you fall is no more than the height of your jump, you take no damage and land upright.", " When attempting a High Jump or Long Jump during a Sudden Leap, determine the DC using the Long Jump DCs, and increase your maximum distance to double your Speed.", " If you have ", ", you can spend 3 actions to make a Sudden Leap and use Felling Strike instead of a normal Strike."]
    }, {
        "name": "Agile Grace",
        "level": "10",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=396",
        "prereq": "",
        "benefits": "Your graceful moves with agile weapons are beyond compare.",
        "text": ["Your graceful moves with agile weapons are beyond compare. Your multiple attack penalty with agile weapons and agile unarmed attacks becomes \u20133 for your second attack and \u20136 for subsequent attacks (rather than \u20134 and \u20138)."]
    }, {
        "name": "Certain Strike",
        "level": "10",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=397",
        "prereq": "",
        "benefits": "Even when you don\u2019t hit squarely, you can still score a glancing blow.",
        "text": ["Even when you don\u2019t hit squarely, you can still score a glancing blow. Make a melee Strike. It gains the following failure effect. Failure Your attack deals any damage it would have dealt on a hit, excluding all damage dice. (This removes damage dice from weapon runes, spells, and special abilities, in addition to weapon damage dice.)", " Your attack deals any damage it would have dealt on a hit, excluding all damage dice. (This removes damage dice from weapon runes, spells, and special abilities, in addition to weapon damage dice.)"]
    }, {
        "name": "Combat Reflexes",
        "level": "10",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=398",
        "prereq": "",
        "benefits": "You are particularly swift at punishing foes who leave you openings. ",
        "text": ["You are particularly swift at punishing foes who leave you openings. At the start of each of your turns when you regain your actions, you gain an additional reaction that can be used only to make an Attack of Opportunity."]
    }, {
        "name": "Debilitating Shot",
        "level": "10",
        "traits": ["Fighter", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=399",
        "prereq": "",
        "benefits": "Aiming for a weak point, you impede your foe with a precise shot.",
        "text": ["Aiming for a weak point, you impede your foe with a precise shot. Make a ranged weapon Strike. If it hits and deals damage, the target is slowed 1 until the end of its next turn."]
    }, {
        "name": "Disarming Twist",
        "level": "10",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=400",
        "prereq": "trained in Athletics",
        "benefits": "After your initial attack redirects your foe\u2019s defenses, your follow-up wrests their weapon from their grasp.",
        "text": ["After your initial attack redirects your foe\u2019s defenses, your follow-up wrests their weapon from their grasp. Make a melee Strike with the required weapon. In addition to its other effects, this Strike gains the success and critical success effects of the Disarm action. The Strike also has the following failure effect.", " The target is flat-footed until the end of your current turn."]
    }, {
        "name": "Disruptive Stance",
        "level": "10",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=401",
        "prereq": "",
        "benefits": "The slightest distraction can provoke your wrath, and you\u2019re prepared to foil enemies\u2019 actions. ",
        "text": ["The slightest distraction can provoke your wrath, and you\u2019re prepared to foil enemies\u2019 actions. As long as you are in this stance, you can use Attack of Opportunity when a creature within your reach uses a concentrate action, in addition to manipulate and move actions. Furthermore, you disrupt a triggering concentrate or manipulate action if your Strike hits (not only if it\u2019s a critical hit)."]
    }, {
        "name": "Fearsome Brute",
        "level": "10",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=402",
        "prereq": "",
        "benefits": "Fear makes your foes weak and more vulnerable to your attacks.",
        "text": ["Fear makes your foes weak and more vulnerable to your attacks. You gain a circumstance bonus to damage rolls for Strikes against frightened creatures. The bonus is equal to double the target\u2019s frightened value.", " If you have master proficiency in Intimidation, increase the bonus to triple the target\u2019s frightened value."]
    }, {
        "name": "Improved Knockdown",
        "level": "10",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=403",
        "prereq": "Knockdown",
        "benefits": "You can dash your foe to the ground with a single blow.",
        "text": ["You can dash your foe to the ground with a single blow. When you use Knockdown, instead of making a Strike followed by a Trip, you can attempt a single Strike. If you do and your Strike hits, you also apply the critical success effect of a Trip. If you used a two-handed melee weapon for the Strike, you can use the weapon\u2019s damage die size instead of the regular die size for the damage from a critical Trip."]
    }, {
        "name": "Mirror Shield",
        "level": "10",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=404",
        "prereq": "",
        "benefits": "You reflect the spell back against the triggering opponent.",
        "text": ["You reflect the spell back against the triggering opponent. Make a ranged attack against the triggering creature using your highest proficiency with a ranged weapon. If you can cast spells, you can make a spell attack roll instead. If you succeed, your opponent takes the effects of a successful spell attack roll for their own spell (or the effects of a critical success if your attack roll was a critical success)."]
    }, {
        "name": "Twin Riposte",
        "level": "10",
        "traits": ["Fighter", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=523",
        "prereq": "",
        "benefits": "A clever parry with one weapon leaves your opponent open to an attack with the other weapon. ",
        "text": ["A clever parry with one weapon leaves your opponent open to an attack with the other weapon. Make a melee Strike or use a Disarm action against the triggering opponent."]
    }, {
        "name": "Brutal Finish",
        "level": "12",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=406",
        "prereq": "",
        "benefits": "Your final blow can make an impact even if it rebounds off a foe\u2019s defenses. ",
        "text": ["Your final blow can make an impact even if it rebounds off a foe\u2019s defenses. Make a Strike with the required weapon. After the Strike, your turn ends. The Strike deals one extra weapon damage die, or two extra weapon damage dice if you\u2019re at least 18th level. The Strike also gains the following failure effect.", " You deal damage equal to one weapon damage die of the required weapon. Increase this to two dice if you\u2019re at least 18th level."]
    }, {
        "name": "Dueling Dance",
        "level": "12",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=407",
        "prereq": "Dueling Parry",
        "benefits": "Using your free hand as pivot and balance, you both attack and defend with your weapon.",
        "text": ["Using your free hand as pivot and balance, you both attack and defend with your weapon. While you are in this stance, you constantly have the benefits of Dueling Parry."]
    }, {
        "name": "Flinging Shove",
        "level": "12",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=408",
        "prereq": "Aggressive Block or Brutish Shove",
        "benefits": "Your opponets go even farther when push them around.",
        "text": ["Increase the distance you Shove your opponent with Aggressive Block or Brutish Shove to 10 feet on a success or 20 feet on a critical success. When you use Aggressive Block, you can choose whether the target is flat-footed or Shoved. When you make a Brutish Shove, you also Shove the target 5 feet on a failure."]
    }, {
        "name": "Improved Dueling Riposte",
        "level": "12",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=409",
        "prereq": "Dueling Riposte",
        "benefits": "Your weapon whirls and darts, striking foes whenever the opportunity presents itself.",
        "text": ["Your weapon whirls and darts, striking foes whenever the opportunity presents itself. At the start of each of your turns, you gain an additional reaction that you can use only to make a Dueling Riposte. You can use this extra reaction even if you are not benefiting from Dueling Parry."]
    }, {
        "name": "Incredible Ricochet",
        "level": "12",
        "traits": ["Fighter", " Concentrate", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=410",
        "prereq": "Incredible Aim",
        "benefits": "After your first shot singles out your opponent\u2019s position, you direct another that ricochets around obstacles and strikes unerringly.",
        "text": ["After your first shot singles out your opponent\u2019s position, you direct another that ricochets around obstacles and strikes unerringly. Make a ranged weapon Strike. You ignore the target\u2019s concealed condition and all cover."]
    }, {
        "name": "Lunging Stance",
        "level": "12",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=411",
        "prereq": "attack of opportunity, Lunge",
        "benefits": "Your body coiled to strike, you can lash out at distant enemies.",
        "text": ["Your body coiled to strike, you can lash out at distant enemies. While you are in this stance, you can use Attack of Opportunity against a creature that is outside your reach but within the reach you would have with a Lunge. If you do, you increase your range with the Strike by 5 feet."]
    }, {
        "name": "Paragon's Guard",
        "level": "12",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=412",
        "prereq": "",
        "benefits": "Once you\u2019ve had a moment to set your stance, you always have your shield ready without a thought.",
        "text": ["Once you\u2019ve had a moment to set your stance, you always have your shield ready without a thought. While you are in this stance, you constantly have your shield raised as if you\u2019d used the Raise a Shield action, as long as you meet that action\u2019s requirements."]
    }, {
        "name": "Spring Attack",
        "level": "12",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=413",
        "prereq": "",
        "benefits": "Springing away from one foe, you Strike at another.",
        "text": ["Springing away from one foe, you Strike at another. Stride up to your Speed, but you must end that movement within melee reach of a different enemy. At the end of your movement, make a melee Strike against an enemy now within reach. You can use Spring Attack while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Desperate Finisher",
        "level": "14",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=414",
        "prereq": "",
        "benefits": "You throw everything into one last press.",
        "text": ["You throw everything into one last press. Use a single action that you know with the press trait as part of Desperate Finisher. You forgo the ability to use reactions until the start of your next turn."]
    }, {
        "name": "Determination",
        "level": "14",
        "traits": ["Fighter", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=415",
        "prereq": "",
        "benefits": "Your training allows you to shrug off your foes\u2019 spells and conditions when the need is dire.",
        "text": ["Your training allows you to shrug off your foes\u2019 spells and conditions when the need is dire. Choose a single nonpermanent spell or condition that is affecting you. If you chose a condition, its effect on you ends. If you chose a spell, attempt to counteract the spell (your level is your counteract level, and you attempt a Will save as your counteract check).", " This doesn\u2019t remove any Hit Point damage normally dealt by the spell or condition, and it doesn\u2019t prevent the spell or debilitating effect from affecting other allies or the environment around you. It can\u2019t remove an ongoing affliction or prevent such an affliction from inflicting conditions on you later. It can\u2019t remove conditions from the situation (such as prone or flanked). If the effect comes from a creature, hazard, or item of 20th level or higher, Determination can\u2019t remove its effect on you."]
    }, {
        "name": "Guiding Finish",
        "level": "14",
        "traits": ["Fighter", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=416",
        "prereq": "",
        "benefits": "Using your weapon as a lever, you force your opponent to end up right where you want them.",
        "text": ["Using your weapon as a lever, you force your opponent to end up right where you want them. Make a Strike with the required weapon. If the Strike hits, you can move the target up to 10 feet into a space in your reach. You can move the target through your space during this movement. This follows the forced movement rules found on page 475. Your Strike gains the following failure effect.", " You can force the creature to move as you would on a success, but you can move the target only 5 feet."]
    }, {
        "name": "Guiding Riposte",
        "level": "14",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=417",
        "prereq": "Dueling Riposte",
        "benefits": "By shifting your weight and angling your weapon, you guide your opponent to a more favorable position.",
        "text": ["By shifting your weight and angling your weapon, you guide your opponent to a more favorable position. When you use Dueling Riposte to Strike and you hit, you can move the target up to 10 feet into a space in your reach. This follows the forced movement rules found on page 475."]
    }, {
        "name": "Improved Twin Riposte (Fighter)",
        "level": "14",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=418",
        "prereq": "Twin Riposte",
        "benefits": "Your weapons are a blur, blocking and biting at your foes.",
        "text": ["Your weapons are a blur, blocking and biting at your foes. At the start of each of your turns, you gain an additional reaction that you can use only to perform a Twin Riposte. You can use this extra reaction even if you are not benefiting from Twin Parry."]
    }, {
        "name": "Stance Savant (Fighter)",
        "level": "14",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=419",
        "prereq": "",
        "benefits": "When there\u2019s imminent danger, you drop into a stance with a mere thought.",
        "text": ["When there\u2019s imminent danger, you drop into a stance with a mere thought. Use an action that has the stance trait."]
    }, {
        "name": "Two-Weapon Flurry",
        "level": "14",
        "traits": ["Fighter", " Flourish", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=420",
        "prereq": "",
        "benefits": "You lash out with both your weapons in a sudden frenzy.",
        "text": ["You lash out with both your weapons in a sudden frenzy. Strike twice, once with each weapon."]
    }, {
        "name": "Whirlwind Strike",
        "level": "14",
        "traits": ["Fighter", " Barbarian", " Flourish", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=170",
        "prereq": "",
        "benefits": "You attack all nearby adversaries.",
        "text": ["You attack all nearby adversaries. Make a melee Strike against each enemy within your melee reach. Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks."]
    }, {
        "name": "Graceful Poise",
        "level": "16",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=422",
        "prereq": "Double Slice",
        "benefits": "With the right positioning, your off-hand weapon can strike like a scorpion\u2019s stinger.",
        "text": ["With the right positioning, your off-hand weapon can strike like a scorpion\u2019s stinger. While you are in this stance, if you make your second Strike from Double Slice with an agile weapon, Double Slice counts as one attack when calculating your multiple attack penalty."]
    }, {
        "name": "Improved Reflexive Shield",
        "level": "16",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=423",
        "prereq": "Reflexive Shield",
        "benefits": "Your shield can help save nearby allies.",
        "text": ["Your shield can help save nearby allies. When you use Shield Block against damage resulting from a Reflex save, adjacent allies who would take damage due to Reflex saves against the same effect also benefit from the damage reduction."]
    }, {
        "name": "Multishot Stance",
        "level": "16",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=424",
        "prereq": "Triple Shot",
        "benefits": "You lock yourself in a stable position so you can fire swiftly and accurately.",
        "text": ["You lock yourself in a stable position so you can fire swiftly and accurately. While you are in this stance, your penalty for Double Shot is reduced to \u20131, or \u20132 if you add the extra action to make three Strikes. If you move from your position, this stance ends."]
    }, {
        "name": "Twinned Defense",
        "level": "16",
        "traits": ["Fighter", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=425",
        "prereq": "Twin Parry",
        "benefits": "You\u2019re always ready to use your off-hand weapon to interfere with attacks against you. ",
        "text": ["You\u2019re always ready to use your off-hand weapon to interfere with attacks against you. While you are in this stance, you constantly gain the benefits of the Twin Parry action."]
    }, {
        "name": "Impossible Volley",
        "level": "18",
        "traits": ["Fighter", " Flourish", " Open", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=426",
        "prereq": "",
        "benefits": "You fire a volley at all foes in an area.",
        "text": ["You fire a volley at all foes in an area. Make one Strike with a \u20132 penalty against each enemy within a 10-foot-radius burst centered at or beyond your weapon\u2019s volley range. Roll the damage only once for all targets.", " Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks.", " When taken as a Fighter feat, this feat has the ", " and ", " traits."]
    }, {
        "name": "Savage Critical",
        "level": "18",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=427",
        "prereq": "",
        "benefits": "The wounds you inflict are grievous.",
        "text": ["The wounds you inflict are grievous. When you Strike with a weapon or unarmed attack for which you have legendary proficiency, you critically succeed if you roll a 19 on the die as long as that result is a success. This has no effect on a 19 if the result would be a failure."]
    }, {
        "name": "Boundless Reprisals",
        "level": "20",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=428",
        "prereq": "",
        "benefits": "With a sixth sense for the flow of combat, you can quickly react to any situation as required.",
        "text": ["With a sixth sense for the flow of combat, you can quickly react to any situation as required. At the start of each enemy\u2019s turn, you gain a reaction you can use only during that turn."]
    }, {
        "name": "Weapon Supremacy",
        "level": "20",
        "traits": ["Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=429",
        "prereq": "",
        "benefits": "Your skill with weapons lets you attack swiftly at all times.",
        "text": ["Your skill with weapons lets you attack swiftly at all times. You\u2019re permanently quickened. You can use your extra action only to Strike."]
    }, {
        "name": "Crane Stance",
        "level": "1",
        "traits": ["Monk", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=430",
        "prereq": "",
        "benefits": "You enter the stance of a crane, holding your arms in an imitation of a crane\u2019s wings.",
        "text": ["You enter the stance of a crane, holding your arms in an imitation of a crane\u2019s wings and using flowing, defensive motions. You gain a +1 circumstance bonus to AC, but the only Strikes you can make are crane wing attacks. These deal 1d6 bludgeoning damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.", " While in Crane Stance, reduce the DC for High Jump and Long Jump by 5, and when you Leap, you can move an additional 5 feet horizontally or 2 feet vertically."]
    }, {
        "name": "Dragon Stance",
        "level": "1",
        "traits": ["Monk", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=431",
        "prereq": "",
        "benefits": "You enter the stance of a dragon and make powerful leg strikes like a lashing dragon\u2019s tail.",
        "text": ["You enter the stance of a dragon and make powerful leg strikes like a lashing dragon\u2019s tail. You can make dragon tail attacks that deal 1d10 bludgeoning damage. They are in the brawling group and have the backswing, nonlethal, and unarmed traits.", " While in Dragon Stance, you can ignore the first square of difficult terrain while Striding."]
    }, {
        "name": "Ki Rush",
        "level": "1",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=432",
        "prereq": "",
        "benefits": "You can use ki to move with extraordinary speed and make yourself harder to hit.",
        "text": ["You can use ki to move with extraordinary speed and make yourself harder to hit. You gain the ", " ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar on page 157, and the full rules for focus spells appear on page 300."]
    }, {
        "name": "Ki Strike",
        "level": "1",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=433",
        "prereq": "",
        "benefits": "Your study of the flow of mystical energy allows you to harness it into your physical strikes.",
        "text": ["Your study of the flow of mystical energy allows you to harness it into your physical strikes. You gain the ", " ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar on page 157, and the full rules for focus spells appear on page 300."]
    }, {
        "name": "Monastic Weaponry",
        "level": "1",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=434",
        "prereq": "",
        "benefits": "You have trained with the traditional weaponry of your monastery or school.",
        "text": ["You have trained with the traditional weaponry of your monastery or school. You gain access to uncommon weapons that have the monk trait and become trained in simple and martial monk weapons. When your proficiency rank for unarmed attacks increases to expert or master, your proficiency rank for these weapons increases to expert or master as well.", " You can use melee monk weapons with any of your monk feats or monk abilities that normally require unarmed attacks, though not if the feat or ability requires you to use a single specific type of attack, such as Crane Stance."]
    }, {
        "name": "Mountain Stance",
        "level": "1",
        "traits": ["Monk", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=435",
        "prereq": "",
        "benefits": "You enter the stance of an implacable mountain allowing you to strike with the weight of an avalanche.",
        "text": ["You enter the stance of an implacable mountain\u2014a technique first discovered by dwarven monks\u2014allowing you to strike with the weight of an avalanche. The only Strikes you can make are falling stone unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the forceful, nonlethal, and unarmed traits.", " While in Mountain Stance, you gain a +4 status bonus to AC and a +2 circumstance bonus to any defenses against being Shoved or Tripped. However, you have a Dexterity modifier cap to your AC of +0, meaning you don\u2019t add your Dexterity to your AC, and your Speeds are all reduced by 5 feet."]
    }, {
        "name": "Tiger Stance",
        "level": "1",
        "traits": ["Monk", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=436",
        "prereq": "",
        "benefits": "You enter the stance of a tiger and can make tiger claw attacks.",
        "text": ["You enter the stance of a tiger and can make tiger claw attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits. On a critical success with your tiger claws, if you deal damage, the target takes 1d4 persistent bleed damage.", " As long as your Speed is at least 20 feet while in Tiger Stance, you can Step 10 feet."]
    }, {
        "name": "Wolf Stance",
        "level": "1",
        "traits": ["Monk", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=437",
        "prereq": "",
        "benefits": "You enter the stance of a wolf, low to the ground with your hands held like fanged teeth.",
        "text": ["You enter the stance of a wolf, low to the ground with your hands held like fanged teeth. You can make wolf jaw unarmed attacks. These deal 1d8 piercing damage; are in the brawling group; and have the agile, backstabber, finesse, nonlethal, and unarmed traits.", " If you\u2019re flanking a target while in Wolf Stance, your wolf jaw unarmed attacks also gain the trip trait."]
    }, {
        "name": "Brawling Focus",
        "level": "2",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=438",
        "prereq": "",
        "benefits": "You know how to make the most of your attacks when fighting hand-to-hand.",
        "text": ["You know how to make the most of your attacks when fighting hand-to-hand. You gain access to the critical specialization effects of unarmed strikes in the brawling group and weapons in the brawling group. If you have ", ", you also gain the critical specialization effects of all monk weapons in which you are trained."]
    }, {
        "name": "Crushing Grab",
        "level": "2",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=439",
        "prereq": "",
        "benefits": "Like a powerful constrictor, you crush targets in your unyielding grasp.",
        "text": ["Like a powerful constrictor, you crush targets in your unyielding grasp. When you successfully Grapple a creature, you can deal bludgeoning damage to that creature equal to your Strength modifier. You can make this attack nonlethal with no penalty."]
    }, {
        "name": "Dancing Leaf",
        "level": "2",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=440",
        "prereq": "",
        "benefits": "You are as light as a leaf whirling in the breeze. ",
        "text": ["You are as light as a leaf whirling in the breeze. When you Leap or succeed at a High Jump or Long Jump, increase the distance you jump by 5 feet. When calculating the damage you take from falling, don\u2019t count any distance fallen while you are adjacent to a wall."]
    }, {
        "name": "Elemental Fist",
        "level": "2",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=441",
        "prereq": "Ki Strike",
        "benefits": "You call upon the power of the elements, infusing your ki with elemental energy and allowing your attacks to deal energy damage. ",
        "text": ["You call upon the power of the elements, infusing your ki with elemental energy and allowing your attacks to deal energy damage. When you cast ", ", in addition to the damage types normally available, you can deliver the extra damage in the form of a gust of storm-tossed wind (dealing electricity damage and gaining the air trait), a chunk of stone (dealing bludgeoning damage and gaining the earth trait), a flickering flame (dealing fire damage), or a crashing wave of frigid water (dealing cold damage and gaining the water trait)."]
    }, {
        "name": "Stunning Fist",
        "level": "2",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=442",
        "prereq": "Flurry of Blows",
        "benefits": "The focused power of your flurry threatens to overwhelm your opponent. ",
        "text": ["The focused power of your flurry threatens to overwhelm your opponent. When you target the same creature with two Strikes from your Flurry of Blows, you can try to stun the creature. If either Strike hits and deals damage, the target must succeed at a Fortitude save against your class DC or be stunned 1 (or stunned 3 on a critical failure). This is an incapacitation effect."]
    }, {
        "name": "Deflect Arrows",
        "level": "4",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=443",
        "prereq": "",
        "benefits": "Your reflexes allow you to deflect ranged attacks.",
        "text": ["You gain a +4 circumstance bonus to AC against the triggering attack. If the attack misses, you have deflected it. You cannot use this feat to deflect unusually massive ranged projectiles (such as boulders or ballista bolts)."]
    }, {
        "name": "Flurry of Maneuvers",
        "level": "4",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=444",
        "prereq": "expert in Athletics",
        "benefits": "You flurry is a combination of maneuvers.",
        "text": ["You flurry is a combination of maneuvers. You can replace one or both of your attacks during a Flurry of Blows with Grapples, Shoves, or Trips."]
    }, {
        "name": "Flying Kick",
        "level": "4",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=445",
        "prereq": "",
        "benefits": "You launch yourself at a foe.",
        "text": ["You launch yourself at a foe. Make a Leap or attempt a High Jump or Long Jump. At the end of the jump, if you\u2019re adjacent to a foe, you can immediately Strike that foe with an unarmed attack, even if the foe is in mid-air. You fall to the ground after the Strike. If the distance you fall is no more than the height of your jump, you land upright and take no damage."]
    }, {
        "name": "Guarded Movement",
        "level": "4",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=446",
        "prereq": "",
        "benefits": "Your guard is up, even while moving.",
        "text": ["Your guard is up, even while moving. You gain a +4 circumstance bonus to AC against reactions triggered by your movement."]
    }, {
        "name": "Stand Still",
        "level": "4",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=447",
        "prereq": "",
        "benefits": "You strike out when your foe tries to flee. ",
        "text": ["You strike out when your foe tries to flee. Make a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a move action, you disrupt that action."]
    }, {
        "name": "Wholeness of Body",
        "level": "4",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=448",
        "prereq": "ki spells",
        "benefits": "You can restore your health by tapping into your ki.",
        "text": ["You can restore your health by tapping into your ki. You gain the ", " ki spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Abundant Step",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=449",
        "prereq": "incredible movement, ki spells",
        "benefits": "You can teleport yourself a short distance.",
        "text": ["You can teleport yourself a short distance. You gain the ", " ki spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Crane Flutter",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=450",
        "prereq": "Crane Stance",
        "benefits": "You interpose your arm between yourself and your opponent.",
        "text": ["You interpose your arm between yourself and your opponent. Your circumstance bonus to AC from Crane Stance increases to +3 against the triggering attack. If the attack misses you, you can immediately make a crane wing Strike against the attacker at a \u20132 penalty, even if the attacker isn\u2019t within your reach."]
    }, {
        "name": "Dragon Roar",
        "level": "6",
        "traits": ["Monk", " Auditory", " Emotion", " Fear", " Mental"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=451",
        "prereq": "Dragon Stance",
        "benefits": "You bellow, instilling fear in your enemies. ",
        "text": ["You bellow, instilling fear in your enemies. Enemies within a 15-foot emanation must succeed at a Will save against your Intimidation DC or be frightened 1 (frightened 2 on a critical failure). When a creature frightened by the roar begins its turn adjacent to you, it can\u2019t reduce its frightened value below 1 on that turn. Your first attack that hits a frightened creature after you roar and before the end of your next turn gains a +4 circumstance bonus to damage.", " After you use Dragon Roar, you can\u2019t use it again for 1d4 rounds. Its effects end immediately if you leave Dragon Stance. Creatures in the area of your roar are then temporarily immune for 1 minute."]
    }, {
        "name": "Ki Blast",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=452",
        "prereq": "ki spells",
        "benefits": "You can unleash an impactful cone of force by channeling your ki.",
        "text": ["You can unleash an impactful cone of force by channeling your ki. You gain the ", " ki spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Mountain Stronghold",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=453",
        "prereq": "Mountain Stance",
        "benefits": "You focus on your connection to the earth and call upon the mountain to block attacks against you. ",
        "text": ["You focus on your connection to the earth and call upon the mountain to block attacks against you. You gain a +2 circumstance bonus to AC until the beginning of your next turn.", " If you have this feat, the Dexterity modifier cap to your AC while you\u2019re in Mountain Stance increases from +0 to +1."]
    }, {
        "name": "Tiger Slash",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=454",
        "prereq": "Tiger Stance",
        "benefits": "You make a fierce swipe with both hands.",
        "text": ["You make a fierce swipe with both hands. Make a tiger claw Strike. It deals two extra weapon damage dice (three extra dice if you\u2019re 14th level or higher), and you can push the target 5 feet away as if you had successfully Shoved them. If the attack is a critical success and deals damage, add your Strength modifier to the persistent bleed damage from your tiger claw."]
    }, {
        "name": "Water Step",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=455",
        "prereq": "",
        "benefits": "You can Stride across liquid and surfaces that don\u2019t support your weight.",
        "text": ["You can Stride across liquid and surfaces that don\u2019t support your weight. This benefit lasts only during your movement. If you end your movement on a surface that can\u2019t support you, you fall in or it collapses as normal."]
    }, {
        "name": "Whirling Throw",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=456",
        "prereq": "",
        "benefits": "You propel your grabbed or restrained foe a great distance.",
        "text": ["You propel your grabbed or restrained foe a great distance. You can throw the creature any distance up to 10 feet, plus 5 feet \u00d7 your Strength modifier. If you successfully throw the creature, it takes bludgeoning damage equal to your Strength modifier plus 1d6 per 10 feet you threw it.", " Attempt an Athletics check against the foe\u2019s Fortitude DC. You take a \u20132 circumstance penalty to your check if the target is one size larger than you and a \u20134 circumstance penalty if it\u2019s larger than that. You gain a +2 circumstance bonus to your check if the target is one size smaller than you and a +4 circumstance bonus if it\u2019s smaller than that. ", " You throw the creature the desired distance and it lands prone.", " You throw the creature the desired distance.", " You don\u2019t throw the creature.", " You don\u2019t throw the creature, and it\u2019s no longer grabbed or restrained by you."]
    }, {
        "name": "Wolf Drag",
        "level": "6",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=457",
        "prereq": "Wolf Stance",
        "benefits": "You rip your enemy off their feet.",
        "text": ["You rip your enemy off their feet. Make a wolf jaw Strike. Your wolf jaw gains the fatal d12 trait for this Strike, and if the attack succeeds, you knock the target prone."]
    }, {
        "name": "Arrow Snatching ",
        "level": "8",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=458",
        "prereq": "Deflect Arrow",
        "benefits": "You pluck missiles from the air and hurl them back at their source.",
        "text": ["You pluck missiles from the air and hurl them back at their source. When you successfully deflect an attack with Deflect Arrow, as part of that reaction, you can immediately make a ranged Strike against the attacker using the projectile you deflected. This is a thrown weapon with the same range increment and effect on a hit as the triggering attack."]
    }, {
        "name": "Ironblood Stance",
        "level": "8",
        "traits": ["Monk", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=459",
        "prereq": "You are unarmored.",
        "benefits": "You enter the stance of impenetrable iron, refusing to yield to any blow.",
        "text": ["You enter the stance of impenetrable iron, refusing to yield to any blow. You can make iron sweep unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the nonlethal, parry, sweep, and unarmed traits. While in Ironblood Stance, you gain resistance 2 to all damage. The resistance increases to 3 at 12th level, to 4 at 16th level, and to 5 at 20th level."]
    }, {
        "name": "Mixed Maneuver",
        "level": "8",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=460",
        "prereq": "master in Athletics",
        "benefits": "You combine two different maneuvers together into a single flowing whole.",
        "text": ["You combine two different maneuvers together into a single flowing whole. Choose any two of Grapple, Shove, and Trip. Attempt both of the attacks you chose against the same or different creatures, but don\u2019t apply the multiple attack penalty until after resolving both attacks."]
    }, {
        "name": "Tangled Forest Stance",
        "level": "8",
        "traits": ["Monk", " Stance"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=461",
        "prereq": "You are unarmored.",
        "benefits": "You extend your arms like gnarled branches to interfere with your foes\u2019 movements.",
        "text": ["You extend your arms like gnarled branches to interfere with your foes\u2019 movements. You can make lashing branch unarmed attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.", " While you\u2019re in Tangled Forest Stance and can act, every enemy in your reach that tries to move away from you must succeed at a Reflex save, Acrobatics check, or Athletics check against your class DC or be immobilized for that action. If you prefer, you can allow the enemy to move."]
    }, {
        "name": "Wall Run",
        "level": "8",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=462",
        "prereq": "",
        "benefits": "You defy gravity, traversing vertical planes as easily as the ground.",
        "text": ["You defy gravity, traversing vertical planes as easily as the ground. Stride up to your Speed. You must start your movement on a horizontal surface. During this movement, you can run up vertical surfaces, like walls, at your full Speed. If you end the Stride off the ground, you fall after taking your next action or when your turn ends, whichever comes first (though you can Grab an Edge, if applicable). If you have Water Step or a similar ability, Wall Run lets you run along flimsy vertical surfaces, as well as vertical liquids, such as a waterfall."]
    }, {
        "name": "Wild Winds Initiate",
        "level": "8",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=463",
        "prereq": "ki spells",
        "benefits": "You learn a mystical stance that lets you attack from a distance. ",
        "text": ["You learn a mystical stance that lets you attack from a distance. You gain the ", " ki spell. Increase the number of Focus Points in your focus pool by 1. While entering the stance is a ki spell, the wind crash Strikes the stance grants are not, so you can use them as often as you like while in the stance."]
    }, {
        "name": "Knockback Strike",
        "level": "10",
        "traits": ["Monk", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=464",
        "prereq": "",
        "benefits": "You focus your strength into a blow powerful enough to push an enemy away from you.",
        "text": ["You focus your strength into a blow powerful enough to push an enemy away from you. Make an unarmed Strike. If you hit, attempt an Athletics check to Shove the target. This attack uses the same multiple attack penalty as your Strike, and doesn\u2019t count toward your multiple attack penalty."]
    }, {
        "name": "Sleeper Hold",
        "level": "10",
        "traits": ["Monk", " Attack", " Incapacitation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=465",
        "prereq": "",
        "benefits": "You pinch crucial points of your target\u2019s nervous system, impeding its ability to function.",
        "text": ["You pinch crucial points of your target\u2019s nervous system, impeding its ability to function. Attempt an Athletics check to Grapple the creature, with the following success and critical success effects instead of the usual effects. ", " The target falls unconscious for 1 minute, though it remains standing and doesn\u2019t drop what it holds. ", " The target is clumsy 1 until the end of its next turn."]
    }, {
        "name": "Wind Jump",
        "level": "10",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=466",
        "prereq": "ki spells",
        "benefits": "You gather the wind beneath you, allowing you to soar as you jump.",
        "text": ["You gather the wind beneath you, allowing you to soar as you jump. You gain the ", " ki spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Winding Flow",
        "level": "10",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=467",
        "prereq": "once per round",
        "benefits": "Any journey consists of more than simply reaching your destination. ",
        "text": ["Any journey consists of more than simply reaching your destination. You use two of the following actions in any order: Stand, Step, and Stride. You can\u2019t use the same action twice."]
    }, {
        "name": "Diamond Soul",
        "level": "12",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=468",
        "prereq": "",
        "benefits": "You have fortified your body and mind against eldritch effects.",
        "text": ["You have fortified your body and mind against eldritch effects. You gain a +1 status bonus to saving throws against magic."]
    }, {
        "name": "Disrupt Ki",
        "level": "12",
        "traits": ["Monk", " Negative"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=469",
        "prereq": "",
        "benefits": "Your strike can block a creature's inner life force.",
        "text": ["Make an unarmed Strike. If it deals damage to a living creature, you block that creature\u2019s inner life force. The creature takes 2d6 persistent negative damage and is enfeebled 1 until the persistent damage ends. If you\u2019re 18th level or higher, this deals 3d6 persistent negative damage instead."]
    }, {
        "name": "Improved Knockback",
        "level": "12",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=470",
        "prereq": "master in Athletics",
        "benefits": "Your shoves cause the target to go farther.",
        "text": ["When you successfully Shove a creature, increase both the distance you can push the creature and the distance you can move to follow along with the target by 5 feet on a success or 10 feet on a critical success. If you push the target into an obstacle, it takes bludgeoning damage equal to 6 plus your Strength modifier, or 8 plus your Strength modifier if you have legendary proficiency in Athletics."]
    }, {
        "name": "Meditative Focus",
        "level": "12",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=471",
        "prereq": "ki spells",
        "benefits": "Your meditation is so effective that you can achieve a deep focus.",
        "text": ["Your meditation is so effective that you can achieve a deep focus. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Stance Savant (Monk)",
        "level": "12",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=472",
        "prereq": "",
        "benefits": "You enter a stance without a thought. ",
        "text": ["You enter a stance without a thought. Use an action that has the stance trait."]
    }, {
        "name": "Ironblood Surge",
        "level": "14",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=473",
        "prereq": "Ironblood Stance",
        "benefits": "You steel yourself, preparing to resist oncoming attacks and using your muscles to absorb the impact.",
        "text": ["You steel yourself, preparing to resist oncoming attacks and using your muscles to absorb the impact. You gain the benefits of your iron sweep\u2019s parry trait (a +1 circumstance bonus to AC until the start of your next turn) and your resistance from Ironblood Stance increases to your Strength modifier (if it\u2019s higher) for the same duration."]
    }, {
        "name": "Moutain Quake",
        "level": "14",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=474",
        "prereq": "Mountain Stronghold",
        "benefits": "You stomp, shaking the earth beneath you and causing quakes.",
        "text": ["You stomp, shaking the earth beneath you. Creatures on the ground within a 20-foot emanation take damage equal to your Strength modifier (minimum 0), which they can resist with a basic Fortitude save. On a failure, they also fall prone. After you use this action, you can\u2019t use it again for 1d4 rounds.", " If you have this feat, the Dexterity modifier cap to your AC while using Mountain Stance increases from +1 to +2."]
    }, {
        "name": "Tangled Forest Rake",
        "level": "14",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=475",
        "prereq": "Tangled Forest Stance",
        "benefits": "You reposition foes with raking attacks.",
        "text": ["You reposition foes with raking attacks. Make a lashing branch Strike. If you hit and deal damage, you force the target to move 5 feet into a space within your reach. This follows the forced movement rules found on page 475."]
    }, {
        "name": "Timeless Body",
        "level": "14",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=476",
        "prereq": "",
        "benefits": "You cease aging",
        "text": ["You cease aging. In addition, you gain a +2 status bonus to saving throws against poisons and diseases, and you gain resistance to poison damage equal to half your level."]
    }, {
        "name": "Tongue of the Sun and Moon",
        "level": "14",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=477",
        "prereq": "",
        "benefits": "You have transcended the barriers between words and meaning.",
        "text": ["You have transcended the barriers between words and meaning. You can speak and understand all spoken languages."]
    }, {
        "name": "Enlightened Presence",
        "level": "16",
        "traits": ["Monk", " Emotion", " Mental"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=479",
        "prereq": "",
        "benefits": "You exude an aura of resolve.",
        "text": ["You exude an aura of resolve. You and allies within 15 feet of you gain a +2 status bonus to Will saving throws against mental effects."]
    }, {
        "name": "Master of Many Styles",
        "level": "16",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=480",
        "prereq": "Stance Savant",
        "benefits": "You move between stances in an unceasing dance.",
        "text": ["You move between stances in an unceasing dance. You use an action with the stance trait."]
    }, {
        "name": "Quivering Palm",
        "level": "16",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=481",
        "prereq": "ki spells",
        "benefits": "Your strikes can kill foes.",
        "text": ["Your strikes can kill foes. You gain the ", " ki spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Shattering Strike",
        "level": "16",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=482",
        "prereq": "",
        "benefits": "The force of your considered blow shatters objects and defenses alike.",
        "text": ["The force of your considered blow shatters objects and defenses alike. Make an unarmed Strike. It bypasses the target\u2019s resistances. If the target has Hardness, the Strike treats the Hardness as if it were half its value."]
    }, {
        "name": "Wild Winds Gust",
        "level": "16",
        "traits": ["Monk", " Air", " Concentrate", " Evocation", " Manipulate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=478",
        "prereq": "Wild Winds Initiate",
        "benefits": "You store up energy and release it in an enormous gust of rushing wind",
        "text": ["You store up energy and release it in an enormous gust of rushing wind. Make a wind crash Strike against each creature in your choice of a 30-foot cone or a 60 foot line. These attacks all count toward your multiple attack penalty, but the penalty doesn\u2019t increase until after you make all the attacks."]
    }, {
        "name": "Diamond Fists",
        "level": "18",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=483",
        "prereq": "",
        "benefits": "Your body hardens as you combine your attacks, making your finishing blows more damaging.",
        "text": ["Your body hardens as you combine your attacks, making your finishing blows more damaging. Your unarmed attacks gain the forceful trait. Any that already had this trait instead increase their weapon damage dice by one step."]
    }, {
        "name": "Empty Body",
        "level": "18",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=484",
        "prereq": "ki spells",
        "benefits": "You transmute your body into an ethereal form.",
        "text": ["You transmute your body into an ethereal form. You gain the ", " ki spell. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Meditative Wellspring",
        "level": "18",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=485",
        "prereq": "Meditative Focus",
        "benefits": "When you clear your mind, your focus comes flowing back in a powerful rush.",
        "text": ["When you clear your mind, your focus comes flowing back in a powerful rush. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Swift River",
        "level": "18",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=486",
        "prereq": "",
        "benefits": "You flow like water, avoiding all restraints.",
        "text": ["You flow like water, avoiding all restraints. End one status penalty to your speed, or end one immobilized or slowed condition affecting you."]
    }, {
        "name": "Enduring Quickness",
        "level": "20",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=487",
        "prereq": "",
        "benefits": "You move as fast and as high as the wind itself. ",
        "text": ["You move as fast and as high as the wind itself. You\u2019re permanently quickened. You can use your extra action to Stride or Leap, or to provide one of the actions needed for a High Jump or Long Jump."]
    }, {
        "name": "Fuse Stance",
        "level": "20",
        "traits": ["Monk"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=488",
        "prereq": "at least two stances",
        "benefits": "You have combined two stances into a single stance all your own.",
        "text": ["You have combined two stances into a single stance all your own. When you take this feat, choose two stances you know and combine them into a single fused stance. Give your new fused stance a unique name. When you enter your fused stance, you gain all the effects of both stances, including the requirements and restrictions.", " You can\u2019t fuse stances with fundamentally incompatible requirements or restrictions (such as Ironblood Stance and Crane Stance, which both require using only one type of Strike)."]
    }, {
        "name": "Impossible Technique",
        "level": "20",
        "traits": ["Monk", " Fortune"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=489",
        "prereq": "",
        "benefits": "You execute a maneuver that defies possibility.",
        "text": ["You execute a maneuver that defies possibility. If the triggering effect was an enemy\u2019s attack hitting you, the enemy rerolls the attack roll and uses the lower result. If the triggering effect was you failing a saving throw, you reroll the saving throw and use the higher result."]
    }, {
        "name": "Animal Companion",
        "level": "1",
        "traits": ["Ranger", " Druid"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=311",
        "prereq": "[Druid] animal order",
        "benefits": "You gain the service of a young animal companion that travels with you.",
        "text": ["You gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See Animal Companions on page 214 for more information.", ": When you Hunt Prey, your animal companion gains the action\u2019s benefits and your hunter\u2019s edge benefit if you have one."]
    }, {
        "name": "Crossbow Ace",
        "level": "1",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=491",
        "prereq": "",
        "benefits": "You have a deep understanding of the crossbow.",
        "text": ["You have a deep understanding of the crossbow. When you\u2019re wielding a crossbow and use Hunt Prey or use Interact to reload your crossbow, you gain a +2 circumstance bonus to the damage roll on your next Strike with that crossbow. If the crossbow is a simple crossbow, also increase the damage die size for that attack by one step (page 279). You must make the attack before the end of your next turn or these benefits are lost."]
    }, {
        "name": "Hunted Shot",
        "level": "1",
        "traits": ["Ranger", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=492",
        "prereq": "",
        "benefits": "You take two quick shots against the one you hunt.",
        "text": ["You take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each Strike normally."]
    }, {
        "name": "Monster Hunter",
        "level": "1",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=493",
        "prereq": "",
        "benefits": "You swiftly assess your prey and apply what you know.",
        "text": ["You swiftly assess your prey and apply what you know. As part of the action used to Hunt your Prey, you can attempt a check to Recall Knowledge about your prey. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in the creature\u2019s defenses. You and allies you tell gain a +1 circumstance bonus to your next attack roll against that prey. You can give bonuses from Monster Hunter only once per day against a particular creature."]
    }, {
        "name": "Twin Takedown",
        "level": "1",
        "traits": ["Ranger", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=494",
        "prereq": "",
        "benefits": "You swiftly attack your hunted prey with both weapons.",
        "text": ["You swiftly attack your hunted prey with both weapons. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each Strike normally."]
    }, {
        "name": "Favored Terrain",
        "level": "2",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=495",
        "prereq": "",
        "benefits": "You have studied a specific terrain to overcome its\u00a0challenges.",
        "text": ["You have studied a specific terrain to overcome its challenges. Choose aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground as your favored terrain. When in that terrain, you can ignore the effects of non-magical diffcult terrain. If you have the wild stride class feature, you gain a second benefit while in your favored terrain, depending on your choice. "]
    }, {
        "name": "Hunter's Aim",
        "level": "2",
        "traits": ["Ranger", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=496",
        "prereq": "",
        "benefits": "When you focus on aiming, your attack becomes particularly accurate.",
        "text": ["When you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon Strike against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey\u2019s concealed condition."]
    }, {
        "name": "Monster Warden",
        "level": "2",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=497",
        "prereq": "Monster Hunter",
        "benefits": "You understand how to defend yourself and others against your prey.",
        "text": ["You understand how to defend yourself and others against your prey. When you grant bonuses from Monster Hunter, you and your allies also each gain a +1 circumstance bonus to your next saving throw against that particular creature and to your AC against that creature\u2019s next attack against you."]
    }, {
        "name": "Quick Draw",
        "level": "2",
        "traits": ["Ranger", " Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=498",
        "prereq": "",
        "benefits": "You draw your weapon and attack with the same motion. ",
        "text": ["You draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon."]
    }, {
        "name": "Relentless Stalker",
        "level": "2",
        "traits": ["Ranger", " Move", " Uncommon"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=867",
        "prereq": "",
        "benefits": "Stay adjacent to your prey when they attempt to move away",
        "text": ["Your hunted prey cannot escape your relentless pursuit. ", " up to your Speed in tandem with the triggering creature, remaining adjacent to the foe throughout its movement until it stops moving or you run out of movement. You can ignore difficult terrain during this movement unless the difficult terrain is caused by a magical effect."]
    }, {
        "name": "Wild Empathy",
        "level": "2",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=499",
        "prereq": "",
        "benefits": "You have a connection to the creatures of the natural world.",
        "text": ["You have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case."]
    }, {
        "name": "Companion's Cry",
        "level": "4",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=500",
        "prereq": "an animal companion",
        "benefits": "You can urge your companion to do its utmost.",
        "text": ["You can urge your companion to do its utmost. You can spend 2 actions to Command an Animal instead of 1 when commanding your animal companion. If you do, your animal companion uses an additional action."]
    }, {
        "name": "Disrupt Prey",
        "level": "4",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=501",
        "prereq": "",
        "benefits": "Make a melee Strike against your prey.",
        "text": ["Make a melee Strike against your prey. If the attack is a critical hit, you disrupt the triggering action."]
    }, {
        "name": "Far Shot",
        "level": "4",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=502",
        "prereq": "",
        "benefits": "Your experience in the field has taught you how to focus your aim at a distance.",
        "text": ["Your experience in the field has taught you how to focus your aim at a distance, increasing your accuracy. Double your weapons\u2019 range increments."]
    }, {
        "name": "Favored Enemy",
        "level": "4",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=503",
        "prereq": "",
        "benefits": "You have studied a specific type of wild creature and can hunt it more easily. ",
        "text": ["You have studied a specific type of wild creature and can hunt it more easily. When you gain this feat, choose animals, beasts, dragons, or both fungi and plants as your favored enemy. When you roll initiative and can see an enemy that belongs to the chosen category, you can Hunt Prey as a free action, designating that enemy.", " You can use this free action even if you haven\u2019t identified the creature yet with Recall Knowledge. The benefit doesn\u2019t apply against favored enemies disguised as other creatures, and the GM determines whether it applies against a creature disguised as a favored enemy."]
    }, {
        "name": "Running Reload",
        "level": "4",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=504",
        "prereq": "",
        "benefits": "You can reload your weapon on the move. ",
        "text": ["You can reload your weapon on the move. You Stride, Step, or Sneak, then Interact to reload."]
    }, {
        "name": "Scout's Warning",
        "level": "4",
        "traits": ["Ranger", " Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=505",
        "prereq": "",
        "benefits": "You visually or audibly warn your allies of danger.",
        "text": ["You visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls. Depending on whether you use gestures or call out, this action gains either the visual or auditory trait, respectively."]
    }, {
        "name": "Snare Specialist",
        "level": "4",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=506",
        "prereq": "expert in Crafting, Snare Crafting",
        "benefits": "You specialize in creating quick traps to obstruct your enemies on the battlefield",
        "text": ["You specialize in creating quick traps to obstruct your enemies on the battlefield. If your proficiency rank in Crafting is expert, you gain the formulas for three common or uncommon snares (page 589). If your rank is master, you gain 6. If your rank is legendary, you gain 9.", " Each day during your daily preparations, you can prepare four snares from your formula book for quick deployment; if they normally take 1 minute to Craft, you can Craft them with 3 Interact actions. The number of snares increases to six if you have master proficiency in Crafting and eight if you have legendary proficiency in Crafting. Snares prepared in this way don\u2019t cost you any resources to Craft."]
    }, {
        "name": "Twin Parry",
        "level": "4",
        "traits": ["Ranger", " Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=377",
        "prereq": "",
        "benefits": "You use your two weapons to parry attacks.",
        "text": ["You use your two weapons to parry attacks. You gain a +1 circumstance bonus to AC until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat\u2019s requirement."]
    }, {
        "name": "Mature Animal Companion (Ranger)",
        "level": "6",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=508",
        "prereq": "Animal Companion",
        "benefits": "Your animal companion grows up, gaining additional capabilities.",
        "text": ["Your animal companion grows up, becoming a mature animal companion and gaining additional capabilities (page 214). If you have the Hunt Prey action, your animal companion assaults the prey even without your orders. During an encounter, even if you don\u2019t use the Command an Animal action, your animal companion can still use 1 action that round on your turn to Stride toward or Strike your prey."]
    }, {
        "name": "Quick Snares",
        "level": "6",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=509",
        "prereq": "expert in Crafting, Snare Specialist",
        "benefits": "You can rig a snare in only moments.",
        "text": ["You can rig a snare in only moments. You can Craft snares that normally take 1 minute to Craft with 3 Interact actions, even if you haven\u2019t prepared them."]
    }, {
        "name": "Skirmish Strike",
        "level": "6",
        "traits": ["Ranger", " Flourish", " Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=510",
        "prereq": "",
        "benefits": "Your feet and weapon move in tandem.",
        "text": ["Your feet and weapon move in tandem. Either Step and then Strike, or Strike and then Step."]
    }, {
        "name": "Snap Shot",
        "level": "6",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=511",
        "prereq": "",
        "benefits": "You\u2019ve learned to react with ranged weapons when a creature is in close quarters.",
        "text": ["You\u2019ve learned to react with ranged weapons when a creature\r\nis in close quarters. You can use a reaction that normally allows\r\nyou to make a melee weapon Strike to instead make a ranged\r\nweapon Strike. You must be Striking an adjacent target. If\r\nnecessary for the reaction\u2019s trigger, you treat your ranged\r\nweapon as if it had a reach of 5 feet. If the reaction has other\r\nrequirements, such as wielding a specific kind of weapon, Snap\r\nShot doesn\u2019t allow you to ignore them; it allows you only to\r\nreplace a melee weapon Strike with a ranged weapon Strike."]
    }, {
        "name": "Swift Tracker",
        "level": "6",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=512",
        "prereq": "expert in Survival, Experienced Tracker",
        "benefits": "Your keen eyes catch signs of passage even when you\u2019re moving.",
        "text": ["Your keen eyes catch signs of passage even when you\u2019re moving. You can move at your full Speed while you Track. If you have master proficiency in Survival, you don\u2019t need to attempt a new Survival check every hour while Tracking. If you have legendary proficiency in Survival, you can use another exploration activity while Tracking.", " If you roll Survival for initiative while tracking your hunted prey, when you start your first turn of the encounter, you can Stride toward your hunted prey as a free action."]
    }, {
        "name": "Blind-Fight",
        "level": "8",
        "traits": ["Ranger", " Fighter", " Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=388",
        "prereq": "master in Perception",
        "benefits": "Your battle instincts make you more aware of concealed and invisible opponents.",
        "text": ["Your battle instincts make you more aware of concealed and invisible opponents. You don\u2019t need to succeed at a flat check to target concealed creatures. You\u2019re not flat-footed to creatures that are hidden from you (unless you\u2019re flat-footed to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.", " While you\u2019re adjacent to an undetected creature of your level or lower, it is instead only hidden from you."]
    }, {
        "name": "Deadly Aim",
        "level": "8",
        "traits": ["Ranger", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=514",
        "prereq": "weapon specialization",
        "benefits": "You aim for your prey\u2019s weak spots, making your shot more challenging but dealing more damage if you hit. ",
        "text": ["You aim for your prey\u2019s weak spots, making your shot more challenging but dealing more damage if you hit. Make a ranged Strike against your hunted prey at a \u20132 penalty. You gain a +4 circumstance bonus to damage on that Strike. This bonus increases to +6 at 11th level and +8 at 15th level."]
    }, {
        "name": "Hazard Finder",
        "level": "8",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=515",
        "prereq": "",
        "benefits": "You have an intuitive ability to sense hazards.",
        "text": ["You have an intuitive ability to sense hazards. You gain a +1 circumstance bonus to Perception checks to find traps and hazards, to AC against their attacks, and to saves against their effects. You can find hazards that would normally require you to Search even if you aren\u2019t Searching."]
    }, {
        "name": "Powerful Snares",
        "level": "8",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=516",
        "prereq": "master in Crafting, Snare Specialist",
        "benefits": "Your snares are particularly dif cult for enemies to avoid.",
        "text": ["Your snares are particularly difficult for enemies to avoid. When you set a snare, the saving throw DC for that snare is equal to its normal DC or your class DC, whichever is higher."]
    }, {
        "name": "Terrain Master",
        "level": "8",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=517",
        "prereq": "wild stride, master in Survival, Favored Terrain",
        "benefits": "You adapt to your surroundings in any natural terrain. ",
        "text": ["You adapt to your surroundings in any natural terrain. You can spend 1 hour practicing in your current terrain in order to make it your favored terrain, replacing your current favored terrain temporarily. If you spend a full day out of the new favored terrain, your favored terrain reverts back to your original choice when you took the Favored Terrain feat."]
    }, {
        "name": "Warden's Boon",
        "level": "8",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=518",
        "prereq": "",
        "benefits": "By pointing out vulnerabilities, you grant an ally benefits from your hunting abilities",
        "text": ["By pointing out vulnerabilities, you grant the benefits listed in Hunt Prey and your hunter\u2019s edge benefit to an ally until the end of their next turn. Depending on whether you call out or use gestures, this action gains either the auditory or visual trait."]
    }, {
        "name": "Camouflage",
        "level": "10",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=519",
        "prereq": "master in Stealth",
        "benefits": "You alter your appearance to blend in to the wilderness. ",
        "text": ["You alter your appearance to blend in to the wilderness. In natural terrain, you can Sneak even if you\u2019re observed."]
    }, {
        "name": "Incredible Companion (Ranger)",
        "level": "10",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=520",
        "prereq": "Mature Animal Companion",
        "benefits": "Your animal companion continues to grow and develop.",
        "text": ["Your animal companion continues to grow and develop. It becomes a nimble or savage animal companion (your choice), gaining additional capabilities determined by the type of companion (page 214)."]
    }, {
        "name": "Master Monster Hunter",
        "level": "10",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=521",
        "prereq": "master in Nature, Monster Hunter",
        "benefits": "You have a nearly encyclopedic knowledge of all creatures of the world.",
        "text": ["You have a nearly encyclopedic knowledge of all creatures of the world. You can use Nature to Recall Knowledge to identify any creature. In addition, you gain the benefits of Monster Hunter (and Monster Warden, if you have it) on a success as well as a critical success."]
    }, {
        "name": "Penetrating Shot",
        "level": "10",
        "traits": ["Ranger", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=522",
        "prereq": "",
        "benefits": "You shoot clear through an intervening creature to hit your prey.",
        "text": ["You shoot clear through an intervening creature to hit your prey. Choose a target that is giving lesser cover to your hunted prey. Make a single ranged Strike with the required weapon against the chosen target and your hunted prey. This attack ignores any lesser cover the chosen target provides your hunted prey. Roll damage only once, and apply it to each creature you hit. A Penetrating Shot counts as two attacks for your multiple attack penalty."]
    }, {
        "name": "Twin Riposte",
        "level": "10",
        "traits": ["Ranger", " Fighter"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=523",
        "prereq": "",
        "benefits": "A clever parry with one weapon leaves your opponent open to an attack with the other weapon. ",
        "text": ["A clever parry with one weapon leaves your opponent open to an attack with the other weapon. Make a melee Strike or use a Disarm action against the triggering opponent."]
    }, {
        "name": "Warden's Step",
        "level": "10",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=524",
        "prereq": "master in Stealth",
        "benefits": "You can guide your allies to move quietly through the wilderness.",
        "text": ["You can guide your allies to move quietly through the wilderness. When you Sneak during exploration in natural terrain, you can designate any number of your allies to gain the benefits as if they were using that activity during that exploration. This requires no action on their part."]
    }, {
        "name": "Distracting Shot",
        "level": "12",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=525",
        "prereq": "",
        "benefits": "The sheer power of your attacks, or the overwhelming number of them, leaves an enemy flustered.",
        "text": ["The sheer power of your attacks, or the overwhelming number of them, leaves an enemy flustered. If you critically hit your hunted prey with a ranged weapon, or hit it at least twice on the same turn with a ranged weapon, it\u2019s flat-footed until the start of your next turn."]
    }, {
        "name": "Double Prey",
        "level": "12",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=526",
        "prereq": "",
        "benefits": "You can focus on two foes at once, hunting both of them down.",
        "text": ["You can focus on two foes at once, hunting both of them down. When you use the Hunt Prey action, you can pick two creatures as your prey."]
    }, {
        "name": "Lightning Snares",
        "level": "12",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=527",
        "prereq": "master in Crafting, Snare Specialist",
        "benefits": "You can rig a trap with incredible speed.",
        "text": ["You can rig a trap with incredible speed. When you create a snare that normally takes 1 minute to Craft, you can Craft it using a single Interact action instead."]
    }, {
        "name": "Second Sting",
        "level": "12",
        "traits": ["Ranger", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=528",
        "prereq": "",
        "benefits": "You read your prey\u2019s movements and transform them into openings, so failures with one weapon set up glancing blows with the other. ",
        "text": ["You read your prey\u2019s movements and transform them into openings, so failures with one weapon set up glancing blows with the other. Make a melee Strike with one of the required weapons against your hunted prey. The Strike gains the following failure effect. ", " You deal the damage the other required weapon would have dealt on a hit, excluding all damage dice. (This removes dice from weapon runes, spells, and special abilities, not just weapon damage dice.)"]
    }, {
        "name": "Side by Side (Ranger)",
        "level": "12",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=529",
        "prereq": "an animal companion",
        "benefits": "You and your animal companion fight in tandem, distracting your foes and keeping them of balance. ",
        "text": ["You and your animal companion fight in tandem, distracting your foes and keeping them off balance. Whenever you and your animal companion are adjacent to the same foe, you are both flanking that foe with each other, regardless of your actual positions."]
    }, {
        "name": "Sense the Unseen",
        "level": "14",
        "traits": ["Ranger", " Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=530",
        "prereq": "",
        "benefits": "When you look for foes, you can catch even the slightest cues.",
        "text": ["When you look for foes, you can catch even the slightest cues, such as their minute movements or the shifting of air currents on your skin. Even though you failed at the triggering check, you automatically sense any undetected creatures in the area where you\u2019re Seeking, making them merely hidden to you."]
    }, {
        "name": "Shared Prey",
        "level": "14",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=531",
        "prereq": "Double Prey, Warden\u2019s Boon",
        "benefits": "Hunting as a duo, you and your ally both single out your prey.",
        "text": ["Hunting as a duo, you and your ally both single out your prey. When you use Hunt Prey and select only one prey, you can grant your Hunt Prey benefits and hunter\u2019s edge to an ally in addition to gaining them yourself. The ally retains these benefits until you use Hunt Prey again."]
    }, {
        "name": "Stealthy Companion",
        "level": "14",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=532",
        "prereq": "Camouflage",
        "benefits": "You\u2019ve trained your animal companion to blend in to its surroundings.",
        "text": ["You\u2019ve trained your animal companion to blend in to its surroundings. Your animal companion gains the benefit of the ", " feat. If your companion is a specialized ambusher, its proficiency rank for Stealth increases to master (or legendary if it was already master)."]
    }, {
        "name": "Targeting Shot",
        "level": "14",
        "traits": ["Ranger", " Concentrate", " Press"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=533",
        "prereq": "Hunter\u2019s Aim",
        "benefits": "You carefully track your prey\u2019s position and defenses.",
        "text": ["You carefully track your prey\u2019s position and defenses, allowing you to follow up around obstacles that block your shot. Make a ranged weapon Strike against your hunted prey. You ignore the target\u2019s concealed condition and all cover."]
    }, {
        "name": "Warden's Guidance",
        "level": "14",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=534",
        "prereq": "",
        "benefits": "You can convey your prey\u2019s location to your allies, no matter how well hidden it is.",
        "text": ["You can convey your prey\u2019s location to your allies, no matter how well hidden it is. As long as your hunted prey is observed by you, all your allies who roll failures and critical failures when Seeking it get a success instead. Your allies need to be able to see or hear you to gain this benefit. You have to be able to call out or use gestures for your allies to get this benefit."]
    }, {
        "name": "Greater Distracting Shot",
        "level": "16",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=535",
        "prereq": "Distracting Shot",
        "benefits": "Even a single missile can throw of your enemy\u2019s balance, and more powerful attacks leave it flustered for longer. ",
        "text": ["Even a single missile can throw off your enemy\u2019s balance, and more powerful attacks leave it flustered for longer. If you hit your hunted prey with a ranged weapon, it\u2019s flat-footed until the start of your next turn. If you critically hit your prey or hit it twice on the same turn with a ranged weapon, it\u2019s flat-footed until the end of your next turn instead."]
    }, {
        "name": "Improved Twin Riposte (Ranger)",
        "level": "16",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=536",
        "prereq": "Twin Riposte",
        "benefits": "You are able to riposte an additional time per turn.",
        "text": ["At the start of each of your turns, you gain an additional reaction that you can use only to perform a ", " against your hunted prey. You can use this extra reaction even if you are not benefiting from ", "."]
    }, {
        "name": "Legendary Monster Hunter",
        "level": "16",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=537",
        "prereq": "legendary in Nature, Master Monster Hunter",
        "benefits": "Your knowledge of monsters is so incredible that it reveals glaring flaws in your prey. ",
        "text": ["Your knowledge of monsters is so incredible that it reveals glaring flaws in your prey. Your bonus from ", " (and the bonus from ", " if you have it) increases from +1 to +2 for you and any allies who benefit."]
    }, {
        "name": "Specialized Companion (Ranger)",
        "level": "16",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=538",
        "prereq": "Incredible Companion",
        "benefits": "Your animal companion has become cunning enough to become specialized.",
        "text": ["Your animal companion has become cunning enough to become specialized. Your animal companion gains one specialization of your choice. (See the Animal Companion section on page 214.)"]
    }, {
        "name": "Ubiquitous Snares",
        "level": "16",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=539",
        "prereq": "Snare Specialist",
        "benefits": "You can prepare a seemingly impossible number of snares in advance, and you\u2019re ready to spring them on unsuspecting foes.",
        "text": ["You can prepare a seemingly impossible number of snares in advance, and you\u2019re ready to spring them on unsuspecting foes. Double the number of prepared snares from Snare Specialist."]
    }, {
        "name": "Impossible Flurry",
        "level": "18",
        "traits": ["Ranger", " Flourish", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=540",
        "prereq": "",
        "benefits": "You forgo precision to attack at an impossible speed.",
        "text": ["You forgo precision to attack at an impossible speed. Make three melee Strikes with each of the required weapons. All of these Strikes take the maximum multiple attack penalty, as if you had already made two or more attacks this turn."]
    }, {
        "name": "Impossible Volley",
        "level": "18",
        "traits": ["Ranger", " Fighter", " Flourish", " Open"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=426",
        "prereq": "",
        "benefits": "You fire a volley at all foes in an area.",
        "text": ["You fire a volley at all foes in an area. Make one Strike with a \u20132 penalty against each enemy within a 10-foot-radius burst centered at or beyond your weapon\u2019s volley range. Roll the damage only once for all targets.", " Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks.", " When taken as a Fighter feat, this feat has the ", " and ", " traits."]
    }, {
        "name": "Manifold Edge",
        "level": "18",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=542",
        "prereq": "hunter\u2019s edge, masterful hunter",
        "benefits": "You\u2019ve learned every possible edge to use against your foes.",
        "text": ["You\u2019ve learned every possible edge to use against your foes. When you use Hunt Prey, you can gain a hunter\u2019s edge benefit other than the one you selected at 1st level. If you do, you don\u2019t gain the additional benefit from masterful hunter."]
    }, {
        "name": "Masterful Companion",
        "level": "18",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=543",
        "prereq": "masterful hunter, Animal Companion",
        "benefits": "Your animal companion shares your incredible hunting skills, allowing it to take down your shared prey with ease.",
        "text": ["Your animal companion shares your incredible hunting skills, allowing it to take down your shared prey with ease. When you Hunt Prey, your animal companion gains the masterful hunter benefit associated with your hunter\u2019s edge, rather than just your original hunter\u2019s edge benefit."]
    }, {
        "name": "Perfect Shot",
        "level": "18",
        "traits": ["Ranger", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=544",
        "prereq": "",
        "benefits": "After watching the motions of combat with incredible intensity and precision, you f re at your prey at the perfect moment to deliver maximum pain.",
        "text": ["After watching the motions of combat with incredible intensity and precision, you fire at your prey at the perfect moment to deliver maximum pain. Make a ranged Strike with the required weapon against your hunted prey. If you hit, the Strike deals maximum damage. After the Strike, your turn ends."]
    }, {
        "name": "Shadow Hunter",
        "level": "18",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=545",
        "prereq": "Camouflage",
        "benefits": "You blend in to your surroundings so well that others have trouble telling you apart from the terrain.",
        "text": ["You blend in to your surroundings so well that others have trouble telling you apart from the terrain. While in natural terrain, you\u2019re always concealed from all foes if you choose to be, except for your hunted prey."]
    }, {
        "name": "Legendary Shot",
        "level": "20",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=546",
        "prereq": "masterful hunter, legendary in Perception, Far Shot",
        "benefits": "You focus on your hunted prey, perceiving angles, air resistance, and every variable that would af ect your ranged attack.",
        "text": ["You focus on your hunted prey, perceiving angles, air resistance, and every variable that would affect your ranged attack. If you have master proficiency with your ranged weapon, you can ignore the penalty for attacking up to five range increments away when attacking your hunted prey."]
    }, {
        "name": "To the Ends of the Earth",
        "level": "20",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=547",
        "prereq": "legendary in Survival",
        "benefits": "Your ability to track your prey has surpassed explanation, allowing you to trace your prey\u2019s movements and predict its location with ease.",
        "text": ["Your ability to track your prey has surpassed explanation, allowing you to trace your prey\u2019s movements and predict its location with ease. When you use Hunt Prey on a creature within 100 feet, you can follow that creature\u2019s movements, allowing you to know the creature\u2019s exact location no matter how far away it becomes, as long as it remains your prey. You must be legendary in Nature to track your prey\u2019s location across teleportation or planar travel. This feat gains the detection, divination, and primal traits if you\u2019re legendary in Nature."]
    }, {
        "name": "Triple Threat",
        "level": "20",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=548",
        "prereq": "Shared Prey",
        "benefits": "You can divide your attention three ways when hunting.",
        "text": ["You can divide your attention three ways when hunting. When you use Hunt Prey, you can designate three creatures as prey, designate two creatures as prey and share the effect with one ally (as Shared Prey), or designate one creature as prey and share the effect with two allies."]
    }, {
        "name": "Ultimate Skirmisher",
        "level": "20",
        "traits": ["Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=549",
        "prereq": "wild stride",
        "benefits": "You are so skilled at navigating the wild, your movement is completely unaf ected by terrain. ",
        "text": ["You are so skilled at navigating the wild, your movement is completely unaffected by terrain. You ignore the effects of all difficult terrain, greater difficult terrain, and hazardous terrain, and you don\u2019t trigger traps and hazards that are triggered by moving into an area (such as trip wires and pressure plates), unless you want to."]
    }, {
        "name": "Nimble Dodge",
        "level": "1",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=550",
        "prereq": "",
        "benefits": "You deftly dodge out of the way.",
        "text": ["You deftly dodge out of the way, gaining a +2 circumstance bonus to AC against the triggering attack."]
    }, {
        "name": "Trap Finder",
        "level": "1",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=551",
        "prereq": "",
        "benefits": "You have an intuitive sense that alerts you to the dangers and presence of traps.",
        "text": ["You have an intuitive sense that alerts you to the dangers and presence of traps. You gain a +1 circumstance bonus to Perception checks to find traps, to AC against attacks made by traps, and to saves against traps. Even if you aren\u2019t Searching, you get a check to find traps that normally require you to be Searching. You still need to meet any other requirements to find the trap.", " You can disable traps that require a proficiency rank of master in Thievery. If you have master proficiency in Thievery, you can disable traps that require a proficiency rank of legendary instead, and your circumstance bonuses against traps increase to +2."]
    }, {
        "name": "Twin Feint",
        "level": "1",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=552",
        "prereq": "",
        "benefits": "You make a dazzling series of attacks with both weapons, using the first attack to throw your foe of guard against a second attack at a different angle.",
        "text": ["You make a dazzling series of attacks with both weapons, using the first attack to throw your foe offguard against a second attack at a different angle. Make one Strike with each of your two melee weapons, both against the same target. The target is automatically flat-footed against the second attack. Apply your multiple attack penalty to the Strikes normally."]
    }, {
        "name": "You're Next",
        "level": "1",
        "traits": ["Rogue", " Emotion", " Fear", " Mental"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=553",
        "prereq": "trained in Intimidation",
        "benefits": "After downing a foe, you menacingly remind another foe that you\u2019re coming after them next. ",
        "text": ["After downing a foe, you menacingly remind another foe that you\u2019re coming after them next. Attempt an Intimidation check with a +2 circumstance bonus to Demoralize a single creature that you can see and that can see you. If you have legendary proficiency in Intimidation, you can use this as a free action with the same trigger."]
    }, {
        "name": "Brutal Beating",
        "level": "2",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=554",
        "prereq": "ruffian racket",
        "benefits": "The brutality of your critical hits shakes your foes\u2019 confidence.",
        "text": ["The brutality of your critical hits shakes your foes\u2019 confidence. Whenever your Strike is a critical hit and deals damage, the target is frightened 1."]
    }, {
        "name": "Distracting Feint",
        "level": "2",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=555",
        "prereq": "scoundrel racket",
        "benefits": "Your Feints are far more distracting than normal, drawing your foes\u2019 attention and allowing you and your allies to take greater advantage.",
        "text": ["Your Feints are far more distracting than normal, drawing your foes\u2019 attention and allowing you and your allies to take greater advantage. While a creature is flat-footed by your Feint, it also takes a \u20132 circumstance penalty to Perception checks and Reflex saves."]
    }, {
        "name": "Minor Magic",
        "level": "2",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=556",
        "prereq": "",
        "benefits": "You\u2019ve dabbled in a variety of tricks, gaining minor magical abilities from a particular tradition.",
        "text": ["You\u2019ve dabbled in a variety of tricks, gaining minor magical abilities from a particular tradition. Choose arcane, divine, occult, or primal magic, and gain two cantrips from the common cantrips available to that tradition."]
    }, {
        "name": "Mobility",
        "level": "2",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=557",
        "prereq": "",
        "benefits": "You move in a way that denies your enemies the opportunity to retaliate.",
        "text": ["You move in a way that denies your enemies the opportunity to retaliate. When you take a Stride action to move half your Speed or less, that movement does not trigger reactions. You can use Mobility when Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Quick Draw",
        "level": "2",
        "traits": ["Rogue", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=498",
        "prereq": "",
        "benefits": "You draw your weapon and attack with the same motion. ",
        "text": ["You draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon."]
    }, {
        "name": "Unbalancing Blow",
        "level": "2",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=559",
        "prereq": "thief racket",
        "benefits": "Interweaving your most powerful attacks in a graceful fiow, you temporarily unbalance your foes. Whenever your Strike is a critical hit and deals damage, the target is flat-footed against your attacks until the end of your next turn.",
        "text": ["Interweaving your most powerful attacks in a graceful fiow, you temporarily unbalance your foes. Whenever your Strike is a critical hit and deals damage, the target is flat-footed against your attacks until the end of your next turn."]
    }, {
        "name": "Battle Assessment",
        "level": "4",
        "traits": ["Rogue", " Secret"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=560",
        "prereq": "",
        "benefits": "With careful observation during battle, you identify an enemy\u2019s strengths and weaknesses. ",
        "text": ["With careful observation during battle, you identify an enemy\u2019s strengths and weaknesses. The GM rolls a secret Perception check for you against the Deception or Stealth DC (whichever is higher) of an enemy of your choice who is not concealed from you, hidden from you, or undetected by you, and who is engaged in combat. The GM might apply a penalty for the distance between you and the enemy. The enemy is then temporarily immune to your Battle Assessment for 1 day. ", " The GM chooses two of the following pieces of information about the enemy to tell you: which of the enemy\u2019s weaknesses is highest, which of the enemy\u2019s saving throws has the lowest modifier, one immunity the enemy has, or which of the enemy\u2019s resistances is highest. If the event of a tie, the GM should pick one at random. ", " The GM chooses one piece of information from the above list to tell you about the enemy. ", " The GM gives you false information (the GM makes up the information)."]
    }, {
        "name": "Dread Striker",
        "level": "4",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=561",
        "prereq": "",
        "benefits": "You capitalize on your enemies\u2019 fear to slip past their defenses.",
        "text": ["You capitalize on your enemies\u2019 fear to slip past their defenses. Any creature that has the frightened condition is also flat-footed against your attacks."]
    }, {
        "name": "Magical Trickster",
        "level": "4",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=562",
        "prereq": "",
        "benefits": "You can sneak spells past your foes\u2019 defenses as easily as any blade",
        "text": ["Whether you\u2019re using magic items, wielding innate magic, or dabbling in spellcasting, you can sneak spells past your foes\u2019 defenses as easily as any blade. When you succeed at a spell attack roll against a flat-footed foe\u2019s AC and the spell deals damage, you can add your sneak attack damage to the damage roll. If your single spell leads to multiple separate damage rolls, apply your sneak attack damage only once per target."]
    }, {
        "name": "Poison Weapon",
        "level": "4",
        "traits": ["Rogue", " Manipulate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=563",
        "prereq": "",
        "benefits": "You apply poison to a weapon.",
        "text": ["You apply a poison to the required weapon. If your next attack with that weapon before the end of your next turn hits and deals damage, it applies the effects of the poison, provided that poison can be delivered by contact or injury. If you critically fail the attack roll, the poison is wasted as normal. ", " During your daily preparations, you can prepare a number of simple injury poisons equal to your rogue level. These poisons deal 1d4 poison damage. Only you can apply these poisons properly, and they expire the next time you prepare."]
    }, {
        "name": "Reactive Pursuit",
        "level": "4",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=564",
        "prereq": "",
        "benefits": "You keep pace with a retreating foe.",
        "text": ["You keep pace with a retreating foe. You Stride, but you must end your movement adjacent to the triggering enemy. Your move does not trigger reactions from the triggering enemy. You can use Reactive Pursuit to Burrow, Climb, Fly, or Swim instead of Stride if you have the corresponding movement type."]
    }, {
        "name": "Sabotage",
        "level": "4",
        "traits": ["Rogue", " Incapacitation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=565",
        "prereq": "",
        "benefits": "You subtly damage others\u2019 equipment.",
        "text": ["You subtly damage others\u2019 equipment. Choose one item that a creature within your reach wields or carries. The item must have moving parts that you could possibly sabotage (a shortbow could be sabotaged, but a longsword could not). Attempt a Thievery check against the Reflex DC of the creature. Damage dealt by Sabotage can\u2019t take the item below its Break Threshold. ", " You deal damage equal to four times your Thievery proficiency bonus. ", " You deal damage equal to double your Thievery proficiency bonus. ", " Temporarily immune to your Sabotage for 1 day."]
    }, {
        "name": "Scout's Warning",
        "level": "4",
        "traits": ["Rogue", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=505",
        "prereq": "",
        "benefits": "You visually or audibly warn your allies of danger.",
        "text": ["You visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls. Depending on whether you use gestures or call out, this action gains either the visual or auditory trait, respectively."]
    }, {
        "name": "Gang Up",
        "level": "6",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=567",
        "prereq": "",
        "benefits": "You and your allies harry an opponent in concert. ",
        "text": ["You and your allies harry an opponent in concert. Any enemy is flat-footed against your melee attacks due to flanking as long as the enemy is within both your reach and your ally\u2019s. Your allies must still flank an enemy for it to be flat-footed to them."]
    }, {
        "name": "Light Step",
        "level": "6",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=568",
        "prereq": "",
        "benefits": "You aren\u2019t bothered by tricky footing. ",
        "text": ["You aren\u2019t bothered by tricky footing. When you Stride or Step, you can ignore difficult terrain."]
    }, {
        "name": "Skirmish Strike",
        "level": "6",
        "traits": ["Rogue", " Flourish", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=510",
        "prereq": "",
        "benefits": "Your feet and weapon move in tandem.",
        "text": ["Your feet and weapon move in tandem. Either Step and then Strike, or Strike and then Step."]
    }, {
        "name": "Twist the Knife",
        "level": "6",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=570",
        "prereq": "",
        "benefits": "After stabbing your opponent in a weak spot, you tear the wound open.",
        "text": ["After stabbing your opponent in a weak spot, you tear the wound open. You deal persistent bleed damage to the target equal to your number of sneak attack damage dice."]
    }, {
        "name": "Blind-Fight",
        "level": "8",
        "traits": ["Rogue", " Fighter", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=388",
        "prereq": "master in Perception",
        "benefits": "Your battle instincts make you more aware of concealed and invisible opponents.",
        "text": ["Your battle instincts make you more aware of concealed and invisible opponents. You don\u2019t need to succeed at a flat check to target concealed creatures. You\u2019re not flat-footed to creatures that are hidden from you (unless you\u2019re flat-footed to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.", " While you\u2019re adjacent to an undetected creature of your level or lower, it is instead only hidden from you."]
    }, {
        "name": "Delay Trap",
        "level": "8",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=572",
        "prereq": "",
        "benefits": "You can jam the workings of a trap to delay its effects.",
        "text": ["You can jam the workings of a trap to delay its effects. Attempt a Thievery check to Disable a Device on the trap; the DC to do so is increased by 5, and the effects are as follows. ", " You prevent the trap from being triggered, or you delay the activation until the start or end of your next turn (your choice). ", " You prevent the trap from being triggered, or you delay the activation until the end of your next turn (whichever is worse for you; GM\u2019s choice). ", " No effect.", " You\u2019re flat-footed until the start of your next turn."]
    }, {
        "name": "Improved Poison Weapon",
        "level": "8",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=573",
        "prereq": "Poison Weapon",
        "benefits": "You deliver poisons in ways that maximize their harmful effects.",
        "text": ["You deliver poisons in ways that maximize their harmful effects. When you apply a simple poison with Poison Weapon, the poison deals 2d4 poison damage instead of 1d4 poison damage. You don\u2019t waste a poison you apply with Poison Weapon on a critically failed attack roll."]
    }, {
        "name": "Nimble Roll",
        "level": "8",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=574",
        "prereq": "Nimble Dodge",
        "benefits": "You throw yourself into a roll to escape imminent danger.",
        "text": ["You throw yourself into a roll to escape imminent danger. You can use Nimble Dodge before attempting a Reflex save in addition to its original trigger. If you do, the circumstance bonus applies to your Reflex save against the triggering effect.", "When you use Nimble Dodge and the triggering attack fails or critically fails, or when you succeed or critically succeed at the saving throw, you can also Stride up to 10 feet as part of the reaction. If you do, the reaction gains the move trait. You can use Nimble Roll while Flying or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Opportune Backstab",
        "level": "8",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=575",
        "prereq": "",
        "benefits": "When your enemy is hit by your ally, you capitalize upon the distraction.",
        "text": ["When your enemy is hit by your ally, you capitalize upon the distraction. Make a Strike against the triggering creature."]
    }, {
        "name": "Sidestep",
        "level": "8",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=576",
        "prereq": "",
        "benefits": "You deftly step out of the way of an attack, letting the blow continue to the creature next to you.",
        "text": ["You deftly step out of the way of an attack, letting the blow continue to the creature next to you. You redirect the attack to a creature of your choice that is adjacent to you and within the reach of the triggering attack. The attacker rerolls the Strike\u2019s attack roll against the new target."]
    }, {
        "name": "Slystriker",
        "level": "8",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=577",
        "prereq": "sneak attack",
        "benefits": "Your attacks deal more damage, even against creatures that aren\u2019t flat-footed. ",
        "text": ["Your attacks deal more damage, even against creatures that aren\u2019t flat-footed. When you succeed or critically succeed at a Strike against a creature that isn\u2019t flat-footed, you also deal 1d6 precision damage. This applies only if you\u2019re using a weapon or unarmed attack you could deal sneak attack damage with. At 14th level, if you would normally deal 3d6 or more sneak attack damage to flat-footed creatures, you deal 2d6 precision damage to creatures that aren\u2019t flat-footed."]
    }, {
        "name": "Precise Debilitation",
        "level": "10",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=578",
        "prereq": "thief racket, Debilitating Strike",
        "benefits": "You carefully aim and gracefully deliver your debilitations.",
        "text": ["You carefully aim and gracefully deliver your debilitations. Add the following debilitations to the list you can choose from when you use Debilitating Strike. "]
    }, {
        "name": "Sneak Savant",
        "level": "10",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=579",
        "prereq": "master in Stealth",
        "benefits": "It is almost impossible to spot you without taking effort to look.",
        "text": ["It is almost impossible to spot you without taking effort to look. When you roll a failure on a Sneak action, you get a success instead. You can still critically fail."]
    }, {
        "name": "Tactical Debilitations",
        "level": "10",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=580",
        "prereq": "scoundrel racket, Debilitating Strike",
        "benefits": "You learn new debilitations that grant you tactical advantages against your foes.",
        "text": ["You learn new debilitations that grant you tactical advantages against your foes. Add the following debilitations to the list you can choose from when you use Debilitating Strike. "]
    }, {
        "name": "Vicious Debilitations",
        "level": "10",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=581",
        "prereq": "ruffian an racket, Debilitating Strike",
        "benefits": "The debilitations you dish out seriously impair your foes.",
        "text": ["The debilitations you dish out seriously impair your foes. Add the following debilitations to the list you can choose from when you use Debilitating Strike. "]
    }, {
        "name": "Critical Debilitations",
        "level": "12",
        "traits": ["Rogue", " Incapacitation"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=582",
        "prereq": "Debilitating Strike",
        "benefits": "Your debilitations are especially ef ective on your most powerful attacks.",
        "text": ["Your debilitations are especially effective on your most powerful attacks. Whenever you critically succeed at an attack roll against an enemy and use Debilitating Strike, add the following debilitation to the list you can choose from. ", " ", " The target is unaffected. ", " The target is slowed 1 until the end of your next turn. ", " The target is slowed 2 until the end of your next turn. ", " The target is paralyzed until the end of your next turn."]
    }, {
        "name": "Fantastic Leap",
        "level": "12",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=583",
        "prereq": "",
        "benefits": "You launch yourself through the air at a foe.",
        "text": ["You launch yourself through the air at a foe. Attempt a High Jump or Long Jump. If you attempt a High Jump, determine the distance you can travel using the scale of a Long Jump. At the end of your jump, you can make a melee Strike.", " After your Strike, you fall to the ground if you\u2019re in the air. If the distance of your fall is no more than the height of your jump, you take no damage and land upright."]
    }, {
        "name": "Felling Shot",
        "level": "12",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=584",
        "prereq": "",
        "benefits": "Your ranged attacks can shoot an unprepared foe right out of the air.",
        "text": ["Your ranged attacks can shoot an unprepared foe right out of the air. Make a Strike with a ranged weapon or a thrown weapon against a flat-footed creature. If the Strike is a success and deals damage, the target must attempt a Reflex save against your class DC with the following effects. ", " The target is unaffected.", " The target falls up to 120 feet. If it hits the ground, it takes no damage from the fall.", " As failure, and the target can\u2019t fiy, jump, levitate, or otherwise leave the ground until the end of your next turn."]
    }, {
        "name": "Reactive Interference",
        "level": "12",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=585",
        "prereq": "",
        "benefits": "You reflexively foil an enemy\u2019s response. ",
        "text": ["Grabbing a sleeve, swiping with your weapon, or creating another obstruction, you reflexively foil an enemy\u2019s response. If the triggering creature\u2019s level is equal to or lower than yours, you disrupt the triggering reaction. If the triggering creature\u2019s level is higher than yours, you must make an attack roll against its AC. On a success, you disrupt the reaction."]
    }, {
        "name": "Spring from the Shadows",
        "level": "12",
        "traits": ["Rogue", " Flourish"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=586",
        "prereq": "",
        "benefits": "Leaping out from hiding, you assail your target when they least expect it. ",
        "text": ["Leaping out from hiding, you assail your target when they least expect it. You Stride up to your Speed, but you must end your movement next to an enemy you\u2019re hidden from or undetected by. You then Strike that enemy; you remain hidden from or undetected by that creature until after you Strike. You can use Spring from the Shadows while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type."]
    }, {
        "name": "Defensive Roll",
        "level": "14",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=587",
        "prereq": "",
        "benefits": "Dropping into a roll to disperse the force of the blow, you can partially evade a lethal attack and stay conscious.",
        "text": ["Dropping into a roll to disperse the force of the blow, you can partially evade a lethal attack and stay conscious. You take half damage from the triggering attack."]
    }, {
        "name": "Instant Opening",
        "level": "14",
        "traits": ["Rogue", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=588",
        "prereq": "",
        "benefits": "You distract your opponent with a few choice words or a rude gesture.",
        "text": ["You distract your opponent with a few choice words or a rude gesture. Choose a target within 30 feet. It\u2019s flat-footed against your attacks until the end of your next turn. Depending on the way you describe your distraction, this action gains either the auditory or visual trait."]
    }, {
        "name": "Leave an Opening",
        "level": "14",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=589",
        "prereq": "",
        "benefits": "When you hit hard enough, you leave an opening so your ally can jump in on the action. ",
        "text": ["When you hit hard enough, you leave an opening so your ally can jump in on the action. Whenever you critically hit a flat-footed opponent with a melee attack and deal damage, the target triggers an Attack of Opportunity reaction from one ally of your choice who has that reaction, as if the enemy had used a manipulate action."]
    }, {
        "name": "Sense the Unseen",
        "level": "14",
        "traits": ["Rogue", " Ranger"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=530",
        "prereq": "",
        "benefits": "When you look for foes, you can catch even the slightest cues.",
        "text": ["When you look for foes, you can catch even the slightest cues, such as their minute movements or the shifting of air currents on your skin. Even though you failed at the triggering check, you automatically sense any undetected creatures in the area where you\u2019re Seeking, making them merely hidden to you."]
    }, {
        "name": "Blank Slate",
        "level": "16",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=591",
        "prereq": "legendary in Deception",
        "benefits": "Your deceptions confound even the most powerful mortal divinations. ",
        "text": ["Your deceptions confound even the most powerful mortal divinations. Detection, revelation, and scrying effects pass right over you, your possessions, and your auras, detecting nothing unless the detecting effect has a counteract level of 20 or higher. For example, ", " would still detect other magic in the area but not any magic on you, ", " wouldn\u2019t reveal you, ", " or ", " wouldn\u2019t find you, and so on."]
    }, {
        "name": "Cloud Step",
        "level": "16",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=592",
        "prereq": "legendary in Acrobatics",
        "benefits": "Using fantastic acrobatic skill, you can walk for brief stretches across insubstantial surfaces.",
        "text": ["Using fantastic acrobatic skill, you can walk for brief stretches across insubstantial surfaces. When you Stride, you can move across water, air, and solid surfaces that can hold only limited weight as if they were normal ground. If you Stride over a trap with a weight-sensitive pressure plate, you don\u2019t trigger it. At the end of your turn, you sink, fall, break fragile surfaces, or trigger traps as normal for your current location."]
    }, {
        "name": "Cognitive Loophole",
        "level": "16",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=593",
        "prereq": "",
        "benefits": "You can find a loophole in a mental effect to temporarily overcome it.",
        "text": ["You can find a loophole in a mental effect to temporarily overcome it. Until the end of your next turn, you ignore a single mental effect that meets the requirement. You can suppress a particular effect using Cognitive Loophole only once. ", " You can use this reaction even if the mental effect is preventing you from using reactions."]
    }, {
        "name": "Dispelling Slice",
        "level": "16",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=594",
        "prereq": "",
        "benefits": "Your sneak attack slices through the threads binding magic to a target.",
        "text": ["Your sneak attack slices through the threads binding magic to a target. Make a Strike against a flat-footed creature (your choice). If your Strike deals sneak attack damage, you attempt to counteract a single spell active on the target. Your counteract level is equal to your rogue level, and your counteract check modifier is equal to your class DC \u2013 10."]
    }, {
        "name": "Perfect Distraction",
        "level": "16",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=595",
        "prereq": "legendary in Deception",
        "benefits": "You use clever tactics to mislead your foes as you sneak away. You Sneak while leaving a decoy behind.",
        "text": ["You use clever tactics to mislead your foes as you sneak away. You Sneak while leaving a decoy behind. The decoy acts as the spell ", ", though you aren\u2019t invisible, just undetected. You can continue to concentrate to move your decoy, as with the spell, whether or not you remain hidden throughout the duration. Once you use Perfect Distraction, you need to spend 10 minutes to set up another decoy before you can use it again."]
    }, {
        "name": "Implausible Infiltration",
        "level": "18",
        "traits": ["Rogue", " Magical", " Move"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=596",
        "prereq": "legendary in Acrobatics, Quick Squeeze",
        "benefits": "You find tiny holes or imperfections that no one else could see and try to somehow fit yourself through them.",
        "text": ["You find tiny holes or imperfections that no one else could see and try to somehow fit yourself through them, possibly moving directly through the wall or floor from one side to the other. Your movement attempt fails if the wall or floor is made of something other than wood, plaster, or stone; is thicker than 10 feet; or contains even a thin layer of metal. If you have a climb Speed, you can use this ability to attempt to move through a ceiling."]
    }, {
        "name": "Powerful Sneak",
        "level": "18",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=597",
        "prereq": "",
        "benefits": "You have learned to exploit your enemies\u2019 lowered defenses.",
        "text": ["You have learned to exploit your enemies\u2019 lowered defenses. When you succeed or critically succeed at a Strike using your Strength modifier on the attack roll and you would deal sneak attack damage, you can change the additional damage from sneak attack into ordinary damage of the same type as your Strike, rather than precision damage."]
    }, {
        "name": "Trickster's Ace",
        "level": "18",
        "traits": ["Rogue", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=598",
        "prereq": "",
        "benefits": "You have a contingency in your back pocket for desperate situations.",
        "text": ["Whether from jury-rigged magic items, stolen magical essence, or other means, you have a contingency in your back pocket for desperate situations. When the trigger occurs, you cause the spell to come into effect. The spell targets only you, no matter how many creatures it would affect normally. If you define particularly complicated conditions, as determined by the GM, the trigger might fail. Once the contingency is triggered, the spell is expended until your next daily preparations."]
    }, {
        "name": "Hidden Paragon",
        "level": "20",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=599",
        "prereq": "legendary in Stealth",
        "benefits": "When you put your mind to slipping out of sight, you disappear completely. ",
        "text": ["When you put your mind to slipping out of sight, you disappear completely. You become invisible for 1 minute, even if you use a hostile action. Not even ", ", ", ", or similar effects can reveal you, though creatures can still use the Seek action to locate you as normal."]
    }, {
        "name": "Impossible Striker",
        "level": "20",
        "traits": ["Rogue"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=600",
        "prereq": "Sly Striker",
        "benefits": "Your attacks are swift and deadly beyond explanation.",
        "text": ["Your attacks are swift and deadly beyond explanation. Nothing can prevent you from making a sneak attack, even if your opponent can see every blow coming. Instead of dealing the damage from Sly Striker, you can deal your full sneak attack damage to a target even if the target isn\u2019t flat-footed."]
    }, {
        "name": "Reactive Distraction",
        "level": "20",
        "traits": ["Rogue", " Concentrate", " Manipulate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=601",
        "prereq": "legendary in Deception, Perfect Distraction",
        "benefits": "You reactively switch with your decoy to foil your foe.",
        "text": ["You reactively switch with your decoy to foil your foe. You use Perfection Distraction, even if you were observed, as long as you end the movement of your Sneak while concealed or in a location with cover or greater cover. Your decoy is targeted by the attack or effect instead of you. In the case of an area effect, if your Sneak doesn\u2019t move you out of the area, both you and the decoy are targeted by the effect."]
    }, {
        "name": "Counterspell (Spontaneous)",
        "level": "1",
        "traits": ["Sorcerer", " Abjuration"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=602",
        "prereq": "",
        "benefits": "When a foe casts a spell, you can try to use your own magic to disrupt it.",
        "text": ["When a foe Casts a Spell you know and you can see its manifestations, you can use your own magic to disrupt it. You expend one of your spell slots to counter the triggering creature\u2019s casting of a spell that you have in your repertoire. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell (page 458). ", " This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, natural, or occult)."]
    }, {
        "name": "Dangerous Sorcery",
        "level": "1",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=603",
        "prereq": "",
        "benefits": "Your legacy grants you great destructive power",
        "text": ["Your legacy grants you great destructive power. When you Cast a Spell from your spell slots, if the spell deals damage and doesn\u2019t have a duration, you gain a status bonus to that spell\u2019s damage equal to the spell\u2019s level."]
    }, {
        "name": "Familiar",
        "level": "1",
        "traits": ["Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=604",
        "prereq": "",
        "benefits": "An animal serves you and assists your spellcasting.",
        "text": ["You make a pact with creature that serves you and assists your spellcasting. You gain a familiar (page 217)."]
    }, {
        "name": "Reach Spell",
        "level": "1",
        "traits": ["Sorcerer", " Bard", " Cleric", " Concentrate", " Druid", " Metamagic", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
        "prereq": "",
        "benefits": "You can extend your spells\u2019 range",
        "text": ["You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."]
    }, {
        "name": "Widen Spell",
        "level": "1",
        "traits": ["Sorcerer", " Druid", " Manipulate", " Metamagic", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=315",
        "prereq": "",
        "benefits": "You manipulate the energy of your spell, causing it to spread out and affect a wider area.",
        "text": ["You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."]
    }, {
        "name": "Cantrip Expansion",
        "level": "2",
        "traits": ["Sorcerer", " Bard", " Cleric", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
        "prereq": "",
        "benefits": "Study broadens your range of simple spells",
        "text": ["A greater understanding of your magic broadens your range of simple spells.", ": You can prepare two additional cantrips each day.", ": Add two additional cantrips from your spell list to your repertoire. "]
    }, {
        "name": "Enhanced Familiar",
        "level": "2",
        "traits": ["Sorcerer", " Druid", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=318",
        "prereq": "a familiar",
        "benefits": "You infuse your familiar with additional primal energy, increasing its abilities.",
        "text": ["You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.", " (Wizard) If your arcane thesis is improved familiar attunement, your familiar\u2019s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four."]
    }, {
        "name": "Arcane Evolution",
        "level": "4",
        "traits": ["Sorcerer", " Arcane"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=609",
        "prereq": "bloodline that grants arcane spells",
        "benefits": "Your arcane legacy grants you an exceptional aptitude for intellectual and academic pursuits.",
        "text": ["Your arcane legacy grants you an exceptional aptitude for intellectual and academic pursuits. You become trained in one skill of your choice. Additionally, you keep a book of arcane spells similar to a wizard\u2019s spellbook. You add all the spells in your spell repertoire to this book for free, and you can add additional arcane spells to the book by paying the appropriate cost and using your Arcana skill, similarly to how a wizard can Learn Spells to add those spells to his spellbook.", " During your daily preparations, choose any one spell from your book of arcane spells. If it isn\u2019t in your spell repertoire, add it to your spell repertoire until the next time you prepare. If it\u2019s already in your spell repertoire, add it as an additional signature spell for that day."]
    }, {
        "name": "Bespell Weapon",
        "level": "4",
        "traits": ["Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=610",
        "prereq": "",
        "benefits": "You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding.",
        "text": ["You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding. Until the end of your turn, the weapon deals an extra 1d6 damage of a type depending on the school of the spell you just cast. "]
    }, {
        "name": "Divine Evolution",
        "level": "4",
        "traits": ["Sorcerer", " Divine"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=611",
        "prereq": "bloodline that grants divine spells",
        "benefits": "The divine might provided by your bloodline f ows through you. ",
        "text": ["The divine might provided by your bloodline fiows through you. You gain an additional spell slot of your highest level, which you can use only to cast your choice of heal or harm. You can cast either of these spells using that spell slot, even if they aren\u2019t in your spell repertoire."]
    }, {
        "name": "Occult Evolution",
        "level": "4",
        "traits": ["Sorcerer", " Occult"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=612",
        "prereq": "bloodline that grants occult spells",
        "benefits": "Glimpses of the obscure secrets of the universe loan you power.",
        "text": ["Glimpses of the obscure secrets of the universe loan you power. You become trained in one skill of your choice. Additionally, once per day, you can spend 1 minute to choose one mental occult spell you don\u2019t know and add it to your spell repertoire. You lose this temporary spell the next time you make your daily preparations (though you can use this ability to add it again later)."]
    }, {
        "name": "Primal Evolution",
        "level": "4",
        "traits": ["Sorcerer", " Primal"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=613",
        "prereq": "bloodline that grants primal spells",
        "benefits": "You can call upon the creatures of the wild for aid.",
        "text": ["You can call upon the creatures of the wild for aid. You gain an additional spell slot of your highest level, which you can use only to cast ", " or ", ". You can cast either of these spells using that spell slot, even if it they aren\u2019t in your spell repertoire."]
    }, {
        "name": "Advanced Bloodline",
        "level": "6",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=614",
        "prereq": "bloodline spell",
        "benefits": "You have studied your bloodline to learn the secrets of its magic.",
        "text": ["You have studied your bloodline to learn the secrets of its magic. You gain the advanced bloodline spell associated with your bloodline. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Steady Spellcasting",
        "level": "6",
        "traits": ["Sorcerer", " Bard", " Cleric", " Druid", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
        "prereq": "",
        "benefits": "You don\u2019t lose spells easily",
        "text": ["Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 fiat check. If you succeed, your action isn\u2019t disrupted."]
    }, {
        "name": "Bloodline Resistance",
        "level": "8",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=616",
        "prereq": "",
        "benefits": "Your magical blood makes you more resistant to magic.",
        "text": ["Your magical blood makes you more resistant to magic. You gain a +1 status bonus to saving throws against spells and magical effects."]
    }, {
        "name": "Crossblooded Evolution",
        "level": "8",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=617",
        "prereq": "",
        "benefits": "Odd interactions in your bloodline provide you with unexpected spells.",
        "text": ["Odd interactions in your bloodline provide you with unexpected spells. You can have one spell in your spell repertoire from a tradition other than the one that matches your bloodline. You cast that spell as a spell from your bloodline\u2019s tradition. You can swap which spell you add and from which tradition as you could any other sorcerer spell, but you can\u2019t have more than one spell from another tradition in your spell repertoire at the same time using this feat."]
    }, {
        "name": "Greater Bloodline",
        "level": "10",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=618",
        "prereq": "bloodline spell",
        "benefits": "Further communion with the legacy of your bloodline has uncovered greater secrets.",
        "text": ["Further communion with the legacy of your bloodline has uncovered greater secrets. You gain the greater bloodline spell associated with your bloodline. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Overwhelming Energy",
        "level": "10",
        "traits": ["Sorcerer", " Druid", " Manipulate", " Metamagic", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=337",
        "prereq": "",
        "benefits": "You alter your spells to overcome resistances.",
        "text": ["You alter your spells to overcome resistances. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\u2019s resistance to acid, cold, electricity, fire, or sonic damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell, such as the wall created by ", ". A creature\u2019s immunities are unaffected."]
    }, {
        "name": "Quickened Casting",
        "level": "10",
        "traits": ["Sorcerer", " Bard", " Concentrate", " Metamagic", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=199",
        "prereq": "",
        "benefits": "You are able to quickly cast a spell",
        "text": ["If your next action is to cast a cantrip or a spell that is at least 2 levels lower than the highest level spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action). ", " This can only be used on a cantrip or spell from the class matching the one you gained this feat from."]
    }, {
        "name": "Bloodline Focus",
        "level": "12",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=621",
        "prereq": "bloodline spell",
        "benefits": "Your bloodline cause you to recover focus faster.",
        "text": ["Your focus recovers faster. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Magic Sense",
        "level": "12",
        "traits": ["Sorcerer", " Detection", " Divination", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=622",
        "prereq": "",
        "benefits": "You have a literal sixth sense for magic",
        "text": ["You have a literal sixth sense for ambient magic in your vicinity. You can sense the presence of magic auras as though you were always using a 1st-level ", " spell. This detects magic in your field of vision only. When you Seek, you gain the benefits of a 3rd-level ", " spell on things you see (in addition to the normal benefits of Seeking). You can turn this sense off and on with a free action at the start or the end of your turn.", " (Wizard) This feat has the ", " trait."]
    }, {
        "name": "Interweave Dispel",
        "level": "14",
        "traits": ["Sorcerer", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=623",
        "prereq": "dispel magic in your spell repertoire",
        "benefits": "You weave dispelling energy into a spell, sending both effects at a foe.",
        "text": ["You weave dispelling energy into a spell, sending both effects at a foe. If your next action is to cast a single-target spell against a creature, and you either hit the foe with the spell attack roll or the foe fails its saving throw, you can cast ", " on the foe as a free action, expending a spell slot as normal and targeting one spell effect affecting the foe."]
    }, {
        "name": "Reflect Spell",
        "level": "14",
        "traits": ["Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=624",
        "prereq": "Counterspell",
        "benefits": "You cause a spell to fire back at its caster.",
        "text": ["When you successfully use Counterspell to counteract a spell that affects targeted creatures or an area, you can turn that spell\u2019s effect back on its caster. When reflected, the spell affects only the original caster, even if it\u2019s an area spell or it would normally affect more than one creature. The original caster can attempt a save and use other defenses against the reflected spell as normal."]
    }, {
        "name": "Effortless Concentration",
        "level": "16",
        "traits": ["Sorcerer", " Bard", " Druid", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
        "prereq": "",
        "benefits": "You can maintain a spell with hardly a thought.",
        "text": ["You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "]
    }, {
        "name": "Greater Mental Evolution",
        "level": "16",
        "traits": ["Sorcerer", " Arcane"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=626",
        "prereq": "Arcane Evolution or Occult Evolution",
        "benefits": "Your bloodline\u2019s deep connection to mental essence greatly enhances your spell repertoire. ",
        "text": ["Your bloodline\u2019s deep connection to mental essence greatly enhances your spell repertoire. Add one spell to your spell repertoire for each spell level you can cast."]
    }, {
        "name": "Greater Vital Evolution",
        "level": "16",
        "traits": ["Sorcerer", " Divine"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=627",
        "prereq": "Divine Evolution or Primal Evolution",
        "benefits": "Vital power surges through you like a font of energy.",
        "text": ["Vital power surges through you like a font of energy. Twice per day, you can cast a spell after you\u2019ve run out of spell slots of the appropriate spell level; the two spells you cast with this feat must be of different spell levels."]
    }, {
        "name": "Bloodline Wellspring",
        "level": "18",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=628",
        "prereq": "Bloodline Focus",
        "benefits": "Your blood\u2019s power replenishes your focus.",
        "text": ["Your blood\u2019s power replenishes your focus. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Greater Crossblooded Evolution",
        "level": "18",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=629",
        "prereq": "Crossblooded Evolution",
        "benefits": "Your bloodline is extraordinarily complex. ",
        "text": ["Your bloodline is extraordinarily complex. You can have up to three spells from other traditions in your spell repertoire, rather than just one. These spells must each be of a different spell level, but they don\u2019t need to be from the same tradition."]
    }, {
        "name": "Bloodline Conduit",
        "level": "20",
        "traits": ["Sorcerer", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=630",
        "prereq": "",
        "benefits": "Your inborn magical nature lets you redirect ambient energies to fuel your spells.",
        "text": ["Your inborn magical nature lets you redirect ambient energies to fuel your spells. If your next action is to Cast a Spell of 5th level or lower that has no duration, you don\u2019t expend the spell\u2019s slot when you cast it."]
    }, {
        "name": "Bloodline Perfection",
        "level": "20",
        "traits": ["Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=631",
        "prereq": "bloodline paragon",
        "benefits": "You command the ultimate powers of your bloodline and tradition.",
        "text": ["You command the ultimate powers of your bloodline and tradition. You gain an additional 10th-level spell slot."]
    }, {
        "name": "Metamagic Mastery",
        "level": "20",
        "traits": ["Sorcerer", " Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=632",
        "prereq": "",
        "benefits": "Altering your spells doesn\u2019t take any longer than casting them normally. ",
        "text": ["Altering your spells doesn\u2019t take any longer than casting them normally. You can use metamagic single actions as free actions."]
    }, {
        "name": "Counterspell (Prepared)",
        "level": "1",
        "traits": ["Wizard", " Abjuration", " Arcane"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=633",
        "prereq": "",
        "benefits": "When a foe Casts a Spell and you can see its manifestations, you can use your own magic to disrupt it. ",
        "text": ["When a foe Casts a Spell and you can see its manifestations, you can use your own magic to disrupt it. You expend a prepared spell to counter the triggering creature\u2019s casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell (page 458)."]
    }, {
        "name": "Eschew Materials",
        "level": "1",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=634",
        "prereq": "",
        "benefits": "You can use clever workarounds to replicate the arcane essence of certain materials.",
        "text": ["You can use clever workarounds to replicate the arcane essence of certain materials. When Casting a Spell that requires material components, you can provide these material components without a spell component pouch by drawing intricate replacement sigils in the air. Unlike when providing somatic components, you still must have a hand completely free. This doesn\u2019t remove the need for any materials listed in the spell\u2019s cost entry."]
    }, {
        "name": "Familiar",
        "level": "1",
        "traits": ["Wizard", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=604",
        "prereq": "",
        "benefits": "An animal serves you and assists your spellcasting.",
        "text": ["You make a pact with creature that serves you and assists your spellcasting. You gain a familiar (page 217)."]
    }, {
        "name": "Hand of the Apprentice",
        "level": "1",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=636",
        "prereq": "universalist wizard",
        "benefits": "You can magically hurl your weapon at your foe.",
        "text": ["You can magically hurl your weapon at your foe. You gain the ", " universalist spell. Universalist spells are a type of focus spell, much like school spells. You start with a focus pool of 1 Focus Point. See Arcane Schools on page 207 for more information about focus spells."]
    }, {
        "name": "Reach Spell",
        "level": "1",
        "traits": ["Wizard", " Bard", " Cleric", " Concentrate", " Druid", " Metamagic", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=181",
        "prereq": "",
        "benefits": "You can extend your spells\u2019 range",
        "text": ["You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\u2019s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet."]
    }, {
        "name": "Widen Spell",
        "level": "1",
        "traits": ["Wizard", " Druid", " Manipulate", " Metamagic", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=315",
        "prereq": "",
        "benefits": "You manipulate the energy of your spell, causing it to spread out and affect a wider area.",
        "text": ["You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."]
    }, {
        "name": "Cantrip Expansion",
        "level": "2",
        "traits": ["Wizard", " Bard", " Cleric", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=183",
        "prereq": "",
        "benefits": "Study broadens your range of simple spells",
        "text": ["A greater understanding of your magic broadens your range of simple spells.", ": You can prepare two additional cantrips each day.", ": Add two additional cantrips from your spell list to your repertoire. "]
    }, {
        "name": "Conceal Spell",
        "level": "2",
        "traits": ["Wizard", " Concentrate", " Manipulate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=640",
        "prereq": "",
        "benefits": "Hiding your gestures and incantations within other speech and movement, you attempt to conceal the fact that you are casting a spell.",
        "text": ["Hiding your gestures and incantations within other speech and movement, you attempt to conceal the fact that you are Casting a Spell. If the next action you use is to Cast a Spell, attempt a Stealth check against one or more observers\u2019 Perception DCs; if the spell has verbal components, you must also attempt a Deception check against the observers\u2019 Perception DC. If you succeed at your check (or checks) against an observer\u2019s DC, that observer doesn\u2019t notice you\u2019re casting a spell, even though material, somatic, and verbal components are usually noticeable and spells normally have sensory manifestations that would make spellcasting obvious to those nearby.", " This ability hides only the spell\u2019s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air."]
    }, {
        "name": "Enhanced Familiar",
        "level": "2",
        "traits": ["Wizard", " Druid", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=318",
        "prereq": "a familiar",
        "benefits": "You infuse your familiar with additional primal energy, increasing its abilities.",
        "text": ["You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.", " (Wizard) If your arcane thesis is improved familiar attunement, your familiar\u2019s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four."]
    }, {
        "name": "Bespell Weapon",
        "level": "4",
        "traits": ["Wizard", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=610",
        "prereq": "",
        "benefits": "You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding.",
        "text": ["You siphon the residual energy from the last spell you cast into one weapon you\u2019re wielding. Until the end of your turn, the weapon deals an extra 1d6 damage of a type depending on the school of the spell you just cast. "]
    }, {
        "name": "Linked Focus",
        "level": "4",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=643",
        "prereq": "arcane bond, arcane school",
        "benefits": "You have linked your bonded item to the well of energy that powers your school spells. ",
        "text": ["You have linked your bonded item to the well of energy that powers your school spells. When you Drain your Bonded Item to cast a spell of your arcane school, you also regain 1 Focus Point."]
    }, {
        "name": "Silent Spell",
        "level": "4",
        "traits": ["Wizard", " Concentrate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=644",
        "prereq": "Conceal Spell",
        "benefits": "You\u2019ve learned how to cast many of your spells without speaking the words of power you would normally need to provide. ",
        "text": ["You\u2019ve learned how to cast many of your spells without speaking the words of power you would normally need to provide. If the next action you use is Casting a Spell that has a verbal component and at least one other component, you can remove the verbal component. This makes the spell quieter and allows you to cast it in areas where sound can\u2019t carry. However, the spell still has visual manifestations, so this doesn\u2019t make the spell any less obvious to someone who sees you casting it. When you use Silent Spell, you can choose to gain the benefits of Conceal Spell, and you don\u2019t need to attempt a Deception check because the spell has no verbal components."]
    }, {
        "name": "Spell Penetration",
        "level": "6",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=645",
        "prereq": "",
        "benefits": "You\u2019ve studied ways of overcoming the innate magical resistance that certain powerful creatures have.",
        "text": ["You\u2019ve studied ways of overcoming the innate magical resistance that dragons, otherworldly beings, and certain other powerful creatures have. Any creature that has a status bonus to saving throws against magic reduces that bonus by 1 against your spells."]
    }, {
        "name": "Steady Spellcasting",
        "level": "6",
        "traits": ["Wizard", " Bard", " Cleric", " Druid", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=194",
        "prereq": "",
        "benefits": "You don\u2019t lose spells easily",
        "text": ["Confident in your technique, you don\u2019t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 fiat check. If you succeed, your action isn\u2019t disrupted."]
    }, {
        "name": "Advanced School Spell",
        "level": "8",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=647",
        "prereq": "arcane school",
        "benefits": "You gain access to a powerful new school spell depending on your arcane school.",
        "text": ["You gain access to a powerful new school spell depending on your arcane school. If you\u2019re an abjurer, you gain ", "; if you\u2019re a conjurer, you gain ", "; if you\u2019re a diviner, you gain ", "; if you\u2019re an enchanter, you gain ", "; if you\u2019re an evoker, you gain ", "; if you\u2019re an illusionist, you gain ", "; if you\u2019re a necromancer, you gain ", "; and if you\u2019re a transmuter, you gain ", ". Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Bond Conservation",
        "level": "8",
        "traits": ["Wizard", " Manipulate", " Metamagic"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=648",
        "prereq": "arcane bond",
        "benefits": "By carefully manipulating the arcane energies stored in your bonded item as you drain it, you can conserve just enough power to cast another, slightly weaker spell.",
        "text": ["By carefully manipulating the arcane energies stored in your bonded item as you drain it, you can conserve just enough power to cast another, slightly weaker spell. If the next action you use is to Cast a Spell using the energy from Drain Bonded Item, you gain an extra use of Drain Bonded Item. You must use this extra use of Drain Bonded Item before the end of your next turn or you lose it, and you can use this additional use only to cast a spell 2 or more levels lower than the first spell cast with Drain Bonded Item."]
    }, {
        "name": "Universal Versatility",
        "level": "8",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=649",
        "prereq": "universalist wizard, Hand of the Apprentice",
        "benefits": "You can access the fundamental abilities of any school of magic.",
        "text": ["You can access the fundamental abilities of any school of magic. During your daily preparations, choose one of the eight school spells gained by 1st-level specialist wizards. You can use that school spell until your next daily preparations. When you Refocus, you can choose a different school spell from among those eight school spells, replacing the previous one. Increase the number of Focus Points in your focus pool by 1."]
    }, {
        "name": "Overwhelming Energy",
        "level": "10",
        "traits": ["Wizard", " Druid", " Manipulate", " Metamagic", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=337",
        "prereq": "",
        "benefits": "You alter your spells to overcome resistances.",
        "text": ["You alter your spells to overcome resistances. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\u2019s resistance to acid, cold, electricity, fire, or sonic damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell, such as the wall created by ", ". A creature\u2019s immunities are unaffected."]
    }, {
        "name": "Quickened Casting",
        "level": "10",
        "traits": ["Wizard", " Bard", " Concentrate", " Metamagic", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=199",
        "prereq": "",
        "benefits": "You are able to quickly cast a spell",
        "text": ["If your next action is to cast a cantrip or a spell that is at least 2 levels lower than the highest level spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action). ", " This can only be used on a cantrip or spell from the class matching the one you gained this feat from."]
    }, {
        "name": "Scroll Savant",
        "level": "10",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=652",
        "prereq": "expert in Crafting",
        "benefits": "During your daily preparations, you can create two temporary scrolls containing arcane spells from your spellbook. ",
        "text": ["During your daily preparations, you can create two temporary scrolls containing arcane spells from your spellbook. These scrolls follow the normal rules for scrolls (page 564), with some additional restrictions. Each scroll must be of a different spell level, and both spell levels must be 2 or more levels lower than your highest-level spell. Any scrolls you create this way become non-magical the next time you make your daily preparations. A temporary scroll has no value.", " If you have master proficiency in arcane spell DCs, you can create three temporary scrolls during your daily preparations, and if you have legendary proficiency, you can create four temporary scrolls."]
    }, {
        "name": "Clever Counterspell",
        "level": "12",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=653",
        "prereq": "Counterspell, Quick Recognize",
        "benefits": "You creatively apply your prepared spells to counterspell a much wider variety of your opponents\u2019 magic.",
        "text": ["You creatively apply your prepared spells to Counterspell a much wider variety of your opponents\u2019 magic. Instead of being able to counter a foe\u2019s spell with Counterspell only if you have that same spell prepared, you can use Counterspell as long as you have the spell the foe is casting in your spellbook. When you use Counterspell in this way, the prepared spell you expend must share a trait other than its tradition with the triggering spell. At the GM\u2019s discretion, you can instead use a spell that has an opposing trait or that otherwise logically would counter the triggering spell (such as using a cold or water spell to counter ", " or using ", " to counter a fear spell). Regardless of what spell you expend, you take a \u20132 penalty to your counteract check, though the GM can waive this penalty if the expended spell is especially appropriate."]
    }, {
        "name": "Magic Sense",
        "level": "12",
        "traits": ["Wizard", " Detection", " Divination", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=622",
        "prereq": "",
        "benefits": "You have a literal sixth sense for magic",
        "text": ["You have a literal sixth sense for ambient magic in your vicinity. You can sense the presence of magic auras as though you were always using a 1st-level ", " spell. This detects magic in your field of vision only. When you Seek, you gain the benefits of a 3rd-level ", " spell on things you see (in addition to the normal benefits of Seeking). You can turn this sense off and on with a free action at the start or the end of your turn.", " (Wizard) This feat has the ", " trait."]
    }, {
        "name": "Bonded Focus",
        "level": "14",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=655",
        "prereq": "arcane bond",
        "benefits": "Your connection to your bonded item increases your focus pool.",
        "text": ["Your connection to your bonded item increases your focus pool. If you have spent at least 2 Focus Points since the last time you Refocused and your bonded item is in your possession, you recover 2 Focus Points when you Refocus instead of 1."]
    }, {
        "name": "Reflect Spell",
        "level": "14",
        "traits": ["Wizard", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=624",
        "prereq": "Counterspell",
        "benefits": "You cause a spell to fire back at its caster.",
        "text": ["When you successfully use Counterspell to counteract a spell that affects targeted creatures or an area, you can turn that spell\u2019s effect back on its caster. When reflected, the spell affects only the original caster, even if it\u2019s an area spell or it would normally affect more than one creature. The original caster can attempt a save and use other defenses against the reflected spell as normal."]
    }, {
        "name": "Superior Bond",
        "level": "14",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=657",
        "prereq": "arcane bond",
        "benefits": "When you draw upon your bonded item, you can leave a bit of energy within it for later use. ",
        "text": ["When you draw upon your bonded item, you can leave a bit of energy within it for later use. You can use Drain Bonded Item one additional time per day, but only to cast a spell 2 or more levels lower than your highest-level spell."]
    }, {
        "name": "Effortless Concentration",
        "level": "16",
        "traits": ["Wizard", " Bard", " Druid", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=206",
        "prereq": "",
        "benefits": "You can maintain a spell with hardly a thought.",
        "text": ["You maintain a spell with hardly a thought. You immediately gain the effects of the Sustain a Spell action, allowing you to extend the duration of one of your active class spells. "]
    }, {
        "name": "Spell Tinker",
        "level": "16",
        "traits": ["Wizard", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=659",
        "prereq": "",
        "benefits": "You\u2019ve learned to alter choices you make when casting spells on yourself.",
        "text": ["You\u2019ve learned to alter choices you make when casting spells on yourself. After casting a spell on only yourself that offers several choices of effect (such as ", ", ", ", or a polymorph spell that offers several potential forms), you can alter the choice you made when Casting the Spell (for instance, choosing a different type of damage for ", "). However, your tinkering weakens the spell\u2019s integrity, reducing its remaining duration by half.", " You can\u2019t use this feat if the benefits of the spell have already been used up or if the effects of the first choice would persist in any way after switching (for instance, if one of the choices was to create a consumable item you already used, or to heal you), or if the feat would create an effect more powerful than that offered by the base spell. The GM is the final arbiter of what Spell Tinker can be applied to."]
    }, {
        "name": "Infinite Possibilities",
        "level": "18",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=660",
        "prereq": "",
        "benefits": "You\u2019ve found a way to prepare a spell slot that exists in your mind as many different possibilities at once. ",
        "text": ["You\u2019ve found a way to prepare a spell slot that exists in your mind as many different possibilities at once. Once during your daily preparations, you can use a spell slot to hold that infinite potential, rather than using it to prepare a spell. You can use this spell slot to cast any spell from your spellbook that\u2019s at least 2 levels lower than the slot you designate; the spell acts in all ways as a spell of 2 levels lower. You don\u2019t have any particular spell prepared in that slot until you cast it."]
    }, {
        "name": "Reprepare Spell",
        "level": "18",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=661",
        "prereq": "",
        "benefits": "You\u2019ve discovered how to reuse some of your spell slots over and over.",
        "text": ["You\u2019ve discovered how to reuse some of your spell slots over and over. You can spend 10 minutes to prepare a spell that you already cast today, regaining access to that spell slot. The spell must be of 4th level or lower and one that does not have a duration. You can reprepare a spell in this way even if you\u2019ve already reprepared that spell previously in the same day. If you have the spell substitution arcane thesis, you can instead prepare a different spell in an expended slot, as long as the new spell doesn\u2019t have a duration. Once you\u2019ve reprepared a spell in that slot even once, you can use your arcane thesis to substitute only spells without durations into that spell slot."]
    }, {
        "name": "Archwizard's Might",
        "level": "20",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=662",
        "prereq": "archwizard\u2019s spellcraft",
        "benefits": "You have mastered the greatest secrets of arcane magic. ",
        "text": ["You have mastered the greatest secrets of arcane magic. You gain an additional 10th-level spell slot."]
    }, {
        "name": "Metamagic Mastery",
        "level": "20",
        "traits": ["Wizard", " Sorcerer"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=632",
        "prereq": "",
        "benefits": "Altering your spells doesn\u2019t take any longer than casting them normally. ",
        "text": ["Altering your spells doesn\u2019t take any longer than casting them normally. You can use metamagic single actions as free actions."]
    }, {
        "name": "Spell Combination",
        "level": "20",
        "traits": ["Wizard"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=664",
        "prereq": "",
        "benefits": "You can merge spells, producing multiple ef ects with a single casting.",
        "text": ["You can merge spells, producing multiple effects with a single casting. One slot of each level of spell you can cast, except 2nd level and 1st level, becomes a spell combination slot (this doesn\u2019t apply to cantrips). When you prepare your spells, you can fill a combination slot with a combination of two spells. Each spell in the combination must be 2 or more spell levels below the slot\u2019s level, and both must target only one creature or object or have the option to target only one creature or object. Each spell in the combination must also have the same means of determining whether it has an effect\u2014both spells must require a ranged spell attack roll, require the same type of saving throw, or automatically affect the target.", " When you cast a combined spell, it affects only one target, even if the component spells normally affect more than one. If any spell in the combination has further restrictions (such as targeting only living creatures), you must abide by all restrictions. The combined spell uses the shorter of the component spells\u2019 ranges. Resolve a combined spell as if were a single spell, but apply the effects of both component spells. For example, if the spell\u2019s target succeeded at the save against a combined spell, it would apply the success effect of each spell, and if it critically failed, it would apply the critical failure effect of both spells."]
    },{
        "name": "Dwarven Lore",
        "level": "1",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=1",
        "prereq": "",
        "benefits": "You eagerly absorbed the old stories and traditions of your ancestors, your gods, and your people.",
        "text": ["You eagerly absorbed the old stories and traditions of your ancestors, your gods, and your people, studying in subjects and techniques passed down for generation upon generation. You gain the trained proficiency rank in Crafting and Religion. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Dwarven Lore."]
    }, {
        "name": "Dwarven Weapon Familiarity",
        "level": "1",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=2",
        "prereq": "",
        "benefits": "Your kin have instilled in you an affinity for hard-hitting weapons, and you prefer these to more elegant arms.",
        "text": ["Your kin have instilled in you an affinity for hard-hitting weapons, and you prefer these to more elegant arms. You are trained with the battle axe, pick, and warhammer.", " You also gain access to all uncommon dwarf weapons. For the purpose of determining your proficiency, martial dwarf weapons are simple weapons and advanced dwarf weapons are martial weapons."]
    }, {
        "name": "Rock Runner",
        "level": "1",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=3",
        "prereq": "",
        "benefits": "Your innate connection to stone makes you adept at moving across uneven surfaces.",
        "text": ["Your innate connection to stone makes you adept at moving across uneven surfaces. You can ignore difficult terrain caused by rubble and uneven ground made of stone and earth. In addition, when you use the Acrobatics skill to Balance on narrow surfaces or uneven ground made of stone or earth, you aren\u2019t flat-footed, and when you roll a success at one of these Acrobatics checks, you get a critical success instead."]
    }, {
        "name": "Stonecunning",
        "level": "1",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=4",
        "prereq": "",
        "benefits": "You have a knack for noticing even small inconsistencies and craftsmanship techniques in the stonework around you. ",
        "text": ["You have a knack for noticing even small inconsistencies and craftsmanship techniques in the stonework around you. You gain a +2 circumstance bonus to Perception checks to notice unusual stonework. This bonus applies to checks to discover mechanical traps made of stone or hidden within stone.", " If you aren\u2019t using the Seek action or searching, the GM automatically rolls a secret check for you to notice unusual stonework anyway. This check doesn\u2019t gain the circumstance bonus, and it takes a \u20132 circumstance penalty."]
    }, {
        "name": "Unburdened Iron",
        "level": "1",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=5",
        "prereq": "",
        "benefits": "You\u2019ve learned techniques first devised by your ancestors during their ancient wars, allowing you to comfortably wear massive suits of armor.",
        "text": ["You\u2019ve learned techniques first devised by your ancestors during their ancient wars, allowing you to comfortably wear massive suits of armor. Ignore the reduction to your Speed from any armor you wear.", " In addition, any time you\u2019re taking a penalty to your Speed from some other reason (such as from the encumbered condition or from a spell), deduct 5 feet from the penalty. For example, the encumbered condition normally gives a \u201310-foot penalty to Speed, but it gives you only a \u20135-foot penalty. If your Speed is taking multiple penalties, pick only one penalty to reduce."]
    }, {
        "name": "Vengeful Hatred",
        "level": "1",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=6",
        "prereq": "",
        "benefits": "You heart aches for vengeance against those who have wronged your people.",
        "text": ["You heart aches for vengeance against those who have wronged your people. Choose one of the following dwarven ancestral foes when you gain Vengeful Hatred: drow, duergar, giant, or orc. You gain a +1 circumstance bonus to damage with weapons and unarmed attacks against creatures with that trait. If your attack would deal more than one weapon die of damage (as is common at higher levels than 1st), the bonus is equal to the number of weapon dice or unarmed attack dice. In addition, if a creature critically succeeds at an attack against you and deals damage to you, you gain your bonus to damage against that creature for 1 minute regardless of whether it has the chosen trait.", " Your GM can add appropriate creature traits to the ancestral foes list if your character is from a community that commonly fights other types of enemies."]
    }, {
        "name": "Boulder Roll",
        "level": "5",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=7",
        "prereq": "Rock Runner",
        "benefits": "Your dwarven build allows you to push foes around, just like a mighty boulder.",
        "text": ["Your dwarven build allows you to push foes around, just like a mighty boulder tumbles through a subterranean cavern. Take a Step into the square of a foe that is your size or smaller, and the foe must move into the empty space directly behind it. The foe must move even if doing so places it in harm\u2019s way. The foe can attempt a Fortitude saving throw against your Athletics DC to block your Step. If the foe attempts this saving throw, unless it critically succeeds, it takes bludgeoning damage equal to your level plus your Strength modifier.", " If the foe can\u2019t move into an empty space (if it is surrounded by solid objects or other creatures, for example), your Boulder Roll has no effect."]
    }, {
        "name": "Dwarven Weapon Cunning",
        "level": "5",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=8",
        "prereq": "Dwarven Weapon Familiarity",
        "benefits": "You\u2019ve learned cunning techniques to get the best effects out of your dwarven weapons.",
        "text": ["You\u2019ve learned cunning techniques to get the best effects out of your dwarven weapons. Whenever you critically hit using a battle axe, pick, warhammer, or a dwarf weapon, you apply the weapon\u2019s critical specialization effect."]
    }, {
        "name": "Mountain's Stoutness",
        "level": "9",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=9",
        "prereq": "",
        "benefits": "Your hardiness lets you withstand more punishment than most before going down.",
        "text": ["Your hardiness lets you withstand more punishment than most before going down. Increase your maximum Hit Points by your level. You also decrease the DC of recovery checks when you have the dying condition by 1.", " If you also have the ", " feat, the Hit Points gained from it and this feat are cumulative, and you decrease the DC of recovery checks by 4."]
    }, {
        "name": "Stonewalker",
        "level": "9",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=10",
        "prereq": "",
        "benefits": "You have a deep reverence for and connection to stone.",
        "text": ["You have a deep reverence for and connection to stone. You gain ", " as a 3rd-level divine innate spell that you can cast once per day.", " If you have the ", " dwarf ancestry feat, you can attempt to find unusual stonework and stonework traps that require legendary proficiency in Perception. If you have both Stonecunning and legendary proficiency in Perception, when you\u2019re not Seeking and the GM rolls a secret check for you to notice unusual stonework, you keep the bonus from Stonecunning and don\u2019t take the \u20132 circumstance penalty."]
    }, {
        "name": "Dwarven Weapon Expertise",
        "level": "13",
        "traits": ["Dwarf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=11",
        "prereq": "Dwarven Weapon Familiarity",
        "benefits": "Your dwarven affinity blends with your training, granting you great skill with dwarven weapons.",
        "text": ["Your dwarven affinity blends with your training, granting you great skill with dwarven weapons. Whenever you gain a class feature that grants you expert or greater proficiency in certain weapons, you also gain that proficiency for battle axes, picks, warhammers, and all dwarven weapons in which you are trained."]
    },{
        "name": "Ancestral Longivity",
        "level": "1",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=12",
        "prereq": "at least 100 years old",
        "benefits": "You have accumulated a vast array of lived knowledge over the years.",
        "text": ["You have accumulated a vast array of lived knowledge over the years. During your daily preparations, you can reflect upon your life experiences to gain the trained proficiency rank in one skill of your choice. This proficiency lasts until you prepare again. Since this proficiency is temporary, you can\u2019t use it as a prerequisite for a skill increase or a permanent character option like a feat."]
    }, {
        "name": "Elven Lore",
        "level": "1",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=13",
        "prereq": "",
        "benefits": "You\u2019ve studied in traditional elven arts, learning about arcane magic and the world around you.",
        "text": ["You\u2019ve studied in traditional elven arts, learning about arcane magic and the world around you. You gain the trained proficiency rank in Arcana and Nature. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Elven Lore."]
    }, {
        "name": "Elven Weapon Familiarity",
        "level": "1",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=14",
        "prereq": "",
        "benefits": "You favor bows and other elegant weapons.",
        "text": ["You favor bows and other elegant weapons. You are trained with longbows, composite longbows, longswords, rapiers, shortbows, and composite shortbows.", " In addition, you gain access to all uncommon elf weapons. For the purpose of determining your proficiency, martial elf weapons are simple weapons and advanced elf weapons are martial weapons."]
    }, {
        "name": "Forlorn",
        "level": "1",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=15",
        "prereq": "",
        "benefits": "Watching your friends age and die fills you with moroseness that protects you against harmful emotions.",
        "text": ["Watching your friends age and die fills you with moroseness that protects you against harmful emotions. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead."]
    }, {
        "name": "Nimble Elf",
        "level": "1",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=16",
        "prereq": "",
        "benefits": "Your muscles are tightly honed.",
        "text": ["Your muscles are tightly honed. Your Speed increases by 5 feet."]
    }, {
        "name": "Otherworldly Magic",
        "level": "1",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=17",
        "prereq": "",
        "benefits": "Your elven magic manifests as a simple arcane spell, even if you aren\u2019t formally trained in magic. ",
        "text": ["Your elven magic manifests as a simple arcane spell, even if you aren\u2019t formally trained in magic. Choose one cantrip from the ", " spell list. You can cast this cantrip as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up."]
    }, {
        "name": "Unwavering Mien",
        "level": "1",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=18",
        "prereq": "",
        "benefits": "Your mystic control and meditations allow you to resist external influences upon your consciousness.",
        "text": ["Your mystic control and meditations allow you to resist external influences upon your consciousness. Whenever you are affected by a mental effect that lasts at least 2 rounds, you can reduce the duration by 1 round.", " You still require natural sleep, but you treat your saving throws against effects that would cause you to fall asleep as one degree of success better. This protects only against sleep effects, not against other forms of falling unconscious."]
    }, {
        "name": "Ageless Patience",
        "level": "5",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=19",
        "prereq": "",
        "benefits": "You work at a pace born from longevity that enhances your thoroughness.",
        "text": ["You work at a pace born from longevity that enhances your thoroughness. You can voluntarily spend twice as much time as normal on a Perception check or skill check to gain a +2 circumstance bonus to that check. You also don\u2019t treat a natural 1 as worse than usual on these checks; you get a critical failure only if your result is 10 lower than the DC. For example, you could get these benefits if you spent 2 actions to Seek, which normally takes 1 action. You can get these benefits during exploration by taking twice as long exploring as normal, or in downtime by spending twice as much downtime.", " The GM might determine a situation doesn\u2019t grant you a benefit if a delay would be directly counterproductive to your success, such as a tense negotiation with an impatient creature."]
    }, {
        "name": "Elven Weapon Elegance",
        "level": "5",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=20",
        "prereq": "Elven Weapon Familiarity",
        "benefits": "You are attuned to the weapons of your elven ancestors and are particularly deadly when using them.",
        "text": ["You are attuned to the weapons of your elven ancestors and are particularly deadly when using them. Whenever you critically hit using an elf weapon or one of the weapons listed in ", ", you apply the weapon\u2019s critical specialization effect."]
    }, {
        "name": "Elf Step",
        "level": "9",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=21",
        "prereq": "",
        "benefits": "You move in a graceful dance, and even your steps are broad.",
        "text": ["You move in a graceful dance, and even your steps are broad. You Step 5 feet twice."]
    }, {
        "name": "Expert Longevity",
        "level": "9",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=22",
        "prereq": "Ancestral Longevity",
        "benefits": "You\u2019ve continued to refine the knowledge and skills you\u2019ve gained through your life.",
        "text": ["You\u2019ve continued to refine the knowledge and skills you\u2019ve gained through your life. When you choose a skill in which to become trained with ", ", you can also choose a skill in which you are already trained and become an expert in that skill. This lasts until your Ancestral Longevity expires.", " When the effects of Ancestral Longevity and Expert Longevity expire, you can retrain one of your skill increases. The skill increase you gain from this retraining must either make you trained in the skill you chose with Ancestral Longevity or make you an expert in the skill you chose with Expert Longevity."]
    }, {
        "name": "Elven Weapon Expertise",
        "level": "13",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=24",
        "prereq": "Elven Weapon Familiarity",
        "benefits": "Your elven affinity blends with your class training, granting you great skill with elven weapons.",
        "text": ["Your elven affinity blends with your class training, granting you great skill with elven weapons. Whenever you gain a class feature that grants you expert or greater proficiency in certain weapons, you also gain that proficiency in longbows, composite longbows, longswords, rapiers, shortbows, composite shortbows, and all elf weapons in which you are trained."]
    }, {
        "name": "Universal Longevity",
        "level": "13",
        "traits": ["Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=23",
        "prereq": "Expert Longevity",
        "benefits": "You\u2019ve perfected your ability to keep up with all the skills you\u2019ve learned over your long life",
        "text": ["You\u2019ve perfected your ability to keep up with all the skills you\u2019ve learned over your long life, so you\u2019re almost never truly untrained at a skill. You reflect on your life experiences, changing the skills you selected with Elven Longevity and ", "."]
    },{
        "name": "Animal Accomplice",
        "level": "1",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=25",
        "prereq": "",
        "benefits": "You build a rapport with an animal, which becomes magically bonded to you.",
        "text": ["You build a rapport with an animal, which becomes magically bonded to you. You gain a ", " using the rules on page 217. The type of animal is up to you, but most gnomes choose animals with a burrow Speed."]
    }, {
        "name": "Burrow Elocutionist",
        "level": "1",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=26",
        "prereq": "",
        "benefits": "You recognize the chittering of ground creatures as its own peculiar language.",
        "text": ["You recognize the chittering of ground creatures as its own peculiar language. You can ask questions of, receive answers from, and use the Diplomacy skill with animals that have a burrow Speed, such as badgers, ground squirrels, moles, and prairie dogs. The GM determines which animals count for this ability."]
    }, {
        "name": "Fey Fellowship",
        "level": "1",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=27",
        "prereq": "",
        "benefits": "Your enhanced fey connection affords you a warmer reception from creatures of the First World.",
        "text": ["Your enhanced fey connection affords you a warmer reception from creatures of the First World as well as tools to foil their tricks. You gain a +2 circumstance bonus to both Perception checks and saving throws against fey.", " In addition, whenever you meet a fey creature in a social situation, you can immediately attempt a Diplomacy check to Make an Impression on that creature rather than needing to converse for 1 minute. You take a \u20135 penalty to the check. If you fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result.", " If you have the ", " skill feat, you don\u2019t take the penalty on your immediate Diplomacy check if the target is a fey."]
    }, {
        "name": "First World Magic",
        "level": "1",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=28",
        "prereq": "",
        "benefits": "Your connection to the First World grants you a primal innate spell, much like those of the fey. ",
        "text": ["Your connection to the First World grants you a primal innate spell, much like those of the fey. Choose one cantrip from the ", " spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up."]
    }, {
        "name": "Gnome Obsession",
        "level": "1",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=29",
        "prereq": "",
        "benefits": "You might have a flighty nature, but when a topic captures your attention, you dive into it headfirst.",
        "text": ["You might have a flighty nature, but when a topic captures your attention, you dive into it headfirst. Pick a Lore skill. You gain the trained proficiency rank in that skill. At 2nd level, you gain expert proficiency in the chosen Lore as well as the Lore granted by your background, if any. At 7th level you gain master proficiency in these Lore skills, and at 15th level you gain legendary proficiency in them."]
    }, {
        "name": "Gnome Weapon Familiarity",
        "level": "1",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=30",
        "prereq": "",
        "benefits": "You favor unusual weapons tied to your people, such as blades with curved and peculiar shapes.",
        "text": ["You favor unusual weapons tied to your people, such as blades with curved and peculiar shapes. You are trained with the glaive and kukri.", " In addition, you gain access to all uncommon gnome weapons. For the purpose of determining your proficiency, martial gnome weapons are simple weapons and advanced gnome weapons are martial weapons."]
    }, {
        "name": "Illusion Sense",
        "level": "1",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=31",
        "prereq": "",
        "benefits": "Your ancestors spent their days cloaked and cradled in illusions, and as a result, sensing illusion magic is second nature to you.",
        "text": ["Your ancestors spent their days cloaked and cradled in illusions, and as a result, sensing illusion magic is second nature to you. You gain a +1 circumstance bonus to both Perception checks and Will saves against illusions. When you come within 10 feet of an illusion that can be disbelieved, the GM rolls a secret check for you to disbelieve it, even if you didn\u2019t spend an action to Interact with the illusion."]
    }, {
        "name": "Animal Elocutionist",
        "level": "5",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=32",
        "prereq": "Burrow Elocutionist",
        "benefits": "You hear animal sounds as conversations instead of unintelligent noise, and can respond in turn.",
        "text": ["You hear animal sounds as conversations instead of unintelligent noise, and can respond in turn. You can speak to all animals, not just animals with a burrow Speed. You gain a +1 circumstance bonus to Make an Impression on animals (which usually uses the Diplomacy skill)."]
    }, {
        "name": "Energized Font",
        "level": "5",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=33",
        "prereq": "focus pool, at least one innate spell from a gnome heritage or ancestry feat that shares a tradition with at least one of your focus spells",
        "benefits": "The magic within you provides increased energy you can use to focus.",
        "text": ["The magic within you provides increased energy you can use to focus. You regain 1 Focus Point, up to your usual maximum."]
    }, {
        "name": "Gnome Weapon Innovator",
        "level": "5",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=34",
        "prereq": "Gnome Weapon Familiarity",
        "benefits": "You produce outstanding results when wielding unusual weapons.",
        "text": ["You produce outstanding results when wielding unusual weapons. Whenever you critically hit using a glaive, kukri, or gnome weapon, you apply the weapon\u2019s critical specialization effect."]
    }, {
        "name": "First World Adept",
        "level": "9",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=35",
        "prereq": "at least one primal innate spell",
        "benefits": "Over time your fey magic has grown stronger.",
        "text": ["Over time your fey magic has grown stronger. You gain ", " and ", " as 2nd-level primal innate spells. You can cast each of these primal innate spells once per day."]
    }, {
        "name": "Vivacious Conduit",
        "level": "9",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=36",
        "prereq": "",
        "benefits": "Your connection to the First World has grown, and its positive energy flows into you rapidly.",
        "text": ["Your connection to the First World has grown, and its positive energy flows into you rapidly. If you rest for 10 minutes, you gain Hit Points equal to your Constitution modifier \u00d7 half your level. This is cumulative with any healing you receive from Treat Wounds."]
    }, {
        "name": "Gnome Weapon Expertise",
        "level": "13",
        "traits": ["Gnome"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=37",
        "prereq": "Gnome Weapon Familiarity",
        "benefits": "Your gnome affinity blends with your class training, granting you great skill with gnome weapons.",
        "text": ["Your gnome affinity blends with your class training, granting you great skill with gnome weapons. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in the glaive, kukri, and all gnome weapons in which you are trained."]
    },{
        "name": "Burn It!",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=38",
        "prereq": "",
        "benefits": "Fire fascinates you.",
        "text": ["Fire fascinates you. Your spells and alchemical items that deal fire damage gain a status bonus to damage equal to half the spell\u2019s level or one-quarter the item\u2019s level (minimum 1). You also gain a +1 status bonus to any persistent fire damage you deal."]
    }, {
        "name": "City Scavenger",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=39",
        "prereq": "",
        "benefits": "You know that the greatest treasures often look like refuse, and you scoff at those who throw away perfectly good scraps.",
        "text": ["You know that the greatest treasures often look like refuse, and you scoff at those who throw away perfectly good scraps. You gain a +1 circumstance bonus to checks to Subsist, and you can use Society or Survival when you Subsist in a settlement.", " When you Subsist in a city, you also gather valuable junk that silly longshanks threw away. You can Earn Income using Society or Survival in the same time as you Subsist, without spending any additional days of downtime. You also gain a +1 circumstance bonus to this check.", " If you have the irongut goblin heritage, increase the bonuses to +2."]
    }, {
        "name": "Goblin Lore",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=40",
        "prereq": "",
        "benefits": "You\u2019ve picked up skills and tales from your goblin community.",
        "text": ["You\u2019ve picked up skills and tales from your goblin community. You gain the trained proficiency rank in Nature and Stealth. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Goblin Lore."]
    }, {
        "name": "Goblin Scuttle",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=41",
        "prereq": "",
        "benefits": "You take advantage of your ally\u2019s movement to adjust your position.",
        "text": ["You take advantage of your ally\u2019s movement to adjust your position. You Step."]
    }, {
        "name": "Goblin Song",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=42",
        "prereq": "",
        "benefits": "You sing annoying goblin songs, distracting your foes with silly and repetitive lyrics.",
        "text": ["You sing annoying goblin songs, distracting your foes with silly and repetitive lyrics. Attempt a Performance check against the Will DC of a single enemy within 30 feet. This has all the usual traits and restrictions of a Performance check. You can affect up to two targets within range if you have expert proficiency in Performance, four if you have master proficiency, and eight if you have legendary proficiency.", " The target takes a \u20131 status penalty to Perception checks and Will saves for 1 minute.", " The target takes a \u20131 status penalty to Perception checks and Will saves for 1 round.", " The target is temporarily immune to attempts to use Goblin Song for 1 hour."]
    }, {
        "name": "Goblin Weapon Familiarity",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=43",
        "prereq": "",
        "benefits": "Others might look upon them with disdain, but you know that the weapons of your people are as effective as they are sharp.",
        "text": ["Others might look upon them with disdain, but you know that the weapons of your people are as effective as they are sharp. You are trained with the dogslicer and horsechopper.", " In addition, you gain access to all uncommon goblin weapons. For the purpose of determining your proficiency, martial goblin weapons are simple weapons and advanced goblin weapons are martial weapons."]
    }, {
        "name": "Junk Tinker",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=44",
        "prereq": "",
        "benefits": "You can make useful tools out of even twisted or rusted scraps.",
        "text": ["You can make useful tools out of even twisted or rusted scraps. When using the Crafting skill to Craft, you can make level 0 items, including weapons but not armor, out of junk. This reduces the Price to one-quarter the usual amount but always results in a shoddy item. Shoddy items normally give a penalty, but you don\u2019t take this penalty when using shoddy items you made.", " You can also incorporate junk to save money while you Craft any item. This grants you a discount on the item as if you had spent 1 additional day working to reduce the cost, but the item is obviously made of junk. At the GM\u2019s discretion, this might affect the item\u2019s resale value depending on the buyer\u2019s tastes."]
    }, {
        "name": "Rough Rider",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=45",
        "prereq": "",
        "benefits": "You are especially good at riding traditional goblin mounts.",
        "text": ["You are especially good at riding traditional goblin mounts. You gain the ", " feat, even if you don\u2019t meet the prerequisites. You gain a +1 circumstance bonus to Nature checks to use Command an Animal on a ", " or ", " mount. You can always select a wolf as your animal companion, even if you would usually select an animal companion with the mount special ability, such as for a ", "."]
    }, {
        "name": "Very Sneaky",
        "level": "1",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=46",
        "prereq": "",
        "benefits": "Taller folk rarely pay attention to the shadows at their feet, and you take full advantage of this.",
        "text": ["Taller folk rarely pay attention to the shadows at their feet, and you take full advantage of this. You can move 5 feet farther when you take the Sneak action, up to your Speed. In addition, as long as you continue to use Sneak actions and succeed at your Stealth check, you don\u2019t become observed if you don\u2019t have cover or greater cover and aren\u2019t concealed at the end of the Sneak action, as long as you have cover or greater cover or are concealed at the end of your turn."]
    }, {
        "name": "Goblin Weapon Frenzy",
        "level": "5",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=47",
        "prereq": "Goblin Weapon Familiarity",
        "benefits": "You know how to wield your people\u2019s vicious weapons. ",
        "text": ["You know how to wield your people\u2019s vicious weapons. Whenever you score a critical hit using a goblin weapon, you apply the weapon\u2019s critical specialization effect."]
    }, {
        "name": "Cave Climber",
        "level": "9",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=48",
        "prereq": "",
        "benefits": "After years of crawling and climbing through caverns, you can climb easily anywhere you go.",
        "text": ["After years of crawling and climbing through caverns, you can climb easily anywhere you go. You gain a climb Speed of 10 feet."]
    }, {
        "name": "Skittering Scuttle",
        "level": "9",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=49",
        "prereq": "Goblin Scuttle",
        "benefits": "You can scuttle farther and faster when maneuvering alongside allies.",
        "text": ["You can scuttle farther and faster when maneuvering alongside allies. When you use ", ", you can Stride up to half your Speed instead of Stepping."]
    }, {
        "name": "Goblin Weapon Expertise",
        "level": "13",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=50",
        "prereq": "Goblin Weapon Familiarity",
        "benefits": "Your goblin affinity blends with your class training, granting you great skill with goblin weapons.",
        "text": ["Your goblin affinity blends with your class training, granting you great skill with goblin weapons. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in the dogslicer, horsechopper, and all goblin weapons in which you are trained."]
    }, {
        "name": "Very, Very Sneaky",
        "level": "13",
        "traits": ["Goblin"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=51",
        "prereq": "Very Sneaky",
        "benefits": "Your ability to hide is so great, you can disappear straight from vision",
        "text": ["You can move up to your Speed when you use the Sneak action, and you no longer need to have cover or greater cover or be concealed to Hide or Sneak."]
    }, {
        "name": "Elf Atavism",
        "level": "1",
        "traits": ["Half-Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=79",
        "prereq": "",
        "benefits": "Your elven blood runs particularly strong, granting you features far more elven than those of a typical half-elf.",
        "text": ["Your elven blood runs particularly strong, granting you features far more elven than those of a typical half-elf. You may also have been raised among elves, steeped in your elven ancestors\u2019 heritage. You gain the benefits of the elf heritage of your elven parent or ancestors. You typically can\u2019t select a heritage that depends on or improves an elven feature you don\u2019t have. For example, you couldn\u2019t gain the cavern elf\u2019s darkvision ability if you didn\u2019t have low-light vision. In these cases, at the GM\u2019s discretion, you might gain a different benefit.", " You can take this feat only at 1st level, and you can\u2019t retrain out of this feat or into this feat."]
    }, {
        "name": "Inspire Imitation",
        "level": "5",
        "traits": ["Half-Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=80",
        "prereq": "",
        "benefits": "Your own actions inspire your allies to great achievements.",
        "text": ["Your own actions inspire your allies to great achievements. Whenever you critically succeed at a skill check, you automatically qualify to use the Aid reaction when attempting to help an ally using the same skill, even without spending an action to prepare to do so."]
    }, {
        "name": "Supernatural Charm",
        "level": "5",
        "traits": ["Half-Elf"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=81",
        "prereq": "",
        "benefits": "The elven magic in your blood manifests as a force you can use to become more appealing or alluring.",
        "text": ["The elven magic in your blood manifests as a force you can use to become more appealing or alluring. You can cast 1st-level ", " as an arcane innate spell once per day."]
    }, {
        "name": "Distracting Shadows",
        "level": "1",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=52",
        "prereq": "",
        "benefits": "You have learned to remain hidden by using larger folk as a distraction to avoid drawing attention to yourself.",
        "text": ["You have learned to remain hidden by using larger folk as a distraction to avoid drawing attention to yourself. You can use creatures that are at least one size larger than you (usually Medium or larger) as cover for the Hide and Sneak actions, though you still can\u2019t use such creatures as cover for other uses, such as the Take Cover action."]
    }, {
        "name": "Halfling Lore",
        "level": "1",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=53",
        "prereq": "",
        "benefits": "You\u2019ve dutifully learned important skills passed down through generations of halfling tradition",
        "text": ["You\u2019ve dutifully learned how to keep your balance and how to stick to the shadows where it\u2019s safe, important skills passed down through generations of halfling tradition. You gain the trained proficiency rank in Acrobatics and Stealth. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Halfling Lore."]
    }, {
        "name": "Halfling Luck",
        "level": "1",
        "traits": ["Halfling", " Fortune"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=54",
        "prereq": "",
        "benefits": "Your happy-go-lucky nature makes it seem like misfortune avoids you",
        "text": ["Your happy-go-lucky nature makes it seem like misfortune avoids you, and to an extent, that might even be true. You can reroll the triggering check, but you must use the new result, even if it\u2019s worse than your first roll."]
    }, {
        "name": "Halfling Weapon Familiarity",
        "level": "1",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=55",
        "prereq": "",
        "benefits": "You favor traditional halfling weapons, so you\u2019ve learned how to use them more effectively.",
        "text": ["You favor traditional halfling weapons, so you\u2019ve learned how to use them more effectively. You have the trained proficiency with the sling, halfling sling staff, and shortsword.", " In addition, you gain access to all uncommon halfling weapons. For you, martial halfling weapons are simple weapons, and advanced halfling weapons are martial weapons."]
    }, {
        "name": "Sure Feet",
        "level": "1",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=56",
        "prereq": "",
        "benefits": "Whether keeping your balance or scrambling up a tricky climb, your hairy, calloused feet easily find purchase.",
        "text": ["Whether keeping your balance or scrambling up a tricky climb, your hairy, calloused feet easily find purchase. If you roll a success on an Acrobatics check to Balance or an Athletics check to Climb, you get a critical success instead. You\u2019re not flat-footed when you attempt to Balance or Climb."]
    }, {
        "name": "Titan Slinger",
        "level": "1",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=57",
        "prereq": "",
        "benefits": "You have learned how to use your sling to fell enormous creatures.",
        "text": ["You have learned how to use your sling to fell enormous creatures. When you hit on an attack with a sling against a Large or larger creature, increase the size of the weapon damage die by one step (details on increasing weapon damage die sizes can be found on page 279)."]
    }, {
        "name": "Unfettered Halfling",
        "level": "1",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=58",
        "prereq": "",
        "benefits": "You were forced into service as a laborer, but you\u2019ve since escaped and have trained to ensure you\u2019ll never be caught again. ",
        "text": ["You were forced into service as a laborer, either pressed into indentured servitude or shackled by the evils of slavery, but you\u2019ve since escaped and have trained to ensure you\u2019ll never be caught again. Whenever you roll a success on a check to Escape or a saving throw against an effect that would impose the grabbed or restrained condition on you, you get a critical success instead. Whenever a creature rolls a failure on a check to Grapple you, they get a critical failure instead. If a creature uses the Grab ability on you, it must succeed at an Athletics check to grab you instead of automatically grabbing you."]
    }, {
        "name": "Watchful Halfling",
        "level": "1",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=59",
        "prereq": "",
        "benefits": "Your communal lifestyle causes you to pay close attention to the people around you.",
        "text": ["Your communal lifestyle causes you to pay close attention to the people around you, allowing you to more easily notice when they act out of character. You gain a +2 circumstance bonus to Perception checks when using the Sense Motive basic action to notice enchanted or possessed characters. If you aren\u2019t actively using Sense Motive on an enchanted or possessed character, the GM rolls a secret check, without the usual circumstance and with a \u20132 circumstance penalty, for you to potentially notice the enchantment or possession anyway.", " In addition to using it for skill checks, you can use the Aid basic action to grant a bonus to another creature\u2019s saving throw or other check to overcome enchantment or possession.", " As usual for Aid, you need to prepare by using an action on your turn to encourage the creature to fight against the effect."]
    }, {
        "name": "Cultural Adaptability",
        "level": "5",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=60",
        "prereq": "",
        "benefits": "During your adventures, you\u2019ve honed your ability to adapt to the culture of the predominant ancestry around you.",
        "text": ["During your adventures, you\u2019ve honed your ability to adapt to the culture of the predominant ancestry around you. You gain the ", " general feat, and you also gain one 1st-level ancestry feat from the ancestry you chose for the Adopted Ancestry feat."]
    }, {
        "name": "Halfling Weapon Trickster",
        "level": "5",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=61",
        "prereq": "Halfling Weapon Familiarity",
        "benefits": "You are particularly adept at fighting with your people\u2019s favored weapons.",
        "text": ["You are particularly adept at fighting with your people\u2019s favored weapons. Whenever you critically succeed at an attack roll using a shortsword, a sling, or a halfling weapon, you apply the weapon\u2019s critical specialization effect."]
    }, {
        "name": "Guiding Luck",
        "level": "9",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=62",
        "prereq": "Halfling Luck",
        "benefits": "Your luck guides you to look the right way and aim your blows unerringly.",
        "text": ["Your luck guides you to look the right way and aim your blows unerringly. You can use ", " twice per day: once in response to its normal trigger, and once when you fail a Perception check or attack roll instead of the normal trigger."]
    }, {
        "name": "Irrepressible",
        "level": "9",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=63",
        "prereq": "",
        "benefits": "You are easily able to ward off attempts to play on your fears and emotions.",
        "text": ["You are easily able to ward off attempts to play on your fears and emotions. When you roll a success on a saving throw against an emotion effect, you get a critical success instead. If your heritage is gutsy halfling, when you roll a critical failure on a saving throw against an emotion effect, you get a failure instead."]
    }, {
        "name": "Ceaseless Shadows",
        "level": "13",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=64",
        "prereq": "Distracting Shadows",
        "benefits": "You excel at going unnoticed, especially among a crowd.",
        "text": ["You excel at going unnoticed, especially among a crowd. You no longer need to have cover or be concealed to Hide or Sneak. If you would have lesser cover from creatures, you gain cover and can Take Cover, and if you would have cover from creatures, you gain greater cover."]
    }, {
        "name": "Halfling Weapon Expertise",
        "level": "13",
        "traits": ["Halfling"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=65",
        "prereq": "Halfling, Weapon Familiarity",
        "benefits": "Your halfling affinity blends with your class training, granting you great skill with halfling weapons.",
        "text": ["Your halfling affinity blends with your class training, granting you great skill with halfling weapons. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in the sling, halfling sling staff, shortsword, and all halfling weapons in which you are trained."]
    }, {
        "name": "Monstrous Peacemaker",
        "level": "1",
        "traits": ["Half-Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=82",
        "prereq": "",
        "benefits": "Your dual human and orc nature has given you a unique perspective.",
        "text": ["Your dual human and orc nature has given you a unique perspective, allowing you to bridge the gap between humans and the many intelligent creatures in the world that humans consider monsters. You gain a +1 circumstance bonus to Diplomacy checks against non-humanoid intelligent creatures and against humanoids that are marginalized in human society (at the GM\u2019s discretion, but typically at least including giants, goblins, kobolds, and orcs). You also gain this bonus on Perception checks to Sense the Motives of such creatures."]
    }, {
        "name": "Orc Sight",
        "level": "1",
        "traits": ["Half-Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=84",
        "prereq": "low-light vision",
        "benefits": "Your orc blood is strong enough to grant you the keen vision of your orc forebears.",
        "text": ["Your orc blood is strong enough to grant you the keen vision of your orc forebears. You gain darkvision, allowing you to see in darkness and dim light just as well as you can in bright light. However, in darkness, you see in black and white only.", " You can take this feat only at 1st level, and you can\u2019t retrain out of this feat or into this feat."]
    }, {
        "name": "Orc Ferocity",
        "level": "1",
        "traits": ["Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=83",
        "prereq": "",
        "benefits": "Fierceness in battle runs through your blood, and you refuse to fall from your injuries.",
        "text": ["Fierceness in battle runs through your blood, and you refuse to fall from your injuries. You avoid being knocked out and remain at 1 Hit Point, and your wounded condition increases by 1."]
    }, {
        "name": "Orc Superstition",
        "level": "1",
        "traits": ["Orc", " Concentrate"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=85",
        "prereq": "",
        "benefits": "You defend yourself against magic by relying on techniques derived from orc cultural superstitions.",
        "text": ["You defend yourself against magic by relying on techniques derived from orc cultural superstitions. You gain a +1 circumstance bonus to your saving throw against the triggering spell or magical effect."]
    }, {
        "name": "Orc Weapon Famailiarity",
        "level": "1",
        "traits": ["Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=86",
        "prereq": "",
        "benefits": "In combat, you favor the brutal weapons that are traditional for your orc ancestors.",
        "text": ["In combat, you favor the brutal weapons that are traditional for your orc ancestors. You are trained with the falchion and greataxe. In addition, you gain access to all uncommon orc weapons.", " For you, martial orc weapons are simple weapons, and advanced orc weapons are martial weapons."]
    }, {
        "name": "Orc Weapon Carnage",
        "level": "5",
        "traits": ["Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=87",
        "prereq": "Orc Weapon Familiarity",
        "benefits": "You are brutally efficient with the weapons of your orc ancestors.",
        "text": ["You are brutally efficient with the weapons of your orc ancestors. Whenever you critically hit using a falchion, a greataxe, or an orc weapon, you apply the weapon\u2019s critical specialization effect."]
    }, {
        "name": "Victorious Vigor",
        "level": "5",
        "traits": ["Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=88",
        "prereq": "",
        "benefits": "Your victories in battle fill you with pride and imbue you with the energy to fight a bit longer despite your wounds.",
        "text": ["Your victories in battle fill you with pride and imbue you with the energy to fight a bit longer despite your wounds. You gain temporary Hit Points equal to your Constitution modifier until the end of your next turn."]
    }, {
        "name": "Pervasive Superstition",
        "level": "9",
        "traits": ["Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=89",
        "prereq": "Orc Superstition",
        "benefits": "You steep yourself in superstition and practice ancient orc mental exercises for shrugging off the effects of magic.",
        "text": ["You steep yourself in superstition and practice ancient orc mental exercises for shrugging off the effects of magic. You gain a +1 circumstance bonus to saving throws against spells and magical effects at all times."]
    }, {
        "name": "Incredible Ferocity",
        "level": "13",
        "traits": ["Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=90",
        "prereq": "Orc Ferocity",
        "benefits": "Given time to collect yourself after a near-death scrape, you can rebuild your ferocity and withstand additional finishing blows.",
        "text": ["Given time to collect yourself after a near-death scrape, you can rebuild your ferocity and withstand additional finishing blows. You can use ", " with a frequency of once per hour, rather than once per day."]
    }, {
        "name": "Orc Weapon Expertise",
        "level": "13",
        "traits": ["Orc"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=91",
        "prereq": "Orc Weapon Familiarity",
        "benefits": "Your orc affinity blends with your class training, granting you great skill with orc weapons.",
        "text": ["Your orc affinity blends with your class training, granting you great skill with orc weapons. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in the falchion, the greataxe, and all orc weapons in which you are trained."]
    }, {
        "name": "Adapted Cantrip",
        "level": "1",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=66",
        "prereq": "spellcasting class feature",
        "benefits": "Through study of multiple magical traditions, you\u2019ve altered a spell to suit your spellcasting style.",
        "text": ["Through study of multiple magical traditions, you\u2019ve altered a spell to suit your spellcasting style. Choose one cantrip from a magical tradition other than your own. If you have a spell repertoire or a spellbook, replace one of the cantrips you know or have in your spellbook with the chosen spell. If you prepare spells without a spellbook (if you\u2019re a cleric or druid, for example), one of your cantrips must always be the chosen spell, and you prepare the rest normally. You can cast this cantrip as a spell of your class\u2019s tradition.", " If you swap or retrain this cantrip later, you can choose its replacement from the same alternate tradition or a different one."]
    }, {
        "name": "Cooperative Nature",
        "level": "1",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=67",
        "prereq": "",
        "benefits": "The short human life span lends perspective and has taught you from a young age to set aside differences and work with others to achieve greatness.",
        "text": ["The short human life span lends perspective and has taught you from a young age to set aside differences and work with others to achieve greatness. You gain a +4 circumstance bonus on checks to Aid."]
    }, {
        "name": "General Training",
        "level": "1",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=68",
        "prereq": "",
        "benefits": "Your adaptability manifests in your mastery of a range of useful abilities.",
        "text": ["Your adaptability manifests in your mastery of a range of useful abilities. You gain a 1st-level general feat. You must meet the feat\u2019s prerequisites, but if you select this feat during character creation, you can select the feat later in the process in order to determine which prerequisites you meet.", " You can select this feat multiple times, choosing a different feat each time."]
    }, {
        "name": "Haughty Obstinacy",
        "level": "1",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=69",
        "prereq": "",
        "benefits": "Your powerful ego makes it harder for others to order you around.",
        "text": ["Your powerful ego makes it harder for others to order you around. If you roll a success on a saving throw against a mental effect that attempts to directly control your actions, you critically succeed instead. If a creature rolls a failure on a check to Coerce you using Intimidation, it gets a critical failure instead (so it can\u2019t try to Coerce you again for 1 week)."]
    }, {
        "name": "Natural Ambition",
        "level": "1",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=70",
        "prereq": "",
        "benefits": "You were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field.",
        "text": ["You were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field. You gain a 1st-level class feat for your class. You must meet the prerequisites, but you can select the feat later in the character creation process in order to determine which prerequisites you meet."]
    }, {
        "name": "Natural Skill",
        "level": "1",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=71",
        "prereq": "",
        "benefits": "Your ingenuity allows you to learn a wide variety of skills.",
        "text": ["Your ingenuity allows you to learn a wide variety of skills. You gain the trained proficiency rank in two skills of your choice."]
    }, {
        "name": "Unconventional Weaponry",
        "level": "1",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=72",
        "prereq": "",
        "benefits": "You\u2019ve familiarized yourself with a particular weapon, potentially from another ancestry or culture.",
        "text": ["You\u2019ve familiarized yourself with a particular weapon, potentially from another ancestry or culture. Choose an uncommon simple or martial weapon with a trait corresponding to an ancestry (such as dwarf, goblin, or orc) or that is common in another culture. You gain access to that weapon, and for the purpose of determining your proficiency, that weapon is a simple weapon.", " If you are trained in all martial weapons, you can choose an uncommon advanced weapon with such a trait. You gain access to that weapon, and for the purpose of determining your proficiency, that weapon is a martial weapon."]
    }, {
        "name": "Adaptive Adept",
        "level": "5",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=73",
        "prereq": "Adapted Cantrip, can cast 3rd-level spells",
        "benefits": "You\u2019ve continued adapting your magic to blend your class\u2019s tradition with your adapted tradition.",
        "text": ["You\u2019ve continued adapting your magic to blend your class\u2019s tradition with your adapted tradition. Choose a cantrip or 1st-level spell from the same magical tradition as your cantrip from ", ". You gain that spell, adding it to your spell repertoire, spellbook, or prepared spells just like the cantrip from Adapted Spell. You can cast this spell as a spell of your class\u2019s magical tradition. If you choose a 1st-level spell, you don\u2019t gain access to the heightened versions of that spell, meaning you can\u2019t prepare them if you prepare spells and you can\u2019t learn them or select the spell as a signature spell if you have a spell repertoire."]
    }, {
        "name": "Clever Improviser",
        "level": "5",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=74",
        "prereq": "",
        "benefits": "You\u2019ve learned how to handle situations when you\u2019re out of your depth.",
        "text": ["You\u2019ve learned how to handle situations when you\u2019re out of your depth. You gain the ", " general feat. In addition, you can attempt skill actions that normally require you to be trained, even if you are untrained."]
    }, {
        "name": "Cooperataive Soul",
        "level": "9",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=75",
        "prereq": "Cooperative Nature",
        "benefits": "You have developed a soul-deep bond with your comrades and maintain an even greater degree of cooperation with them.",
        "text": ["You have developed a soul-deep bond with your comrades and maintain an even greater degree of cooperation with them. If you are at least an expert in the skill you are Aiding, you get a success on any outcome rolled to Aid other than a critical success."]
    }, {
        "name": "Incredible Improvisation",
        "level": "9",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=76",
        "prereq": "Clever Improviser",
        "benefits": "A stroke of brilliance gives you a major advantage with a skill despite your inexperience.",
        "text": ["A stroke of brilliance gives you a major advantage with a skill despite your inexperience. Gain a +4 circumstance bonus to the triggering skill check."]
    }, {
        "name": "Multitalented",
        "level": "9",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=77",
        "prereq": "",
        "benefits": "You\u2019ve learned to split your focus between multiple classes with ease.",
        "text": ["You\u2019ve learned to split your focus between multiple classes with ease. You gain a 2nd-level multiclass dedication feat (for more about multiclass archetypes, see page 219), even if you normally couldn\u2019t take another dedication feat until you take more feats from your current archetype.", " If you\u2019re a half-elf, you don\u2019t need to meet the feat\u2019s ability score prerequisites."]
    }, {
        "name": "Unconventional Expertise",
        "level": "13",
        "traits": ["Human"],
        "link": "https://2e.aonprd.com/Feats.aspx?ID=78",
        "prereq": "Unconventional Weaponry, trained in the weapon you chose for Unconventional Weaponry",
        "benefits": "You\u2019ve continued to advance your powers using your unconventional weapon.",
        "text": ["You\u2019ve continued to advance your powers using your unconventional weapon. Whenever you gain a class feature that grants you expert or greater proficiency in certain weapons, you also gain that proficiency in the weapon you chose for ", "."]
    }]
module.exports = { feats}