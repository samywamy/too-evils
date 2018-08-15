class HomeController < ApplicationController

	def index
		@maxId = Question.maximum(:id)
	end
end
