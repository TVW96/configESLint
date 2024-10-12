# ESLint Configuration in a Node.js Project

## Assignment Overview

### Objective
The goal of this assignment is to gain hands-on experience in setting up and configuring ESLint within a Node.js project. This ensures code consistency and helps avoid potential bugs in the application.

### Design Decisions
While configuring ESLint, I opted for a combination of the recommended rules from ESLint itself, the React plugin, and the shareable config `eslint-config-semistandard`. This approach allows for a well-rounded set of linting rules that promote best practices while ensuring compatibility with existing codebases. 

One challenge I faced was adapting to the new flat configuration system introduced in ESLint. This required a shift in how plugins and shared configurations are integrated, moving away from traditional "extends" methods to a more modular approach. Adjusting to this change took some time, especially when resolving errors related to configuration formatting.

### Tasks

1. **Initialize a New Node.js Project:**
   - Clone the repository using the provided command or your local IDE:
     ```
     git clone https://git.devmatch.xyz/0f7dcd27-9734-4a31-80ba-f84130e574b0.git
     ```
   - Navigate to the cloned directory and run:
     ```
     npm install
     ```

2. **Install ESLint:**
   - In your project directory, run the following command to initialize ESLint:
     ```
     npm init @eslint/config
     ```
   - Follow the setup prompts to configure ESLint according to your preferences.

3. **Exploring ESLint Configuration:**
   - After configuration, an `eslint.config.js` file will be created. Open this file to examine the predefined rules.

4. **Modifying ESLint Rules:**
   - Change the rules for semicolon usage and quotation marks to align with your coding style. Options include:
     - `"off"` (or `0`)
     - `"warn"` (or `1`)
     - `"error"` (or `2`)

5. **Using Shareable Configs (Optional):**
   - Explore shareable configurations like `eslint-config-semistandard`. Install it using:
     ```
     npm init @eslint/config -- --config eslint-config-semistandard
     ```

6. **Linting Your Code:**
   - Creat
