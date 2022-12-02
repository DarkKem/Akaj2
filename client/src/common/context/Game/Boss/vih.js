let round = 0;
let nbRoundInvincible = 0;

let nbRoundFievre = 0;
let nbRoundDiarrhees = 0;

let sida = false;

let bossAttack = ["Fièvre", "Eruption cutanée", "Diarrhées"];

export const vih = (card, user, boss) => {
    round++;

    let bossHp = boss.pv;
    let userHp = user.pv;
    let bossMessage = "";
    let attaqueDiviseur = 1;

    if (round === 5) {
        sida = true;
    }

    // La carte que le joueur a choisi
    switch (card.name) {
        case "antiviraux ":
            attaqueDiviseur = 2;
            break;
        case "préservatif":
            nbRoundInvincible = 1;
            break;
        case "abstinence sexuelle":
            nbRoundInvincible = 2;
            break;
    }

    // On set a 0 pour l'affichage
    if (bossHp <= 0) bossHp = 0;

    // Le boss attaque si il a encore de la vie et si le joueur n'est pas invincible
    if (nbRoundInvincible === 0 && bossHp > 0) {

        switch (bossAttack.at(Math.floor(Math.random * (bossAttack.length - 1)))) {
            case "Fièvre":
                nbRoundFievre = 3;
                bossMessage = "Le boss vous a affligé une fièvre. Vous perdez 1 pv par tour.";
                break;
            case "Eruption cutanée":
                userHp -= 4 / attaqueDiviseur;
                bossMessage = "Le boss vous a affligé une éruption cutanée. Vous perdez 4 pv.";
                break;
            case "Diarrhées":
                nbRoundDiarrhees = 3;
                bossMessage = "Le boss vous a affligé des diarrhées. Vous perdez 2 pv par tour.";
                break;
        }
    }

    // Le joueur perd de la vie si il est brulé
    if (nbRoundFievre > 0 && bossHp > 0) {
        userHp -= 1;
        bossMessage += "Vous avez de la fièvre. Vous perdez 1 pv.";
        nbRoundFievre--;
    }
    if (nbRoundDiarrhees > 0 && bossHp > 0) {
        userHp -= 2;
        bossMessage += "Vous avez une diarrhées. Vous perdez 2 pv.";
        nbRoundDiarrhees--;
    }

    if (nbRoundInvincible > 0) {
        nbRoundInvincible--;
    }

    if (sida) {
        userHp -= 20 / attaqueDiviseur;
        bossMessage += "Vous avez le sida. Vous perdez 20 pv.";
    }

    // On set a 0 pour l'affichage
    if (userHp <= 0) userHp = 0;

    boss.pv = bossHp;
    user.pv = userHp;
    user.state = "";
    user.state += nbRoundInvincible > 0 ? "Proteger " + nbRoundInvincible + "tours," : "";
    user.state += nbRoundFievre > 0 ? "Fièvre " + nbRoundFievre + "tours," : "";
    user.state += nbRoundDiarrhees > 0 ? "Diarrhées " + nbRoundDiarrhees + "tours," : "";

    return { user, boss, bossMessage };
};
