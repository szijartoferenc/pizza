<?php

namespace App\Models;
use App\Models\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attributevalue extends Model
{
    use HasFactory;
    protected $table = 'attributevalues';
    protected $fillable = [
        'attribute_id',
        'slug',
        'name',
        'status',

    ];

    protected $with = ['attribute'];
    public function attribute()
    {
        return $this->belongsTo(Attribute::class, 'attribute_id', 'id');
    }



}
