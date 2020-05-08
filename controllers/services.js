module.exports = {
    statModifier: (stat) =>{
        switch (stat) {
            case 1:
                return -5;
            case 2:
                return -4;
            case 3:
                return -4;
            case 4:
                return -3;
            case 5:
                return -3;    
            case 6:
                return -2;
            case 7:
                return -2;    
            case 8:
                return -1;
            case 9:
                return -1;
            case 10:
                return '+' + 0;
            case 11:
                return '+' + 0;    
            case 12:
                return '+' + 1;
            case 13:
                return '+' + 1;
            case 14:
                return '+' + 2;
            case 15:
                return '+' + 2;
            case 16:
                return '+' + 3;
            case 17:
                return '+' + 3;
            case 18:
                return '+' + 4;
            case 19:
                return '+' + 4;
            case 20:
                return '+' + 5;
            case 21:
                return '+' + 5;
            case 22:
                return '+' + 6;
            case 23:
                return '+' + 6;
            case 24:
                return '+' + 7;
            case 25:
                return '+' + 7;
            case 26:
                return '+' + 8;
            case 27:
                return '+' + 8;
            case 28:
                return '+' + 9;
            case 29:
                return '+' + 9;
            case 30:
                return '+' + 10;         
        }
    },
    proficiencyCheck: (currentLevel) => {
        if (currentLevel <= 4) {
            return '+' + 2;
        } else if (currentLevel <= 8) {
            return '+' + 3;
        } else if (currentLevel <= 12) {
            return '+' + 4;
        } else if (currentLevel <= 16) {
            return '+' + 5;
        } else if (currentLevel <= 20) {
            return '+' + 6;
        }
    },
    hpCheck: (currentRole, currentLevel) => {
        let barbarian = 12;
        let fighterPaladinRanger = 10;
        let bardClericDruidMonkRogueWarlock = 8;
        let sorcererWizard = 6;

        if (currentLevel === 1) {
            if (currentRole.toLowerCase() === 'barbarian') {
                return barbarian;
            } else if (currentRole.toLowerCase() === 'fighter' || 'paladin' || 'ranger') {
                return fighterPaladinRanger;
            } else if (currentRole.toLowerCase() === 'bard' || 'cleric' || 'druid' || 'monk' || 'rogue' || 'warlock') {
                return bardClericDruidMonkRogueWarlock;
            } else if (currentRole.toLowerCase() === 'sorcerer' || 'wizard') {
                return sorcererWizard;
            }
        } else if (currentLevel >= 2) {
            switch (currentRole.toLowerCase()) {
                case 'barbarian':
                    barbarian += ((currentLevel - 1) * 7);
                    return barbarian;
                case 'fighter':
                    fighterPaladinRanger += ((currentLevel - 1) * 6);
                    return fighterPaladinRanger;
                case 'paladin':
                    fighterPaladinRanger += ((currentLevel - 1) * 6);
                    return fighterPaladinRanger;
                case 'ranger':
                    fighterPaladinRanger += ((currentLevel - 1) * 6);
                    return fighterPaladinRanger;
                case 'bard':
                    bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                    return bardClericDruidMonkRogueWarlock;
                case 'cleric':
                    bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                    return bardClericDruidMonkRogueWarlock;
                case 'druid':
                    bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                    return bardClericDruidMonkRogueWarlock;
                case 'monk':
                    bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                    return bardClericDruidMonkRogueWarlock;
                case 'rogue':
                    bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                    return bardClericDruidMonkRogueWarlock;
                case 'warlock':
                    bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                    return bardClericDruidMonkRogueWarlock;
                case 'sorcerer':
                    sorcererWizard += ((currentLevel - 1) * 4);
                    return sorcererWizard;
                case 'wizard':
                    sorcererWizard += ((currentLevel - 1) * 4);
                    return sorcererWizard;
            }
        }
    }
}