// cd my-app
// bundle install
// bundle exec rake server

//rake server for ruby server

// rake db:drop && rake db:create && rake db:migrate && rake db:seed

import React, {useState} from "react";
import Admin from './Admin.js';
import MenuPage from './MenuPage.js';

function App() {


  return (
    <div className="App">    
      {<>
      <div class="wrapper">  
        <MenuPage />
      </div>
      </>
      }
    </div>
  );
}

export default App;
