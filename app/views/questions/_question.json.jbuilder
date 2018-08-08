json.extract! question, :id, :answer_1, :answer_2, :votes_answer_1, :votes_answer_2, :question_votes, :user_id, :created_at, :updated_at
json.url question_url(question, format: :json)
