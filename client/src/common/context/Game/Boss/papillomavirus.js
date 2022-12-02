let round = 0;

let infecter = false;
let lesionPrecancereuse = false;
let lesionCancereuse = false;
let degatParTour = 0;
let delayAvantVictoire = -1;


export const papillomavirus = (card, user, boss) => {
    round++;
    let bossHp = boss.pv;
    let userHp = user.pv;
    let bossMessage = "";
    let chanceInfection = 0.8;

    // La carte que le joueur a choisi
    switch (card.name) {
        case "chirurgie":
            if (lesionCancereuse) bossHp = 0;
            break;
        case "curiethérapie":
            if (lesionPrecancereuse && delayAvantVictoire === -1) {
                delayAvantVictoire = 3;
            }
            break;
        case "vaccination":
            chanceInfection = chanceInfection / 2;
            break;
        case "frottis":
            chanceInfection = chanceInfection / (1 / 3);
            break;
    }

    if (delayAvantVictoire === 0) {
        bossHp = 0;
    }

    if (bossHp > 0) {
        if (!infecter) {
            if ((infecter = Math.random() < chanceInfection)) {
                bossMessage = "Infection.";
                degatParTour = 1;
            }
        }
        else if (!lesionPrecancereuse) {
            if ((lesionPrecancereuse = Math.random() < 0.4)) {
                bossMessage = "Lesion precancereuse.";
                degatParTour = 5;
            }
        }
        else if (!lesionCancereuse) {
            if ((lesionCancereuse = Math.random() < 0.2)) {
                bossMessage = "Lesion cancereuse.";
                degatParTour = 10;
            }
        }
    }

    userHp -= degatParTour;

    // On set a 0 pour l'affichage
    if (userHp <= 0) userHp = 0;

    boss.pv = bossHp;
    user.pv = userHp;
    return { user, boss, bossMessage };
};
