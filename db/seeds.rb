User.create!([
  {email: "hi@sam.com", password: "123qwe", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 9, current_sign_in_at: "2018-08-16 08:17:07", last_sign_in_at: "2018-08-16 08:06:09", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"}
])
Question.create!([
  {answer_1: "Give up fruits", answer_2: "Give up vegetables", votes_answer_1: 14, votes_answer_2: 10, question_votes: 10, user_id: 1},
  {answer_1: "Never have to eat", answer_2: "Never have to sleep", votes_answer_1: 7, votes_answer_2: 7, question_votes: 10, user_id: 1},
  {answer_1: "Be Superman", answer_2: "Be Batman", votes_answer_1: 17, votes_answer_2: 26, question_votes: 10, user_id: 1},
  {answer_1: "Lose your only child", answer_2: "Lose your spouse", votes_answer_1: 5, votes_answer_2: 3, question_votes: 10, user_id: 1},
  {answer_1: "Have no eyes", answer_2: "Have no limbs", votes_answer_1: 11, votes_answer_2: 22, question_votes: 10, user_id: 1},
  {answer_1: "Be 1 meter tall", answer_2: "Be 3 meters tall", votes_answer_1: 8, votes_answer_2: 12, question_votes: 10, user_id: 1},
  {answer_1: "Constantly stumble when walking", answer_2: "Constantly stutter when speaking", votes_answer_1: 10, votes_answer_2: 9, question_votes: 10, user_id: 1},
  {answer_1: "Give up sweet foods", answer_2: "Give up salty foods", votes_answer_1: 20, votes_answer_2: 4, question_votes: 10, user_id: 1},
  {answer_1: "Drown to death", answer_2: "Burn to death", votes_answer_1: 11, votes_answer_2: 7, question_votes: 10, user_id: 1},

  {answer_1: "Master all spoken languages", answer_2: "Master all programming languages", votes_answer_1: 16, votes_answer_2: 13, question_votes: 10, user_id: 1},
  {answer_1: "Be able to speak any language", answer_2: "Be able to play any instrument", votes_answer_1: 21, votes_answer_2: 16, question_votes: 10, user_id: 1},
  {answer_1: "Travel 500 years into the past", answer_2: "Travel 500 years into the future", votes_answer_1: 0, votes_answer_2: 0, question_votes: 8, user_id: 1},
  {answer_1: "Have a massive beer belly", answer_2: "Have 3 chins", votes_answer_1: 9, votes_answer_2: 5, question_votes: 10, user_id: 1},
  {answer_1: "Have to hold your pee all day", answer_2: "Have to go pee every 5 minutes", votes_answer_1: 6, votes_answer_2: 5, question_votes: 10, user_id: 1},
  {answer_1: "Have narcolepsy", answer_2: "Have chronic insomnia", votes_answer_1: 6, votes_answer_2: 4, question_votes: 10, user_id: 1},
  {answer_1: "Never read another book", answer_2: "Never hear another song", votes_answer_1: 0, votes_answer_2: 0, question_votes: 9, user_id: 1},
  {answer_1: "Know when you will die", answer_2: "Know how you will die", votes_answer_1: 0, votes_answer_2: 0, question_votes: 9, user_id: 1},
  {answer_1: "Have 3 boobs", answer_2: "Have 2 dicks", votes_answer_1: 15, votes_answer_2: 14, question_votes: 10, user_id: 1},
  {answer_1: "Always breathe like Darth Vader", answer_2: "Always talk like Yoda", votes_answer_1: 8, votes_answer_2: 20, question_votes: 10, user_id: 1},
  {answer_1: "Be filthy rich but stupid", answer_2: "Be a genius but poor", votes_answer_1: 0, votes_answer_2: 0, question_votes: 9, user_id: 1},
  {answer_1: "Be able to read minds", answer_2: "Be able to turn invisible", votes_answer_1: 10, votes_answer_2: 10, question_votes: 10, user_id: 1},
  {answer_1: "Always be a little bit too hot", answer_2: "Always be a little bit too cold", votes_answer_1: 6, votes_answer_2: 6, question_votes: 10, user_id: 1},
  {answer_1: "Take the red pill", answer_2: "Take the blue pill", votes_answer_1: 0, votes_answer_2: 0, question_votes: 8, user_id: 1},
  {answer_1: "Only always fart loudly", answer_2: "Only always fart silent but deadly", votes_answer_1: 16, votes_answer_2: 19, question_votes: 10, user_id: 1},
  {answer_1: "Be super handsome but balding", answer_2: "Average looking with gorgeous hair", votes_answer_1: 15, votes_answer_2: 17, question_votes: 10, user_id: 1},
  {answer_1: "Vomit all day", answer_2: "Diarrhea all day", votes_answer_1: 4, votes_answer_2: 30, question_votes: 10, user_id: 1},
  {answer_1: "Be sleepy all the time", answer_2: "Be hungry all the time", votes_answer_1: 5, votes_answer_2: 1, question_votes: 10, user_id: 1},
  {answer_1: "Go off pitch everytime you talk", answer_2: "Always talk like Siri", votes_answer_1: 6, votes_answer_2: 18, question_votes: 10, user_id: 1}
])
