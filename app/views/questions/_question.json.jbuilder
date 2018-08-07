json.extract! question, :id, :answer_1, :answer_2, :votes_1, :votes_2, :user_id, :created_at, :updated_at
json.url question_url(question, format: :json)
