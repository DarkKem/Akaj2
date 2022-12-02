let round = 0;
let nbRoundInvincible = 0;

let nbRoundFievre = 0;
let nbRoundDouleur = 0;

let nbAntibiotique = 4;

let bossAttack = ["Brûlures", "Ecoulements", "Fièvre", "Douleurs"];

export const chlamydiose = (card, user, boss) => {
    round++;
    if (round === 5) {
        bossAttack = ["Brûlures", "Ecoulements", "Fièvre", "Douleurs", "Lésions", "Stérilité"];
    }

    let bossHp = boss.pv;
    let userHp = user.pv;
    let bossMessage = "";

    // La carte que le joueur a choisi
    switch (card.name) {
        case "Antibiotiques":
            nbAntibiotique--;
            break;
        case "Préservatif ":
            nbRoundInvincible = 1;
            break;
        case "Abstinence sexuelle":
            nbRoundInvincible = 2;
            break;
    }
    
    if (nbAntibiotique <= 0) {
        bossHp = 0;
    }

    // On set a 0 pour l'affichage
    if (bossHp <= 0) bossHp = 0;

    // Le boss attaque si il a encore de la vie et si le joueur n'est pas invincible
    if (nbRoundInvincible === 0 && bossHp > 0) {

        switch (bossAttack.at(Math.floor(Math.random * (bossAttack.length - 1)))) {
            case "Brûlures ":
                userHp -= 2;
                bossMessage = "Le boss vous a affligé des brûlures. Vous perdez 2 pv.";
                break;
            case "Ecoulements ":
                userHp -= 1;
                bossMessage = "Le boss vous a affligé des écoulements. Vous perdez 1 pv.";
                break;
            case "Fièvre":
                nbRoundFievre = 3;
                bossMessage = "Le boss vous a infecté par la fièvre. Vous perdez 1 pv par tour.";
                break;
            case "Douleurs":
                nbRoundDouleur = 3;
                bossMessage = "Le boss vous a infecté par des douleurs. Vous perdez 2 pv par tour.";
                break;
            case "Lésions":
                userHp -= 10;
                bossMessage = "Le boss vous a affligé des lésions. Vous perdez 10 pv.";
                break;
            case "Stérilité":
                userHp -= 50;
                bossMessage = "Le boss vous a affligé la stérilité. Vous perdez 50 pv.";
                break;
        }
    }

    // Le joueur perd de la vie si il est brulé
    if (nbRoundFievre > 0 && bossHp > 0) {
        userHp -= 1;
        bossMessage += "Vous avez de la fièvre. Vous perdez 1 pv.";
        nbRoundFievre--;
    }
    if (nbRoundDouleur > 0 && bossHp > 0) {
        userHp -= 2;
        bossMessage += "Vous une douleur. Vous perdez 2 pv.";
        nbRoundDouleur--;
    }

    if (nbRoundInvincible > 0) {
        nbRoundInvincible--;
    }

    // On set a 0 pour l'affichage
    if (userHp <= 0) userHp = 0;

    boss.pv = bossHp;
    user.pv = userHp;
    user.state = "";
    user.state += nbRoundInvincible > 0 ? "Proteger " + nbRoundInvincible + "tours," : "";
    user.state += nbRoundFievre > 0 ? "Fièvre " + nbRoundFievre + "tours," : "";
    user.state += nbRoundDouleur > 0 ? "Douleur " + nbRoundDouleur + "tours" : "";

    return { user, boss, bossMessage };
};
