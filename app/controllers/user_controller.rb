class UserController < ApplicationController
    before_action :authenticate_user!

    def profile
        @username = User.where(id: current_user.id).first.email
        @questions = Question.where(user_id: current_user.id)
        @question = Question.new
    end

end
