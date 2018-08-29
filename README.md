### Requirements For The Calculator

#### Basic Functionality

1. The display defaults to '0'
1. When numbers are keyed, the appropriate number appears on the display. Subsequent numbers will be appended to the existing display, and no leading zeros will be included.
   * Pressing "1", "2", "0" the resulting display will be "120"
1. One decimal can be added to the number. Only the first decimal click will be accepted.
1. When a mathematical operator is selected, the display will display a '0' until the subsequent number in the calculation is entered.
   * Pressing "1", "+" will result in a "0" on the display
1. Mathematical operations are completed appropriately when the "=" button is selected
   * Pressing "1", "+", "2", "=" will result in a "3" on the display

#### Additional Functionality

1. "+/-" is a key which will flip the positive/negative value of the current number
   * If "2.5" is displayed and "+/-" is selected, "-2.5" will be displayed and used in calculations instead
1. "%" will divide a number by 100 -- showing "decimal notation" for the percentage
   * If "81" is on the screen and the "%" button is selected, "0.81" will be displayed and used in future calculations
1. "A/C" will clear all pre-existing calculations and start fresh from an empty "0" display

#### Acceptance Criteria

1. The buttons should appear in an order and configuration consistent with most simple calculators
1. Complex chains of calculations should be possible
   * 12 + 2 / 42 - 3, take the result and continue, '%' * 530, etc
   * At least one test should be completed with a set of at least 40 button presses 




## Contributions
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2018. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">