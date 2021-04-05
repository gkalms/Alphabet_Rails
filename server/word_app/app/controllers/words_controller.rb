class WordsController < ApplicationController
    def index
        render json: Word.all
      end
    
      # def create
      #   word = Word.create(alphabet: params[:alphabet], words: params[:words])
      #   word_valid = word.valid?
      #   if word_valid
      #     render json: { message: 'Succesful creation' }, status: 200
      #   else
      #     render json: { message: 'Unsuccesful creation attempt' }, status: 400
      #   end
      # end
    
      def show
        render json: Word.find(params[:id])
      end

      # def show
        # render json: Word.find_by(alphabet: params[:id])
      # end
    
      def update
        word = Word.find(params[:id])
        word.update(alphabet: params[:alphabet], words: params[:words])
        render json: { message: 'succesful update' }, status: 200
      end
    
      def destroy
        Word.destroy(params[:id])
        render json: { message: 'succesfully deleted' }, status: 200
      end
end
