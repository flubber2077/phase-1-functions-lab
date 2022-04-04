// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber)
{
    return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber)
{
    return 264 * distanceFromHqInBlocks(streetNumber);
}

function distanceTravelledInFeet(street1, street2)
{
    return 264 * Math.abs(street1 - street2);
}

function calculatesFarePrice(start, destination)
{
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400)
    {
        return 0;
    }
    else if (distance <= 2000)
    {
        distance -= 400;
        return distance * .02;
    }
    else if (distance <= 2500)
    {
        return 25;
    }
    else
    {
        return 'cannot travel that far';
    }
}