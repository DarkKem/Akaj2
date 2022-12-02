let round = 0;
let nbRoundInvincible = 0;
let nbAntibiotique = 3;

const bossAttack = ["Chancre", "Eruption"];

export const syphilis = (card, user, boss) => {
    round++;
    let bossHp = boss.pv;
    let userHp = user.pv;
    let bossMessage = "";

    // La carte que le joueur a choisi
    switch (card.name) {
        case "antibiotiques":
            bossHp -= 5;
            nbAntibiotique --;
            break;
        case "préservatif":
            nbRoundInvincible = 1;
            break;
        case "abstinence sexuelle":
            nbRoundInvincible = 2;
            break;
    }

    // Le joueur gagne si il prend 3 antibiotiques
    if (nbAntibiotique <= 0) {
        bossHp = 0;
    }

    // On set a 0 pour l'affichage
    if (bossHp <= 0) bossHp = 0;

    if (bossHp > 0 && round > 5) {
        userHp = 0;
        bossMessage = "Vous ne vous êtes pas soigné à temps.";
    }
    else// Le boss attaque si il a encore de la vie et si le joueur n'est pas invincible
    {
        if (nbRoundInvincible === 0 && bossHp > 0) {
            switch (bossAttack.at(Math.floor(Math.random * (bossAttack.length - 1)))) {
                case "Chancre":
                    userHp -= 1;
                    bossMessage = "Le boss vous a affligé un chancre. Vous perdez 1 pv.";
                    break;
                case "Eruption":
                    userHp -= 2;
                    bossMessage = "Le boss vous a affligé une éruption. Vous perdez 2 pv.";
                    break;
            }
        }
    }

    if (nbRoundInvincible > 0) {
        nbRoundInvincible--;
    }

    // On set a 0 pour l'affichage
    if (userHp <= 0) userHp = 0;

    boss.pv = bossHp;
    user.pv = userHp;
    user.state = nbRoundInvincible > 0 ? "Proteger " + nbRoundInvincible + "tours" : "";
    return { user, boss, bossMessage };
};
