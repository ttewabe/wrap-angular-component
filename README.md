1.  Navigate the existing Angular Project.
2.  Install React related Core dependencies
    - npm i react react-dom
    - npm i --save-dev @types/react @types/react-dom
3.  Your Angular project needs to support JSX in TypeScript. Open tsconfig.json and ensure these settings are present:
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

5.Create a React component(MyComponent.tsx)
6. Create angular component & wrap React inside it
7. Then Add Angular component into module.ts
8. Use the defined selector in the template and run it. In app.component.html,you have to pass the propName value such as <app-my-component-wrapper [propName]="propName" (eventName)="onEventName()"></app-my-component-wrapper> to properly pass and bind the properties.
8. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
