<p align="center">
  <img src="https://github.com/Ho3einWave/avatar-gradient/blob/main/assets/preview.jpg?raw=true" width="400" alt="Avatar Gradient logo" />
</p>


# Avatar Gradient React


## Installation:
```bash
npm install avatar-gradient
pnpm install avatar-gradient
yarn install avatar-gradient
```

## Usage:
```tsx
import { Avatar } from "avatar-gradient";
function App() {
    return (
        <div>
          <Avatar username="test" />
        </div>
    );
}

export default App;

```

## Customization:
```tsx
import { Avatar } from "avatar-gradient";
function App() {
    return (
        <div>
          <Avatar username="test" style={{borderRadius:"0px"}} />
          <Avatar username="test" className="custom-style" />
        </div>
    );
}

export default App;

```