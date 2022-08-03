let date = new Date(),
    day = date.getDate(),
    month = date.getMonth()+1,
    year = date.getFullYear();

let captionString = `Food prices for ≠ ${day}.${month}.${year}`;

console.log(captionString.replaceAll(`≠`, `-`));

let apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7,
    appleTotal = (applePrice) * (appleCount),
    appleDiscount = (appleTotal) - (appleTotal / 100 * (appleSalePercent));

console.log(`Final price for ${appleCount} ${apple} = ${appleDiscount.toFixed()} UAH`);

let orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3,
    orangeTotal = ( orangePrice) * ( orangeCount),
    orangeDiscount = ( orangeTotal) - ( orangeTotal / 100 * (orangeSalePercent));

console.log(`Final price for ${orangeCount} ${orange} = ${orangeDiscount.toFixed()} UAH`);

let kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10,
    kiwiTotal = (kiwiPrice) * (kiwiCount),
    kiwiAllowance = (kiwiTotal) + (kiwiTotal / 100 * (kiwiCountryPercent));

console.log(`Final price for ${kiwiCount} ${kiwi} = ${kiwiAllowance.toFixed()} UAH`);

let allProducts = (appleDiscount) + (orangeDiscount) + (kiwiAllowance);

console.log(`Final price for all products = ${allProducts.toFixed()} UAH`);