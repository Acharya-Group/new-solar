# Neo Solar – Next.js 15 Website

## Setup

```bash
npm install
npm run dev
```

## Stack
- Next.js 15.2.2
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4
- React Icons 5.5

## Structure
```
src/
├── app/               # Pages & layouts
├── components/
│   ├── common/        # Button, Heading, SubHeading, Header, Footer, TopBar
│   └── sections/home/ # 17 home page sections
├── lib/
│   ├── constants/     # site, navigation, seo
│   ├── hooks/         # useScrollPosition, useSolarCalculator
│   └── utils/         # cn (classname merger)
└── types/             # TypeScript interfaces
```
