const db = require('../config/db')

exports.calculate = async (model) => {
  try {
    first_digit = model[0]
    second_digit = model[1]
    third_digit = model[2]
    fourth_digit = model[3]
    const duplicate = await db.Solution.findOne({
      $and: [
        {
          $or: [
            { first_digit: first_digit },
            { second_digit: first_digit },
            { third_digit: first_digit },
            { fourth_digit: first_digit }
          ]
        },
        {
          $or: [
            { first_digit: second_digit },
            { second_digit: second_digit },
            { third_digit: second_digit },
            { fourth_digit: second_digit }
          ]
        },
        {
          $or: [
            { first_digit: third_digit },
            { second_digit: third_digit },
            { third_digit: third_digit },
            { fourth_digit: third_digit }
          ]
        },
        {
          $or: [
            { first_digit: fourth_digit },
            { second_digit: fourth_digit },
            { third_digit: fourth_digit },
            { fourth_digit: fourth_digit }
          ]
        }
      ]
    })
    list = [first_digit, second_digit, third_digit, fourth_digit]
    let result = 0
    if (duplicate) return duplicate.text
    for (First_digit in list) {
      for (Second_digit in list) {
        for (Third_digit in list) {
          for (Fourth_digit in list) {
            if (First_digit == Second_digit || First_digit == Third_digit || First_digit == Fourth_digit || Second_digit == Third_digit || Second_digit == Fourth_digit || Third_digit == Fourth_digit) {
              continue
            }
            let text = ""
            switch (24) {
              case result = parseInt(list[First_digit]) + parseInt(list[Second_digit]) + parseInt(list[Third_digit]) + parseInt(list[Fourth_digit]):
                text = list[First_digit] + "+" + list[Second_digit] + "+" + list[Third_digit] + "+" + list[Fourth_digit]
                break;
              case result = parseInt(list[First_digit]) * parseInt(list[Second_digit]) * (parseInt(list[Third_digit]) - parseInt(list[Fourth_digit])):
                text = list[First_digit] + "*" + list[Second_digit] + "*" + "(" + list[Third_digit] + "-" + list[Fourth_digit] + ")"
                break;
              case result = parseInt(list[First_digit]) * parseInt(list[Second_digit]) + parseInt(list[Third_digit]) * parseInt(list[Fourth_digit]):
                text = list[First_digit] + "*" + list[Second_digit] + "+" + list[Third_digit] + "*" + list[Fourth_digit]
                break;
              case result = parseInt(list[First_digit]) * parseInt(list[Second_digit]) - parseInt(list[Third_digit]) * parseInt(list[Fourth_digit]):
                text = list[First_digit] + "*" + list[Second_digit] + "-" + list[Third_digit] + "*" + list[Fourth_digit]
                break;
              case result = parseInt(list[First_digit]) * parseInt(list[Second_digit]) + parseInt(list[Third_digit]) / parseInt(list[Fourth_digit]):
                text = list[First_digit] + "*" + list[Second_digit] + "+" + list[Third_digit] + "/" + list[Fourth_digit]
                break;
              case result = parseInt(list[First_digit]) * parseInt(list[Second_digit]) * (parseInt(list[Third_digit]) + parseInt(list[Fourth_digit])):
                text = +list[First_digit] + "*" + list[Second_digit] + "*" + "(" + list[Third_digit] + "+" + list[Fourth_digit] + ")"
                break;
              case result = parseInt(list[First_digit]) / parseInt(list[Second_digit]) * (parseInt(list[Third_digit]) - parseInt(list[Fourth_digit])):
                text = +list[First_digit] + "/" + list[Second_digit] + "*" + "(" + list[Third_digit] + "-" + list[Fourth_digit] + ")"
                break;

            }
            if (result == 24) {
              await db.Solution.create({
                first_digit: list[First_digit],
                second_digit: list[Second_digit],
                third_digit: list[Third_digit],
                fourth_digit: list[Fourth_digit],
                text: text,
              })
              return { text, result }
            }
          }
        }
      }
    }

  }
  catch (err) {
    throw err
  }
}