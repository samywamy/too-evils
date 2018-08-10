class HomeController < ApplicationController
	def index
		@q = Question.first
	end
end
