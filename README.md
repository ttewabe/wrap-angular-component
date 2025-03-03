1.  Navigate the existing Angular Project.
2.  Install React related Core dependencies
    - npm i react react-dom
    - npm i --save-dev @types/react @types/react-dom
3.  ng serve
4.  Your Angular project needs to support JSX in TypeScript. Open tsconfig.json and ensure these settings are present:
    {
    "compilerOptions": {
    "jsx": "react-jsx"
    }
    }
    If you’re using an older TypeScript version, you may need:

        {
          "compilerOptions": {
            "jsx": "react"
          }
        }

5.  In app.component.html,you have to pass the propName value such as <app-my-component-wrapper [propName]="propName" (eventName)="onEventName()"></app-my-component-wrapper> to properly pass and bind the properties.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
