let round = 0;
let nbRoundInvincible = 0;
let nbRoundBrulure = 0;

const bossAttack = ["Vesicules", "Demangeaisons", "Brulure"];

export const herpes = (card, user, boss) => {
    round++;
    let bossHp = boss.pv;
    let userHp = user.pv;

    // La carte que le joueur a choisi
    switch (card.cardName) {
        case "Traitement antiviral":
            if (round <= 5) {
                bossHp -= 14;
            } else {
                bossHp -= 4;
            }
            break;
        case "Préservatif":
            nbRoundInvincible = 1;
            break;
        case "Abstinence sexuelle":
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
                break;
            case "Demangeaisons":
                userHp -= 2;
                break;
            case "Brulure":
                nbRoundBrulure = 3;
                break;
        }
    }

    // Le joueur perd de la vie si il est brulé
    if (nbRoundBrulure > 0 && bossHp > 0) {
        userHp -= 2;
        nbRoundBrulure--;
    }

    if (nbRoundInvincible > 0) {
        nbRoundInvincible--;
    }

    // On set a 0 pour l'affichage
    if (userHp <= 0) userHp = 0;

    boss.pv = bossHp;
    user.pv = userHp;
    user.state = nbRoundInvincible > 0 ? "Proteger" : "";
    user.state = nbRoundBrulure > 0 ? "Brulure" : user.state;
    return { user, boss };
};
