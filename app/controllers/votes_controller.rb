class VotesController < ApplicationController
    before_action :authenticate_user!, :except => [ :register_vote ]

    def register_vote
        q = Question.find(params[:question_id]) # get the row from id of question being played
        if params.has_key?(:voted_answer)
            if (params[:voted_answer] == '1')
                q.update(votes_answer_1: q.votes_answer_1 + 1)
                        # ^ table column   ^ the column of row from the db
            else
                q.update(votes_answer_2: q.votes_answer_2 + 1)
            end
        elsif current_user
            q.update(question_votes: q.question_votes + 1)
        end
        render json: q
    end
    
    def upvote_questions
        @max_votes = 10
        @qs = Question.where('question_votes < ?', @max_votes).order(question_votes: :desc)
        
    end    

end