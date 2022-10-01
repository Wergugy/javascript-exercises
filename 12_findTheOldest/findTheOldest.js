const findTheOldest = function(people) {
        const thisYear = new Date().getFullYear();
        people.forEach((person) => {
                if (!person.yearOfDeath) person.yearOfDeath = thisYear;
        });
        const oldest = people.sort((a, b) => {
                const lastPerson = a.yearOfDeath - a.yearOfBirth;
                const nextPerson = b.yearOfDeath - b.yearOfBirth;
                return lastPerson > nextPerson ? -1 : 1;
              });
              return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
