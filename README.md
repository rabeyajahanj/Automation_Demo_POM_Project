# Demo Web Shop Automation

UI tests for https://demowebshop.tricentis.com/ and API tests for https://jsonplaceholder.typicode.com/users

# Tech stack

- Playwright (JavaScript) with Page Object Model
- Allure and Playwright HTML reports
- Postman and Newman
- Git and GitHub

# Requirements

- Node.js
- Javas(needed for Allure)

# Setup

Git bash
git clone https://github.com/rabeyajahanj/Automation_Demo_POM_Project.git
cd Automation_Demo_POM_Project
npm install
npx playwright install chromium


# Run the tests

|Questions | Command |
| Q1 - Invalid login | `npm run test:q1` |
| Q2 - Register and add to cart | `npm run test:q2` |
| Q3 - Search and order | `npm run test:q3` |
| All UI tests | `npm run test:ui` |
| API tests | `npm run test:api` |
| UI and API together | `npm run test:all` |

# Reports

| Report |
| Playwright HTML report | 
| Command |
|`npx playwright show-report` |

| Report |
| Allure report | 
| Command |
|`npm run report:allure` |

| Report |
| API HTML report |
| Command |
|open `Postman_API_Test/reports/api-report.html` |

| Report |
| Playwright HTML report |
| Command |
| `npx playwright show-report` |

| Report |
| Allure report |
| Command |
| `npm run report:allure` |

| Report |
| API HTML report |
| Command |
| open `Postman_API_Test/reports/api-report.html` |

# Folders

- `Pages/` - page objects
- `tests/` - Q1, Q2 and Q3 tests
- `Postman_API_Test/` - Postman collection and environment