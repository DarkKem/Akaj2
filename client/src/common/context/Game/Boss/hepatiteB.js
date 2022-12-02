let round = 0;
let nbRoundInvincible = 0;

let nbRoundFievre = 0;
let nbRoundNausees = 0;

let phaseAigue = false;
let degatParTour = 0;
let greffePossible = true;

const bossAttack = ["Fièvre", "Nausées", "Perte d’appétit", "Douleurs"];

export const hepatiteB = (card, user, boss) => {
    round++;
    let bossHp = boss.pv;
    let userHp = user.pv;
    let bossMessage = "";

    // La carte que le joueur a choisi
    switch (card.name) {
        case "Vaccination":
            if (round <= 5) {
                bossHp = 0;
            }
            break;
        case "Traitement antiviral":
            if (phaseAigue) {
                degatParTour += 2;
            }
            else {
                bossHp -= 2;
            }
            break;
        case "Préservatif ":
            nbRoundInvincible = 1;
            break;
        case "Abstinence sexuelle":
            nbRoundInvincible = 2;
            break;
        case "Greffe hépatique":
            if (greffePossible) {
                userHp = 100;
                greffePossible = false;
            }
            break;
    }

    // Le boss perd de la vie a chaque tour
    bossHp -= 2;

    // On set a 0 pour l'affichage
    if (bossHp <= 0) bossHp = 0;

    // Le boss attaque si il a encore de la vie et si le joueur n'est pas invincible
    if (nbRoundInvincible === 0 && bossHp > 0) {
        if (!phaseAigue) {
            if ((phaseAigue = Math.random() < 0.1)) {
                bossMessage = "Phase aigue.";
            }
        }
        switch (
            bossAttack.at(Math.floor(Math.random * (bossAttack.length - 1)))
        ) {
            case "Fièvre":
                nbRoundFievre = 3;
                bossMessage = "Le boss vous a infligé Fièvre. Vous perdez 1 pv par tour.";
                break;
            case "Nausées":
                nbRoundNausees = 2;
                bossMessage = "Le boss vous a infligé Nausées. Vous perdez 2 pv par tour.";
                break;
            case "Perte d’appétit":
                userHp -= 2;
                bossMessage = "Le boss vous a infligé Perte d’appétit. Vous perdez 2 pv.";
                break;
            case "Douleurs":
                userHp -= 4;
                bossMessage = "Le boss vous a infligé Douleurs. Vous perdez 4 pv.";
                break;
        }

        if (Math.random() < 0.01) {
            bossMessage = "Hépatite B dite fulminante.";
            userHp = 1;
        }
    }

    // Le joueur perd de la vie si il est brulé
    if (nbRoundFievre > 0 && bossHp > 0) {
        userHp -= 1;
        bossMessage += "Vous de la fièvre. Vous perdez 1 pv.";
        nbRoundFievre--;
    }
    if (nbRoundNausees > 0 && bossHp > 0) {
        userHp -= 2;
        bossMessage += "Vous une nausées. Vous perdez 2 pv.";
        nbRoundNausees--;
    }
    userHp -= degatParTour;

    if (nbRoundInvincible > 0) {
        nbRoundInvincible--;
    }

    // On set a 0 pour l'affichage
    if (userHp <= 0) userHp = 0;

    boss.pv = bossHp;
    user.pv = userHp;
    user.state = "";
    user.state += phaseAigue ? "Phase aigue," : "";
    user.state += nbRoundInvincible > 0 ? "Proteger " + nbRoundInvincible + "tours," : "";
    user.state += nbRoundFievre > 0 ? "Fièvre " + nbRoundFievre + "tours," : "";
    user.state += nbRoundNausees > 0 ? "Nausées " + nbRoundNausees + "tours" : "";

    return { user, boss, bossMessage };
};
