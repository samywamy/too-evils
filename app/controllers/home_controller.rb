class HomeController < ApplicationController
	
	def index
		@q = Question.first
		# @q = Question.new
		# @q.answer_1 = "pee"
		# @q.answer_2 = "hairball"
	end
end
