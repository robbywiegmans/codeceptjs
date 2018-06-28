Feature('Add a new ToDo');

Scenario('Add a new todo and cleanup at the end', (I) => {
    I.amOnPage('/');
    I.waitForElement('input#new-todo');

    I.say('The website is loaded');

    // Add a new to-do
    I.addNewTodo('Create workshop introduction CodeceptJS');


    // Cleanup
    I.moveCursorTo('div.view label');
    I.click('.destroy');

    // Assert the to-do is deleted    
    I.dontSee('introduction CodeceptJS');
    I.saveScreenshot('todo-removed.png');
    I.addMochawesomeContext({title: "Test completed", 
        value: "./todo-created.png"});
    I.addMochawesomeContext("./todo-removed.png");

});