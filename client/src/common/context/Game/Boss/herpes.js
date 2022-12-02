let round = 0;
let nbRoundInvincible = 0;
let nbRoundBrulure = 0;

const bossAttack = ["Vesicules", "Demangeaisons", "Brulure"];

export const herpes = (card, user, boss) => {
    round++;
    let bossHp = boss.pv;
    let userHp = user.pv;
    let bossMessage = "";

    // La carte que le joueur a choisi
    switch (card.name) {
        case "traitement antiviral":
            if (round <= 5) {
                bossHp -= 14;
            } else {
                bossHp -= 4;
            }
            break;
        case "préservatif":
            nbRoundInvincible = 1;
            break;
        case "abstinence sexuelle":
            nbRoundInvincible = 2;
            break;
    }
    // Le boss perd de la vie a chaque tour
    bossHp -= 2;

    // On set a 0 pour l'affichage
    if (bossHp <= 0) bossHp = 0;

    // Le boss attaque si il a encore de la vie et si le joueur n'est pas invincible
    if (nbRoundInvincible === 0 && bossHp > 0) {
        switch (
            bossAttack.at(Math.floor(Math.random * (bossAttack.length - 1)))
        ) {
            case "Vesicules":
                userHp -= 4;
                bossMessage = "Le boss vous a attaqué avec des vesicules. Vous perdez 4 pv.";
                break;
            case "Demangeaisons":
                userHp -= 2;
                bossMessage = "Le boss vous a attaqué avec des demangeaisons. Vous perdez 2 pv.";
                break;
            case "Brulure":
                nbRoundBrulure = 3;
                bossMessage = "Le boss vous a attaqué avec une brulure. Vous perdez 1 pv par tour pendant 3 tours.";
                break;
        }
    }

    // Le joueur perd de la vie si il est brulé
    if (nbRoundBrulure > 0 && bossHp > 0) {
        userHp -= 2;
        bossMessage += "Vous etes brulé. Vous perdez 1 pv.";
        nbRoundBrulure--;
    }

    if (nbRoundInvincible > 0) {
        nbRoundInvincible--;
    }

    // On set a 0 pour l'affichage
    if (userHp <= 0) userHp = 0;

    boss.pv = bossHp;
    user.pv = userHp;
    user.state = nbRoundInvincible > 0 ? "Proteger " + nbRoundInvincible + "tours" : "";
    user.state = nbRoundBrulure > 0 ? "Brulure " + nbRoundBrulure + "tours" : user.state;
    return { user, boss, bossMessage };
};