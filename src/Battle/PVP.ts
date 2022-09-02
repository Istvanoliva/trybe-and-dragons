import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {    
    while (this._player1.lifePoints > -1 && this._player2.lifePoints > -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;

// Use um dos players para ser parâmetro do super na inicialização e use o método fight do super para dar o veredito da batalha,
// ou seja, se super.fight() retornar 1 o player quer foi usado como parâmetro do super na inicialização ganhou,
// e se retornar -1 a vitória foi do player que não foi o parâmetro do super;

// As personagens devem batalhar até uma das duas ser derrotada, em outras palavras, a batalha só deverá terminar,
// quando alguma personagem ter seus pontos de vida (lifePoints) igual a -1;