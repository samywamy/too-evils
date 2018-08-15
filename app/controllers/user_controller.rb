class UserController < ApplicationController
    before_action :authenticate_user!

    def profile
        @username = User.where(id: current_user.id).first.email
        @questions = Question.where(user_id: current_user.id).sort { |q2, q1| (q1.votes_answer_1 + q1.votes_answer_2) <=> (q2.votes_answer_1 + q2.votes_answer_2) }
        @question = Question.new
    end

end
