<?php

namespace App\Models;
use App\Models\attributevalue;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    use HasFactory;
    protected $table = 'attributes';
    protected $fillable = [
        'slug',
        'name',
        'status',

    ];

    public function attributevalue()
    {
        return $this->hasMany(Attributevalue::class);
    }
}
