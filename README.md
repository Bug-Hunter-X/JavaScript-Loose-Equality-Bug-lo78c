# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript error involving loose equality (==) versus strict equality (===).  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.  The loose equality operator (==) performs type coercion before comparison, leading to unexpected results in this case.  The strict equality operator (===) checks for both value and type equality, ensuring correct behavior.

## Bug Description

The provided JavaScript function intends to double a number, returning 0 if the input is null. However, it uses loose equality (==), which results in 0 being returned for both null and 0 inputs. This is because loose equality performs type coercion.

## Solution

The solution in `bugSolution.js` replaces the loose equality check with strict equality (===), ensuring that only null inputs will return 0.