NOTES
-----

    meteor create socially
    cd socially
    meteor
    
    meteor add shmck:angular2
    meteor add netanelgilad:angular2-typescript

default files

    socially.html // delete
    socially.css // delete
    socially.js // change to `socially.ts`
    
    
index.html

    <body>
        <socially></socially>
    
        <script>System.import('client/socially');</script>
    </body>
 
index.ng.html
    
    <p>Nothing here {{'yet' + '!'}}</p>
    
