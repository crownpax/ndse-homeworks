const currentDate = new Date()

export const currentFunc = (args) => {
    if (Object.keys(args).includes('year') || Object.keys(args).includes('month') || Object.keys(args).includes('date')) {
        if (Object.keys(args).includes('year')) {
            currentDate.setFullYear(args.year || currentDate.getFullYear())
            console.log('year: ', currentDate.getFullYear())
        }
        if (Object.keys(args).includes('month')) {
            currentDate.setMonth(args.month || currentDate.getMonth())
            console.log('month: ', currentDate.getMonth())
        }
        if (Object.keys(args).includes('date')) {
            currentDate.setDate(args.date || currentDate.getDate())
            console.log('date: ', currentDate.getDate())
        }
    }
    else {
        console.log(currentDate.toLocaleString('ru-RU'));
    }
}

export const addFunc = (args) => {
    if (args.year) {
        currentDate.setFullYear(currentDate.getFullYear() + args.year)
    }
    if (args.month) {
        currentDate.setMonth(currentDate.getMonth() + args.month)
    }
    if (args.date) {
        currentDate.setDate(currentDate.getDate() + args.date)
    }

    console.log(currentDate.toLocaleString('ru-RU'));
}

export const subFunc = (args) => {
    if (args.year) {
        currentDate.setFullYear(currentDate.getFullYear() - args.year)
    }
    if (args.month) {
        currentDate.setMonth(currentDate.getMonth() - args.month)
    }
    if (args.date) {
        currentDate.setDate(currentDate.getDate() - args.date)
    }

    console.log(currentDate.toLocaleString('ru-RU'));
}