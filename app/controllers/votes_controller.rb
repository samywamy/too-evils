class VotesController < ApplicationController

    def register_vote
        q = Question.find(params[:question_id]) # get the row from id of question being played

        if (params[:voted_answer] == '1')
            q.update(votes_answer_1: q.votes_answer_1 + 1)
                    # ^ table column   ^ the column of row from the db
        else
            q.update(votes_answer_2: q.votes_answer_2 + 1)
        end

        render json: q
	end
end