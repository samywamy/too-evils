class HomeController < ApplicationController
    include Constants

	def index
        @q_arr = Question.where('question_votes >= ?', MIN_VOTES).pluck(:id).shuffle
	end
end
