# ogToons

An open-source remake of gToons, a trading card game.

On October 14th, 2002, Cartoon Network released gToons. The game could be played on Cartoon Orbit: a Flash web app in which users could create an account and earn points to purchase cToons to decorate their cZones with, and now, purchase and play gToons.

Users could sell these items in auctions, or trade these items with other users. gToons, however, implemented a lobby-and-leaderboard format in which a player could play a random match--truly random, since rank was not taken into consideration--or issue a challenge to another player.

Wins would net a player roughly eight to nine rating points against a much lower-rated opponent, while a loss against such an opponent might net negative four to five points. If one were to defeat someone much higher ranked than them, they might earn twelve or fourteen points, but a loss against such an opponent would earn them no more than negative five.

Cartoon Orbit, and thus gToons, ceased operations sometime in September 2006, and with it, the lobby. Luckily, the game can still be played in its entirety at this wonderful site: [![gToons App](./img/gtoons_app.png)](https://gtoons.app)

## Rules

### Win conditions

The two win conditions follow, listed in order of precedence:

1. **Color**: A player wins by color if he or she has more cards in play of two certain colors at the end of the match.
2. **Points**: A player wins by points if he or she has more points than their opponent at the end of the match.

If neither of these conditions are met, the game is a tie.

### Attributes of the cards

Every card in gToons has four attributes that affected gameplay:

- Color
- Point value
- Character
- Power

#### Color

Every card has one of the following colors:

- Black*
- Blue
- Green
- Orange
- Purple
- Red
- Silver*
- Yellow

##### \* - Non-colors

- **Black** - neutral, does not count toward color wins or bonuses.
- **Silver** - same attribute as Black, but also can be chosen to be any color, including Silver itself.

More on color to follow in the [gameplay section](#gameplay).

#### Point value

Cards are worth anywhere from one to twelve points. Silver cards are worth 1-3; black cards are worth 8-10.

#### Character

Only one card may be in play with a given character attribute. If a card is revealed to have a character attribute that is already in play, then the highest-point value card is "cancelled," or removed from play. If they have the same point value, then both are cancelled.

#### Power

Text that dictates an added effect that a card has while it is in play. Not all cards have powers.

### Gameplay

#### Phases

Gameplay can be broken up into three main phases:

- Cut phase
- Turn 1
- Turn 2

##### Cut phase

Players choose from one of four decks consisting of exactly twelve cards each: A, B, C or D. (These decks are built outside the game itself.) Then, the bottom card from each player's deck is revealed. There are three possibilities:

1. Two colors--neither of which are "non-colors," i.e. silver or black--are revealed
   - *The color win condition is possible if and only if this occurs.*
2. One non-color is revealed, and one color is revealed.
   - A "color bonus" of fifteen points is added to the total of the player with the most cards of that color in play at the end of the game.
3. No colors are revealed
   - Nothing happens.

##### Turn 1

Players are dealt six cards from their deck. They play four of them, face-down, in four slots on the gameboard, which has fourteen total slots--seven for each player, in a half-honeycomb formation--that forms a hexagon that is bisected widthwise to delineate each player's side of the gameboard on which they may place their cards. (It is helpful to think of these as numbered from one to seven on each player's side.)

The cards are revealed one-by-one, powers and cancellations resolve, and points and colors (if applicable) are tallied.

Of the two remaining cards in each player's hand, they can choose to either discard one, both, or none of them.

##### Turn 2

Each player is dealt cards until they have six in their hand. They then play three of these cards to the remaining three slots on their respective sides of the gameboard. Then, the first two cards are revealed.

Each player is then given the option to swap their last card with one of the three remaining cards in their own hand, at the cost of ten points. Then, the players choose the color for their silver cards in play. Then, once everything is resolved, the winner is determined.