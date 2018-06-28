
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    // Add a new to-do
    addNewTodo: function (todo) {
      this.fillField('input#new-todo', todo);
      this.pressKey('Enter');

      // Make a screenshot
      this.saveScreenshot('todo-created.png');

      // Assert the to-do is created
      this.see('introduction CodeceptJS');
    }
  })
}
